import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Cookies from 'js-cookie';
import { NXT_WATCH_LOGO_DARK, NXT_WATCH_LOGO_LIGHT } from '../../constants/ImageUrl';
import { AuthStore } from '../../stores/AuthStore/AuthStore';
import { ThemeStore } from '../../stores/ThemeStore/ThemeStore';
import { Status, Theme } from '../../constants/constants';
import InputField from '../InputField/InputField';
import { ErrorMesage, ErrorMesageContainer, LoginContainer, LoginForm, NxtWatchLogo, ShowPasswordCheckBox, ShowPasswordContainer, ShowPasswordLabel, SubmitButton } from './styledComponents';


interface LoginRouteProps {

}
interface injectedProps extends LoginRouteProps {
    themeStore: ThemeStore;
    authStore: AuthStore;
}






const LoginRoute =
    inject("authStore", "themeStore")(observer((props: LoginRouteProps) => {
        const { authStore } = props as injectedProps;
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [showPassword, setShowPassword] = useState(false);
        // const [errorMessage, setErrorMessage] = useState('');
        // const [showErrorMessage, setShowErrorMessage] = useState(false);
        const token = Cookies.get('jwt_token');
        const { themeStore } = props as injectedProps;
        const theme = themeStore.theme;
        const navigate = useNavigate();
        if (token !== undefined) {
            navigate('/home');
        }


        useEffect(() => {
            if (token !== undefined) {
                navigate('/home');
            }
        }, [token])
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
            await authStore.login(username, password);
            const { loginStatus, errorMessage } = authStore;

            if (loginStatus === Status.SUCCESS) {
                authStore.clearErrorMessage();
            }


        }

        return (
            <LoginContainer>
                <LoginForm>
                    <NxtWatchLogo src={themeStore.theme === Theme.LIGHT ? NXT_WATCH_LOGO_LIGHT : NXT_WATCH_LOGO_DARK} />
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

                    ></InputField>
                    <ShowPasswordContainer theme={theme}>
                        <ShowPasswordCheckBox name='show-password' type='checkbox' onChange={handleShowPassword} />
                        <ShowPasswordLabel htmlFor='show-password'>Show Password</ShowPasswordLabel>
                    </ShowPasswordContainer>
                    <SubmitButton theme={theme} onClick={handleSubmit}> {
                        authStore.loginStatus === Status.LOADING ? "Loading" :
                            "Submit"
                    }</SubmitButton>
                    {<ErrorMesageContainer>
                        {authStore.errorMessage != "" &&
                            <ErrorMesage theme={theme}>* {authStore.errorMessage}
                            </ErrorMesage>}
                    </ErrorMesageContainer>}

                </LoginForm>
            </LoginContainer>
        );
    }))








export default LoginRoute;