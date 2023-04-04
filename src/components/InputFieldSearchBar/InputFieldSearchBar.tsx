import { Input } from "./styledComponents";

interface InputFieldSearchBarProps {
    placeholder: string;
    onChange: (value: any) => void;
}

const InputFieldSearchBar = (props: InputFieldSearchBarProps) => {

    const onChange = (event: any) => {
        props.onChange(event.target.value)
    }

    return (

        <Input placeholder={props.placeholder} onChange={onChange} />

    )

}
export default InputFieldSearchBar;