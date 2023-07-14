'use client'

import Loader from "@/components/sections/Loader"
import MapArea from "@/components/sections/MapArea"
import { targetID } from "@/components/sections/home/HomeSearch"
import { MapSection } from "@/styles/home.styles"
import { useAtomValue } from "jotai"
import { useEffect, useState } from "react"
import { db } from "../../../firebase/firebase"
import { collection, doc, getDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"
import JourneyForm from "@/components/sections/form/JourneyForm"

const StartJourney = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const getTargetID = useAtomValue(targetID);
    const [data, setData] = useState(null);

    const form = {
        title: null,
        start_date: null,
        end_date: null,
        destinations: []
    }

    const router = useRouter();

    const getJournetDetails = async ()=> {

       // if(!getTargetID) router.push('/');

        try{
            const res = await getDoc(doc(db, 'journey', 'RiT18xbjTWQIQuegpAb5' ))
            setData(res.data())
            console.log(res.data())
            setIsLoading(false)

        }catch(error){
            console.log(error);
            setIsLoading(false)
        }
    }

    useEffect(()=> {
        getJournetDetails();
    }, []);

  return (
    <MapSection data-map-area>

        {
            data && 
            <>
                <MapArea center={data?.center} />
                <JourneyForm title={data?.place_name}/>
            </>
        }

        {
            isLoading && <Loader /> 
        }
    </MapSection>
  )
}

export default StartJourney