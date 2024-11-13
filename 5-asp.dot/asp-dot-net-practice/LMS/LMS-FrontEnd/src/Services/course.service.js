import axios from "axios"
const _url=import.meta.env.VITE_API_URL
export function addCourse(course){
    return axios.post(`${_url}/course`,course)
  
}
export function viewCourse(){
    console.log(_url);
   var res=axios.get(`${_url}/course`);
   return res;
}