import axios from "axios"


const _url=import.meta.env.VITE_API_URL
export const addNewUser = (user) => {
    const response= axios.post(`${_url}/user/`,user)
    console.log(response.data);
    return response.data
    
}


export const login = async (user) => {
    return await axios.get(`${_url}/user/login?email=${user.email}&password=${user.password}`)

}
