import { FormController } from "@/styles/components"
import { ButtonGroup, DefaultButton } from "../../Buttons"
import {FaArrowRight} from 'react-icons/fa'
import {AiOutlineUser, AiOutlineLock} from 'react-icons/ai'
import InputField from "../../form/InputField"
import { useForm } from "react-hook-form"
import { signInWithEmailAndPassword } from "firebase/auth";
import Loader from "../Loader"
import { useState } from "react"
import { auth } from "../../../../firebase/firebase"

const LoginForm = () => {

    const {register, formState: { errors }, handleSubmit} = useForm();
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = (data)=> {

        setIsLoading(true);

        const credentials = {email: data.username, password: data.password};

        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error.message)
            setIsLoading(false);
        });
    }

  return (
    <>
        <FormController margin={'1.25rem 0 0'} onSubmit={handleSubmit(onSubmit)}>

            <InputField 
                title={'Username'}
                type={'text'}
                icon={<AiOutlineUser />}
                validation={...register("username", { required: true, maxLength: 20 })}
                errorHandler={{
                    isError: errors.username?.type === 'required',
                    message: 'First name is required'
                }}
            />

            <InputField 
                title={'Password'}
                type={'password'}
                icon={<AiOutlineLock />}
                autocomplete={0}
                validation={...register("password", { required: true, maxLength: 20 })}
                errorHandler={{
                    isError: errors.password?.type === 'required',
                    message: 'First name is required'
                }}
            />

            <ButtonGroup>
                <DefaultButton title={'Login'} type={'submit'}>
                    <FaArrowRight />
                </DefaultButton>
            </ButtonGroup>
            {
                isLoading && <Loader />
            }

        </FormController>

    </>
  )
}

export default LoginForm