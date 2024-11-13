import axios from "axios"
const _url=import.meta.env.VITE_API_URL1
export function addCourse(course){

    
    console.log(_url)
    return axios.post(_url,{course})
  
}
export function viewCourse(){

    return axios.get(_url)
}