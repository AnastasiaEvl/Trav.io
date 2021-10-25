import React, { useState } from "react";
import axios from "axios";

import "./StyleEntrance.css";
import { Redirect } from "react-router";

function Enter() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
      setErrorPasword(
        "Пароль не соответствует требованиям:-не менее одного числа;- !@#$%^&*- хотя бы один указанный спецсимвол;- не менее одной латинской буквы в нижнем регистре;- не менее одной латинской буквы в верхнем регистре;-длина пароля:от 8 до 14 символов;"
      );
    } else {
      setErrorPasword("");
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

  function postData() {
    axios
      .post("http://localhost:3001/signUp", {
        email: { email },
        password: { password },
      })
      .then((data) => {
        // window.location = "/signUp";
        setRedirect(true);
      })
      .catch((error) =>
        // (window.location = "/signUp")
        setRedirect(true)
      );
  }
  if (redirect) {
    return <Redirect to="signUp" />;
  }

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
    <div>
      <div className="smallLogo">
        <img src="/images/smallLogo.PNG" onClick={mainPage} />
      </div>
      <hr />
      <div className="wrapper">
        <div className="logotype_R">
          <img src="/images/logo.PNG" alt="logo" />
        </div>
        <p className="newUserTitle">Авторизация</p>
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
                  <p className="cdaText" onClick={() => setModalActive(true)}>
                    Запомнить меня
                  </p>
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
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

export default Enter;
