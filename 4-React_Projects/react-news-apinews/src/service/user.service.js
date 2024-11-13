import axios from "axios"


export const addUser = (newUser) => {
    return axios.post('http://localhost:4000/user', newUser)
}

export const validateUser=(email, password)=>{
    return axios.get('http://localhost:4000/user?email='+email+'&password='+password)
}
