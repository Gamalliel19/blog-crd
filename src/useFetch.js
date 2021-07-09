import { useState,  useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPendng, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch the data for that resource');
            }
            return res.json()
        })
        .then(data => {
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            setError(err.message)
            setIsPending(false)
        })
    }, [url])

    return {data, isPendng, error}
}

export default useFetch;