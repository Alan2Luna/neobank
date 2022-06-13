import { useEffect, useState } from 'react'

const API = 'https://json-server-neobank.herokuapp.com/data'

export interface Data {
    Date:        Date,
    Open:        number,
    High:        number,
    Low:         number,
    Close:       number,
    "Adj Close": number,
    Volume:      number
}


export function useFetch() {
    const [ data, setData ] = useState<Data[]>([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ isError, setIsError ] = useState(false)

    const fetchData = async () => {
        const response = await fetch(API)

        if(!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message)
        }
        const data = await response.json() as Data[];
    
        return data;
    }

    useEffect(() => {
        setIsError(false)
        setIsLoading(true)
        fetchData()
            .then( data => {
                setData(data)
                setIsLoading(false)
            })
            .catch(err => {
                console.error(err)
                setIsError(true)
                setIsLoading(false)
            })
            
    }, [])

    return {
        data,
        isLoading,
        isError
    }
};