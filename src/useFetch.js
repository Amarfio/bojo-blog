import { useState, useEffect } from 'react';

const useFetch =(endpointUrl)=>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const aborCont = new AbortController();

            setTimeout(()=>{
                fetch(endpointUrl, {signal: aborCont.signal})
                .then(res=>{
                    // console.log(res);
                    if(!res.ok){
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    // console.log(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if(err.name=== 'AbortError'){
                        console.log('fetch aborted');
                    }else{
                        setIsPending(false);
                        setError(err.message);
                        console.log(err.message);
                    }
                })
            }, 1000)
        }, [endpointUrl]);

        return { data, isPending, error}
}

export default useFetch;