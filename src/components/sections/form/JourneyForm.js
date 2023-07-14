import { DefaultButton } from "@/components/Buttons"
import SectionTitle from "@/components/SectionTitle"
import InputField, { FileUploader } from "@/components/form/InputField"
import { JourneyFormWrapper } from "@/styles/components"
import { FormController } from "@/styles/components"
import { useForm } from "react-hook-form"
import {FaArrowRight} from 'react-icons/fa'

const JourneyForm = ({title}) => {

    const {register, formState: { errors }, handleSubmit} = useForm();

    const onSubmit = (data)=> {
        console.log(data)
    }

  return (
    <JourneyFormWrapper>
        <SectionTitle subtitle={'Start Your Journey'} title={title}/>

        <FormController onSubmit={handleSubmit(onSubmit)}>
            <InputField 
                title={'Journey Name'}
                type={'text'}
                validation={...register("username", { required: true, maxLength: 20 })}
                errorHandler={{
                    isError: errors.username?.type === 'required',
                    message: 'First name is required'
                }}
            />

            <InputField 
                title={'Start Date'}
                type={'date'}
                validation={...register("start_date", { required: true, maxLength: 20 })}
                errorHandler={{
                    isError: errors.start_date?.type === 'required',
                    message: 'Start date is required'
                }}
            />

            <InputField 
                title={'End Date'}
                type={'date'}
                validation={...register("end_date", { required: true, maxLength: 20 })}
                errorHandler={{
                    isError: errors.end_date?.type === 'required',
                    message: 'End date is required'
                }}
            />

            <FileUploader 
                title={'Upload Picture'}
                validation={...register("banner_picture", { required: true })}
                errorHandler={{
                    isError: errors.banner_picture?.type === 'required',
                    message: 'Journey picture required'
                }}
            />

            <DefaultButton 
                title={'Login'} type={'submit'}
            >
                <FaArrowRight />
            </DefaultButton>
        </FormController>
        
    </JourneyFormWrapper>
  )
}

export default JourneyForm