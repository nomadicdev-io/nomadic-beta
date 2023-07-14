import { DefaultButton } from "@/components/Buttons";
import { FormController } from "@/styles/components";
import { HomeSearchWrapper } from "@/styles/home.styles"
import axios from 'axios';
import { atom, useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react"
import {RiSearchLine} from 'react-icons/ri'
import {FaArrowRight} from 'react-icons/fa'
import { addDoc, collection } from "firebase/firestore"; 
import { db } from "../../../../firebase/firebase";
import Loader from "../Loader";

export const targetID = atom(null)

const HomeSearch = () => {

    const [value, setValue] = useState('')
    const [destination, setDestination] = useState(null);
    const [selectedDes, setSelectedDes] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const setTargetID = useSetAtom(targetID)

    const router = useRouter();

    const searchCountry = async (e)=> {
        setValue(e.target.value);
        try{
            const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`);
            setDestination(response.data.features)
        } catch(err){
            console.log(err)
        }
    }

    const selectedLoc = (e)=> {
        setSelectedDes({...e, is_form_completed: false})
        setDestination(null)
        setValue(e.place_name)
    }

    const submitDestination = async (e)=> {
        e.preventDefault();

        if(!selectedDes) return;
        setIsLoading(true);
        try {
            const res = await addDoc(collection(db, "journey"), selectedDes);
            setTargetID(res.id)
            setIsLoading(false);
            router.push('/start-journey')
        }catch(error){
            setIsLoading(false);
            console.log(error)
        }

    }

  return (
    <HomeSearchWrapper>
        <FormController onSubmit={submitDestination}>
            <div className="input_">
                <input type="text" value={value} placeholder="Start your journey" onChange={searchCountry}/>
                <div className="icon_">
                    <RiSearchLine />
                </div>

                {
                    destination?.length > 1 &&
                    <ul className='search_suggestion'>
                        {
                            destination.map((item)=> (
                            <li key={item.id} onClick={()=> selectedLoc(item)}>
                                <h4>{item.text}</h4>
                                <p>{item.place_name}</p>
                            </li>
                            ))
                        }
                    </ul>
                }
            </div>
            
            <DefaultButton title={'Start Your Journey'} type={'submit'}>
                <FaArrowRight />
            </DefaultButton>
        </FormController>

        {
            isLoading && <Loader />
        }
    </HomeSearchWrapper>
  )
}

export default HomeSearch