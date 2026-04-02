import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const FirstContext = createContext()
const UserContext = (children) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            const pro = await axios.get("https://dummyjson.com/users");
            setData(pro.data.users);
            // console.log(pro.data.users);
        })();
    }, []);
    return <FirstContext.provider value={data,setData}>{children}</FirstContext.provider>
}

export default UserContext