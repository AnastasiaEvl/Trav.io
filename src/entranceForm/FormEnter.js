import React, {useState} from "react";
import axios from "axios";
import Modal from "./Modal/Modal";
import TextCDA from "./Modal/TextCDA";
import "./StyleEntrance.css";
import {Redirect} from "react-router";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextWarning from "./PersonalArea/TextWarning";


function FormEnter(props) {
    const {email, setEmail} = props;
    const {password, setPassword} = props;

    const [confirmPassword, setConfirmPassword] = useState();
    const [emptyEmail, setEmptyEmail] = useState(false);
    const [emptyPassword, setEmptyPassword] = useState(false);
    const [emptyConfirmPassword, setEmptyConfirmPassword] = useState(false);
    const [errorEmail, setErrorEmail] = useState("Введите e-mail");
    const [errorPassword, setErrorPasword] = useState("Введите пароль");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(
        "Введите пароль повторно"
    );
    const [checked, setChecked] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [errorTextPassword, setErrorTextPassword] = useState();

    function buttonChange() {
        if (errorPassword || errorEmail || !checked) {
            return false;
        } else {
            let but = document.getElementById('btn_first')
            but.style.backgroundColor= '#52744D';
            but.style.boxShadow='0px 4px 25px rgba(12, 49, 34, 0.2)';
            return true;
        }
    }

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        showConfirmPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };
    const handleChangeOne = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showConfirmPassword: !values.showConfirmPassword,
        });
    };
    const handleClickShowPasswordOne = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPasswordOne = (event) => {
        event.preventDefault();
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const emailHandler = (data) => {
        setEmail(data.target.value);
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(data.target.value).toLowerCase())) {
            setErrorEmail("Некорректный e-mail");
        } else {
            setErrorEmail("");
        }
    };


    const passHandler = (data) => {
        setPassword(data.target.value);
        const re =
            /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,14}/g;
        if (!re.test(String(data.target.value))) {
            setErrorPasword(<TextWarning></TextWarning>);
        } else {
            setErrorPasword("");
        }
    };


    const equalsPassword = (data) => {
        setConfirmPassword(data.target.value);
        if (password !== data.target.value) {
            setErrorConfirmPassword("Пароли не совпадают");
        } else {
            setErrorConfirmPassword("");

        }
    };

    const blurHandler = (data) => {
        switch (data.target.name) {
            case "UserEmail":
                if (email !== "") {
                    cheackEmail();
                }
                setEmptyEmail(true);
                break;
            case "password":
                setEmptyPassword(true);
                break;
            case "confirmP":
                setEmptyConfirmPassword(true);
                break;
        }
    };



    function mainPage() {
        window.location = "/main";
    }

    function postData(props) {
        axios
            .post("http://localhost:3001/signUp", {
                email: {email},
            })
            .then((data) => {
                setRedirect(true);
            })
            .catch((error) =>
                setRedirect(true)
            );
    }

    if (redirect) {
        return <Redirect to="signUp"/>;
    }

    function cheackEmail(data) {
        axios
            .post("http://cabe-134-17-6-60.ngrok.io/logged_in_one", {
                email: email,
            })
            .then((email) => {
                if (data.email === email) {
                   let m = alert("Пользователь с таким именем существует");
                } else {
                    alert("ОК");
                }
                console.log("Ok");
            })
            .catch((data) => console.log("error"));
    }

    return (

        <div className="registered">
            <div><img className="firstLogo" src="./images/smallLogoForEnter.svg" onClick={mainPage}/></div>
            <div><img className="big_bigLogo" src="./images/big_bigLogo.png"/></div>
            <div><img className="numbers" src="./images/o_t_t.png"/></div>


            <div className="form3">

                <div className="newUserTitle">Регистрация нового пользователя</div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '100%'},

                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className='inputs2'>
                        {emptyEmail && errorEmail && (
                            <div className="errorMessage">{errorEmail}</div>
                        )}

                        <TextField
                            value={email}
                            error={emptyEmail && errorEmail}
                            onBlur={(data) => blurHandler(data)}
                            type="email"
                            id="outlined-search"
                            name="UserEmail"
                            color="success"
                            label="Email"
                            onChange={
                                ((data) => setEmail(data.target.value),
                                    (data) => emailHandler(data))
                            }
                        />

                        {emptyPassword && errorPassword && (
                            <div className="errorMessage2">{errorPassword}</div>
                        )}
                        <FormControl  error={(emptyPassword && errorPassword)} color="success" onChange={
                            ((data) => setPassword(data.target.value),
                                (data) => passHandler(data))
                        }sx={{m: 1, width: '100%'}} >
                            <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
                            <OutlinedInput
                                variant="outlined"
                                value={password}
                                onBlur={(data) => blurHandler(data)}
                                type="password"
                                name="password"
                                required
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPasswordOne}
                                            onMouseDown={handleMouseDownPasswordOne}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"/>

                        </FormControl>



                        {emptyConfirmPassword && errorConfirmPassword && (
                            <div className="errorMessage4">{errorConfirmPassword}</div>
                        )}

                        <FormControl   error={(emptyConfirmPassword && errorConfirmPassword)}  color="success" onChange={
                            ((data) => setConfirmPassword(data.target.value),
                                (data) => equalsPassword(data))
                        }sx={{m: 1, width: '100%'}} >
                            <InputLabel  htmlFor="outlined-adornment-password">Подтвердить пароль</InputLabel>
                            <OutlinedInput
                                variant="outlined"
                                value={confirmPassword}
                                onBlur={(data) => blurHandler(data)}
                                type="password"
                                name="confirmP"
                                required
                                id="outlined-adornment-password"
                                type={values.showConfirmPassword ? 'text' : 'password'}
                                value={values.confirmPassword}
                                onChange={handleChange('confirmPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showConfirmPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label='Подтвердить пароль'/>

                        </FormControl>



                    </div>
                </Box>
                <div className="checks5">
                    <Checkbox checked={checked} onChange={() => setChecked(!checked)}
                    />
                    <Modal active={modalActive} setActive={setModalActive}>
                        <TextCDA/>
                        <button className="closeBtn">Закрыть</button>
                    </Modal>

                    <div className="words2"> <span className="cdaText" onClick={() => setModalActive(true)}>
         Я подтверждаю, что ознакомился с <p className='underline'>Правилами пользования
          сервисом,Политикой конфиденциальности</p>
                 </span>
                    </div>
                </div>
                <button
                    className="btn_reg_two"
                    name="confirmPass"
                    disabled={!buttonChange()}
                    onClick={postData}
                    id='btn_first'
                >
                    Подтвердить
                </button>
            </div>
        </div>


    );
}

export default FormEnter;
