import axios from "axios"

const url: string = `https://api.adviceslip.com/advice`

export const getAdvinceslip = async()=>{
    const {data} = await axios.get(url);
    
    return data.slip.advice;
}