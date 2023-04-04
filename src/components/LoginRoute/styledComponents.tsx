import styled from 'styled-components';
export const SubmitButton = styled.button`
    width: 80%;
    height: 40px;
    border-radius: 4px;
    background-color: #352fe2;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 20px;
  
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${props => props.theme.backgroundColor};
    width: 100%;
    color: ${props => props.theme.primaryTextColor};

`;

export const LoginForm = styled.div`
    display: flex;  
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    padding: 20px;
    background-color: ${props => props.theme.primaryColor};
    border-radius: 4px;

`;

export const NxtWatchLogo = styled.img`

    width: 150px;
    height:40px;
    margin-bottom: 20px;
    @media (max-width: 576px) {
        width: 80px;
        height: 25px;
    }
`;

export const ShowPasswordCheckBox = styled.input`
    display: flex;
    flex-direction: row;
    justify-content: start;     
margin-right: 8px;
`;

export const ShowPasswordContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    height: 20px;
    /* align-items: center; */
    width: 80%;
`;

export const ShowPasswordLabel = styled.label`
width: 90%;
`;

export const ErrorMesageContainer = styled.div`
    display: flex;

    flex-direction: row;
    justify-content: start; 
    width: 80%;
    height: 20px;
    margin-bottom: 10px;
    `;
export const ErrorMesage = styled.p`

    color: red;
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
    /* text-align: center; */
`;