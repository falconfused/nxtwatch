import { Input } from "./styledComponents";

interface InputFieldSearchBarProps {
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFieldSearchBar = (props: InputFieldSearchBarProps) => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event)
    }

    return (

        <Input placeholder={props.placeholder} onChange={onChange} />

    )

}
export default InputFieldSearchBar;