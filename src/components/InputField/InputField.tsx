
import { text } from "stream/consumers";
import { Input, InputContainer, InputLabel } from "./styledComponents";

interface InputFieldProps {
    type: string;
    placeholder: string;
    value?: string;
    theme?: string;

    onChange: (value: string) => void;


}

const InputField = (props: InputFieldProps) => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value)
    }

    const renderInputField = (type: string) => {
        switch (type) {
            case "password":
                return <>
                    <InputLabel theme={props.theme} htmlFor={(props.placeholder).toUpperCase()}>{props.placeholder}</InputLabel>
                    <Input type={props.type} placeholder={props.placeholder} onChange={onChange} theme={props.theme} />
                </>
            case "text":
                return <>
                    <InputLabel theme={props.theme} htmlFor={(props.placeholder).toUpperCase()}>{props.placeholder}</InputLabel>
                    <Input type={props.type} placeholder={props.placeholder} onChange={onChange} theme={props.theme} /></>
            default:
                return <><Input typeofInput={props.type} placeholder={props.placeholder} onChange={onChange} theme={props.theme} /></>
        }
    }
    return (
        < InputContainer >
            {renderInputField(props.type)}
        </InputContainer >
    )
}

export default InputField;
