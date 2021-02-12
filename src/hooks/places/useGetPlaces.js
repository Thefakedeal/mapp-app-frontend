import { useEffect, useState } from 'react'
import {getData} from '../../helpers/fetchData'

export default function useGetPlaces() {
    const [loading, setLoading] = useState(false);
    const [err,setErr] = useState('');
    const [result, setResult] = useState([]);

    async function getPlace(){
        try{
            setLoading(true);
            const places = await getData({endpoint:`/api/v1/places`})
            setResult(places)
        }catch(err){
            setErr(JSON.stringify(err));
        }finally{
            setLoading(false);
        }

    }

    useEffect(()=>{
        getPlace()
    },[]);
    return { err, loading, result }
}
