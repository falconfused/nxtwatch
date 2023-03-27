import { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { AuthStore } from '../../stores/AuthStore/AuthStore';
import {Status} from '../../constants/constants';
import Cookies from 'js-cookie';

import { useNavigate } from 'react-router-dom';
import { ErrorMesage, LoginContainer, LoginForm, NxtWatchLogo, ShowPasswordCheckBox, ShowPasswordContainer, ShowPasswordLabel, SubmitButton } from './styledComponents';
import InputField from '../InputField/InputField';
import { ThemeStore } from '../../stores/ThemeStore/ThemeStore';

interface LoginRouteProps {

}
interface injectedThemeProps extends LoginRouteProps {
    themeStore: ThemeStore;
}

interface injectedAuthProps extends LoginRouteProps {
    authStore: AuthStore;
}





const LoginRoute =
    inject("authStore", "themeStore")(observer((props: LoginRouteProps) => {
        const { authStore } = props as injectedAuthProps;
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [showPassword, setShowPassword] = useState(false);
        const [errorMessage, setErrorMessage] = useState('');
        const [showErrorMessage, setShowErrorMessage] = useState(false);
        const token = Cookies.get('jwt_token');
        const { themeStore } = props as injectedThemeProps;
        const theme = themeStore.theme;
        const navigate = useNavigate();
        if (token !== undefined) {
            navigate('/home');
        }


        useEffect(() => {
            if (token !== undefined) {
                navigate('/home');
            }
        })
        const handleUsernameChange = (value: string) => {
            setUsername(value);
        }
        const handlePasswordChange = (value: string) => {
            setPassword(value);
        }
        const handleShowPassword = () => {
            setShowPassword(!showPassword);
        }
        const handleSubmit = async () => {

            // console.log(authStore.loginStatus)
            await authStore.login(username, password);
            const { loginStatus, errorMessage } = authStore;
            console.log(loginStatus)
            if (loginStatus === Status.ERROR) {
                setErrorMessage(authStore.errorMessage);
                setShowErrorMessage(true);
            }
            else if (loginStatus === Status.SUCCESS) {
                setErrorMessage('');
                setShowErrorMessage(false);
            }


        }

        console.log(username, password)
        return (
            <LoginContainer>
                <LoginForm>
                    <NxtWatchLogo src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png' />
                    <InputField
                        placeholder='USERNAME'
                        type='text'
                        value={username}
                        theme={theme}
                        onChange={handleUsernameChange}
                    ></InputField>
                    <InputField
                        placeholder='PASSWORD'
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        theme={theme}
                        onChange={handlePasswordChange}
                        isPassword={true}
                        showPassword={showPassword}
                    ></InputField>
                    <ShowPasswordContainer theme={theme}>
                        <ShowPasswordCheckBox name='show-password' type='checkbox' onChange={handleShowPassword} />
                        <ShowPasswordLabel htmlFor='show-password'>Show Password</ShowPasswordLabel>
                    </ShowPasswordContainer>
                    <SubmitButton theme={theme} onClick={handleSubmit}> {
                        authStore.loginStatus === Status.LOADING ? "Loading" :
                            "Submit"
                    }</SubmitButton>
                    {showErrorMessage && <ErrorMesage theme={theme}>{errorMessage}</ErrorMesage>}

                </LoginForm>
            </LoginContainer>
        );
    }))








export default LoginRoute;