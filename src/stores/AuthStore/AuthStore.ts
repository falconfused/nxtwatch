import Cookies from 'js-cookie';
import { action, observable } from 'mobx';

import { Status } from '../../constants/constants';

interface AuthStoreProps {
    errorMessage: string;
    loginStatus: Status;
    token: string;


    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}


class AuthStore {

    @observable errorMessage = '';
    @observable loginStatus = Status.INITIAL;
    @observable token: string | undefined = '';

    @action login = async (username: string, password: string) => {
        this.loginStatus = Status.LOADING;
        const url = "https://apis.ccbp.in/login";
        const options = {
            method: "POST",
            body: JSON.stringify({ username, password })
        };
        const response = await fetch(url, options);
        const data = await response.json();

        console.log(data)
        if (response.ok) {

            this.loginStatus = Status.SUCCESS;
            this.token = data.jwt_token;
            if (this.token)
                Cookies.set('jwt_token', this.token, { expires: 30 });


        }
        else {
            console.log(data.error_msg)
            this.loginStatus = Status.ERROR;
            this.errorMessage = data.error_msg;
        }
    }

    @action logout = () => {
        this.loginStatus = Status.INITIAL;
        Cookies.remove('jwt_token');
        this.token = undefined;
    }
}

export { AuthStore };
