import axios from "axios";
import {setUser} from "../../reducers/UserReducer";




export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:3001/login`, {
                email,
                password,
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}