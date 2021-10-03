import React, { ReactElement, useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal/Modal";
import TextCDA from "./Modal/TextCDA";
import "./StyleEntrance.css";

function FormEnter() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [emptyConfirmPassword, setEmptyConfirmPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState("Введите e-mail");
  const [errorPassword, setErrorPasword] = useState("Введите пароль");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(
    "Пароли не совпадают"
  );
  const [checked, setChecked] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  function buttonChange() {
    if (errorEmail || errorPassword || errorConfirmPassword || !checked) {
      return false;
    } else {
      return true;
    }
  }

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
      setErrorPasword("Пароль не соответствует требованиям");
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
        cheackEmail();
        setEmptyEmail(true);
        break;
      case "password":
        setEmptyPassword(true);
        break;
      case "confirmPass":
        setEmptyConfirmPassword(true);
        break;
    }
  };

  function mainPage() {
    window.location = "/main";
  }

  function postData() {
    axios
      // .post("http://19da-93-125-107-39.ngrok.io/logged_in_one", {
      .post("/registration", {
        email: email,
        password: password,
      })
      .catch((data) => {
        // if (data.status === 200) {
        window.location = "/signUp";
        // }
      })
      .then((error) => console.log(error));
  }

  function cheackEmail() {
    axios
      // .post("http://19da-93-125-107-39.ngrok.io/logged_in_one", {
      .post("/cheack", {
        email: email,
      })
      .catch((error) => {
        //.then
        console.log("Ok");
        // if (data.email === email) {
        // alert("Пользователь с таким именем существует");
        // } else {
        // clearEmail = true;
        // }
      })
      .then((data) => console.log("error"));
  }

  return (
    <div>
      <div className="smallLogo">
        <img src="/images/smallLogo.PNG" onClick={mainPage}></img>
      </div>
      <hr />
      <div className="wrapper">
        <div className="logotype_R">
          <img src="/images/logo.PNG" alt="logo"></img>
        </div>
        <p className="newUserTitle">Регистрация нового пользователя</p>
        <form>
          <table>
            <tbody>
              <tr>
                <td>
                  <p>Email</p>
                </td>
                <td>
                  {emptyEmail && errorEmail && (
                    <div className="errorMessage">{errorEmail}</div>
                  )}
                  <input
                    value={email}
                    onBlur={(data) => blurHandler(data)}
                    type="email"
                    name="UserEmail"
                    required
                    onChange={
                      ((data) => setEmail(data.target.value),
                      (data) => emailHandler(data))
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <p>Пароль</p>
                </td>
                <td>
                  {emptyPassword && errorPassword && (
                    <div className="errorMessage">{errorPassword}</div>
                  )}
                  <input
                    value={password}
                    onBlur={(data) => blurHandler(data)}
                    type="password"
                    name="password"
                    required
                    onChange={
                      ((data) => setPassword(data.target.value),
                      (data) => passHandler(data))
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <p>Подтвердите пароль</p>
                </td>
                <td>
                  {emptyConfirmPassword && errorConfirmPassword && (
                    <div className="errorMessage">{errorConfirmPassword}</div>
                  )}
                  <input
                    value={confirmPassword}
                    type="password"
                    onBlur={(data) => blurHandler(data)}
                    required
                    onChange={
                      ((data) => setConfirmPassword(data.target.value),
                      (data) => equalsPassword(data))
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <p className="cdaText" onClick={() => setModalActive(true)}>
                    Я подтверждаю, что ознакомился с правилами пользования
                    Сервисом и Политикой конфиденциальности
                  </p>
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                  <Modal active={modalActive} setActive={setModalActive}>
                    <TextCDA />

                    <div className="closeBtn">Закрыть</div>
                  </Modal>
                </td>
              </tr>
            </tbody>
          </table>
        </form>

        <button
          className="RegisterBtn"
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
