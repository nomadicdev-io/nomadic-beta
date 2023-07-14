import { AttachmentBox, InputFieldStyled } from "@/styles/components"
import { useId } from "react"
import {BiImages} from "react-icons/bi"

const InputField = ({title, type, icon, validation, errorHandler, autocomplete }) => {

    const id = useId();

    return (
        <InputFieldStyled className={icon ? 'icon_' : null }>
            <label htmlFor={id} >{title}</label>
            <input 
            id={id} 
            type={type ? type : 'text'} 
            autoComplete={autocomplete}
            {...validation} 
            className={errorHandler.isError ? 'error_' : null}/>
            {
                icon && 
                <div className="input_icon">
                    {icon}
                </div>
            }
        </InputFieldStyled>
    )
}

export const FileUploader = ({title, validation, errorHandler})=> {

    const id = useId();

    return (
        <InputFieldStyled>
            <label htmlFor={id} >{title}</label>
            <AttachmentBox>
                <input 
                id={id} 
                type={'file'} 
                {...validation} 
                className={errorHandler.isError ? 'error_' : null}/>

                <div className="attach_icon">
                    <BiImages />
                </div>
            </AttachmentBox>
        </InputFieldStyled>
    )
}

export default InputField