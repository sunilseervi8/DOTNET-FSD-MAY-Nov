import axios from "axios"


const _url=import.meta.env.VITE_API_URL
export const addNewUser = (user) => {
    console.log(user,_url)
    const responce= axios.post(_url, user)
    console.log(responce.data);
    return responce.data
    
}


export const login = (user) => {
    return axios.get(`${_url}?email=${user.email}&password=${user.password}`)
}
