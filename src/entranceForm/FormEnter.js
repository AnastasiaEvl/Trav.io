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




function FormEnter(props) {
  const { email, setEmail } = props;
  const { password, setPassword } = props;

  console.log("password", password);
  console.log("email", email);


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


  function buttonChange() {
    return !(errorEmail || errorPassword || errorConfirmPassword || !checked);
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

  const emailHandler = (data) => {
    setEmail(data.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
      setErrorPasword(
        "Пароль не соответствует требованиям:-не менее одного числа;- !@#$%^&*- хотя бы один указанный спецсимвол;- не менее одной латинской буквы в нижнем регистре;- не менее одной латинской буквы в верхнем регистре;-длина пароля:от 8 до 14 символов;"
      );
    } else {
      setErrorPasword("");
    }
  };

  const equalsPassword = (data) => {
    setConfirmPassword(data.target.value);
    if (password === data.target.value) {
      setErrorConfirmPassword("");
    } else {
      setErrorConfirmPassword("Пароли не совпадают");
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
        email: { email },
        password: { password },
      })
      .then((data) => {
        setRedirect(true);
      })
      .catch((error) =>
        setRedirect(true)
      );
  }
  if (redirect) {
    return <Redirect to="signUp" />;
  }
  // axios
  //   .post("http://cabe-134-17-6-60.ngrok.io/logged_in_two", {
  //     email: email,
  //     password: password,
  //   })
  //   .then((data) => {
  //     window.location = "/signUp";
  //     if (data.status === 200) {
  //     }
  //   })
  //   .catch((error) => (window.location = "/signUp"));

  function cheackEmail(data) {
    axios
      .post("http://cabe-134-17-6-60.ngrok.io/logged_in_one", {
        email: email,
      })

      .then((email) => {
        if (data.email === email) {
          alert("Пользователь с таким именем существует");
        } else {
          alert("ОК");
        }
        console.log("Ok");
      })
      .catch((data) => console.log("error"));
  }

  return (

  <div className="registered">
          <div ><img className="firstLogo" src="./images/smallLogoForEnter.svg" onClick={mainPage}/></div>
           <div><img className="big_bigLogo" src="./images/big_bigLogo.png"/></div>
            <div><img className="numbers" src="./images/o_t_t.png"/> </div>


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
                    required
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
              <FormControl error={(emptyPassword && errorPassword)} color="success" sx={{m: 1, width: '100%'}} variant="outlined"
                    value={password}
                    onBlur={(data) => blurHandler(data)}
                    type="password"
                    name="password"
                    required
                    onChange={
                      ((data) => setPassword(data.target.value),
                      (data) => passHandler(data))
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

            {emptyConfirmPassword && errorConfirmPassword && (
                <div className="errorMessage">{errorConfirmPassword}</div>
            )}
            <TextField error={(emptyConfirmPassword && errorConfirmPassword)} id="outlined-search" label="Подтвердить пароль" type="success" color="success"
                value={confirmPassword}
                type="password"
                name="confirmP"
                onBlur={(data) => blurHandler(data)}
                required
                onChange={
                  ((data) => setConfirmPassword(data.target.value),
                      (data) => equalsPassword(data))
                }
            />

            </div>
            </Box>
        <div className="checks5">
          <Checkbox checked={checked}   onChange={() => setChecked(!checked)}
          />
          <Modal active={modalActive} setActive={setModalActive}>
            <TextCDA />
            <div className="closeBtn">Закрыть</div>
          </Modal>



         <div className="words2"> <span className="cdaText" onClick={() => setModalActive(true)}>
         Я подтверждаю, что ознакомился с <p className='underline'>Правилами пользования
          сервисом,Политикой конфиденциальности</p>
                 </span>
             </div>
        </div>
        <button
          className="btn_reg_two"
          type="submit"
          name="confirmPass"
          disabled={!buttonChange()}
          onClick={postData}
        >
          Подтвердить
        </button>


      </div>
  </div>


  );
}

export default FormEnter;
