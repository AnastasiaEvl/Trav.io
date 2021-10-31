import React, {useEffect, useState} from "react";
import "./StyleEntrance.css";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../reducers/UserReducer";
import {auth} from "./action/user";
import "../Registered/Registered.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import {green} from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';




function Enter() {

    function newUser() {
        window.location = '/reg';
    }

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [emptyEmail, setEmptyEmail] = useState(false);
    const [emptyPassword, setEmptyPassword] = useState(false);

    const [errorEmail, setErrorEmail] = useState("Введите e-mail");
    const [errorPassword, setErrorPasword] = useState("Введите пароль");

    const [checked, setChecked] = useState(false);


    function buttonChange() {
        if (errorEmail || errorPassword) {
            return false
        } else {
            let el = document.getElementById("button_added");
            el.style.backgroundColor = "green";
            el.style.color = "white";
            return true;
        }
    }

    const emailHandler = (data) => {
        setEmail(data.target.value);
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(data.target.value).toLowerCase())) {
            setErrorEmail("Неверный e-mail");
        } else {
            setErrorEmail("");
        }
    };

    const emailMessage = () => {
        if (email !== "") {
            setEmptyEmail(true);
        } else if (email === "") {
            setEmptyEmail(false);
            let pas = document.getElementById("outlined-search");
            pas.color = "error";
            return true;
        } else if (String(email).length > 0) {
            setEmptyEmail(true)
        }
    }

    const passwordMessage = () => {
        if (String(password).length > 0) {
            console.log(password);
            setEmptyPassword(true)
        } else if (password === "") {
            setEmptyPassword(false);
        } else if (password !== "") {
            setEmptyEmail(true);
        }
    }

    const passHandler = (data) => {
        setPassword(data.target.value);
        const re =
            /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,14}/g;
        if (!re.test(String(data.target.value))) {
            setErrorPasword(
                "Пароль не соответствует требованиям:-не менее одного числа;- !@#$%^&*- хотя бы один указанный спецсимвол;- не менее одной латинской буквы в нижнем регистре;- не менее одной латинской буквы в верхнем регистре;-длина пароля:от 8 до 14 символов;"
            );
        } else {
            setErrorPasword("");
        }
    };



    function mainPage() {
        window.location = "/main";
    }


    return (
        <div className="registered">

            <div ><img className="firstLogo" src="./images/smallLogoForEnter.svg" onClick={mainPage}/></div>

            <div><img className="big_bigLogo" src="./images/big_bigLogo.png"/></div>
            {isAuth && <div className="Reg" onClick={() => dispatch(logout())}>
                Выход
            </div>}
            <div className="form1">
                <div>Вы уже зарегистрированы в системе?</div>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '100%'},

                    }}
                    noValidate
                    autoComplete="off"
                >

                    <div className='inputs'>
                        {emptyEmail && errorEmail && (
                            <div className="errorMessage">{errorEmail}</div>)}

                        <TextField value={email} error = {(emptyEmail && errorEmail) } id="outlined-search" label="Email" type="success" color="success"
                                   onBlur={(data) => emailMessage(data)}
                                   type="email"
                                   name="UserEmail"
                                   required
                                   onChange={
                                       ((data) => setEmail(data.target.value),
                                           (data) => emailHandler(data))

                                   }
                        />
                        {emptyPassword && errorPassword && (
                            <div className="errorMessage2">{errorPassword}</div>
                        )}
                        <FormControl error={(emptyPassword && errorPassword)} color="success" sx={{m: 1, width: '100%'}} variant="outlined"
                                     value={password}
                                     onBlur={(data) => passwordMessage(data)}
                                     type="password"
                                     name="password"
                                     required
                                     onChange={
                                         ((data) => setPassword(data.target.value),
                                             (data) => passHandler(data)
                                         )
                                     }>
                            <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
                            <OutlinedInput

                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"/>

                        </FormControl>

                    </div>
                </Box>
                <div className="checks">
                    <Checkbox checked={checked}
                              onChange={() => setChecked(!checked)}
                              sx={{
                                  '&.Mui-checked': {
                                      color: green[600],
                                  },
                              }}
                    />
                    <div className="words"> <span className="remember">
                  Запомнить меня
              </span>
                        <a href='#'><span className="forget">Забыли пароль?</span></a>

                    </div>
                </div>
                <div className="btn_added">
                    <button className="Added" className="RegisterBtn"
                            type="submit"
                            id='button_added'
                            name="confirmPass"
                            // disabled={!buttonChange()}
                            onClick={() => dispatch(auth(email, password))}>Присоединиться
                    </button>
                </div>
            </div>
            <div className="form2">
                <div className="newUser1">Регистрация нового пользователя</div>
                <div>
                    <button className="btn_reg_one" onClick={newUser}>Зарегистрироваться</button>
                </div>
            </div>
        </div>)
}


export default Enter;
