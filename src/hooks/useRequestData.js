import axios from "axios";
import { useEffect, useState } from "react";


export const useRequestData = (url) => {
    const [data, setData] = useState(undefined)

    useEffect(() => {
      axios.get(url)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [url])
    
    return data
}