import { useEffect, useState } from "react"
const Hook = () => {
   
     const [rooms, setRooms] = useState([]);

        useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setRooms(data));
        },[])
       
        return[rooms, setRooms];
    }

export default Hook;