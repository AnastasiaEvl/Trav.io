import axios from "axios";
import {setUser} from "../../reducers/UserReducer";
import {Redirect} from "react-router";
import React from "react";


export const registration = (email, password, organizationalLegalForm, organizationName,
                             fieldOfActivity, unp, address, last_name, first_name,
                             patronymic, position, phone_number, coord) => {
    console.log(email + " " + password + " " + organizationalLegalForm + " " + organizationName + " "
        + fieldOfActivity + " " + unp + " " + address + " " + last_name + " " + first_name + " "
        + patronymic + " " + position + " " + phone_number + " " + coord);
    return async dispatch => {
        try {
            console.log("try");
            const response = await axios.post(`http://localhost:3001/login`, {
                "email": { email },
              "password": { password },
               "organizationalLegalForm": organizationalLegalForm,
               "organizationName": organizationName,
                "fieldOfActivity": fieldOfActivity,
               "unp": unp,
               "address": address,
               "last_name": last_name,
               "first_name": first_name,
             "patronymic": patronymic,
                  "position": position,
             "phone_number": phone_number,
            "coord" : coord,
            })
            console.log("I registered" + response);
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            console.log("I'm not registered")
            alert('ERROR_LOGIN')
        }
    }
}

export const auth = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:3001/auth`, {
                "email": email,
                "password": password,
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log("I have token");
            return <Redirect to="main"/>;
        } catch (e) {
            console.log("token not given")
           
        }
    }
}

export const logout = () => {
    localStorage.clear();
}

export const sendToken = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:3001/auth`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert("ERROR_AUTH")
            localStorage.removeItem('token')
        }
    }
}