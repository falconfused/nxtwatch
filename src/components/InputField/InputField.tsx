import { Input, InputContainer, InputLabel } from "../LoginRoute/styledComponents";

interface InputFieldProps {
    type: string;
    placeholder: string;
    value: string;
    theme: string;
    onChange: (value: string) => void;
    isPassword?: boolean;
    showPassword?: boolean;

}

const InputField = (props: InputFieldProps) => {
    const onChange = (event: any) => {
        props.onChange(event.target.value)
    }


    return (
        <InputContainer>
            <InputLabel theme={props.theme} htmlFor={(props.placeholder).toUpperCase()}>{props.placeholder}</InputLabel>
            <Input type={props.type} placeholder={props.placeholder} onChange={onChange} theme={props.theme} />
        </InputContainer>
    )
}

export default InputField;
