import { use, useEffect, useState } from "react";
import axios from "axios";
 function useCurrency(currency:any) {
    const [info, setinfo] = useState({})
    useEffect(() => {
        axios.get(`https://api.exchangerate-api.com/v4/latest/${currency}`).then((response) => {
            setinfo(response.data.rates);
            console.log(response.data.rates);
        });
     },[currency])
     return info;
 }
export default useCurrency;