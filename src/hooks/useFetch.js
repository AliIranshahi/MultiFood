import {useEffect, useState} from 'react';
export const useFetch = (url , method = 'GET') => {
    const [data , setData] = useState(null)
    const [error , setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [option , setOption] = useState(null);
    const postData = (postData) =>{
        setOption({
            method : "POST" , 
            headers : {
                "Content-Type" : "application/json"
            },
            body :JSON.stringify(postData)
        })
    }
    useEffect(()=>{
        const Fetch = async (fetchOptions) =>{
            try {
                setLoading(true);
                const response = await fetch(url , {...fetchOptions});
                if(!response.ok){
                    throw new Error(response.statusText);
                }
                const json = await response.json();
                setData(json);
                setLoading(false);
                setError(null);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }
        if(method === "GET"){
            Fetch();
        }
        if(method === "POST" && option){
            Fetch(option);
        }
    },[url , method , option])
    
    return{data , error , loading , postData}
}