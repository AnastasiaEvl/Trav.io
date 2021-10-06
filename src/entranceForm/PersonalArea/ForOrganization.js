import React from "react";
import { ReactElement, useState, useEffect } from "react";
import axios from "axios";

import { check } from "prettier";

function ForOrganization() {
  const [organizationalLegalForm, setOrganizationalLegalForm] = useState();
  const [organizationName, setOrganizationName] = useState("");
  const [fieldOfActivity, setFieldOfActivity] = useState();
  const [unp, setUnp] = useState();
  const [adress, setAdress] = useState();
  const [manufacturer, setManufacturer] = useState();
  const [supplier, setSupplier] = useState();

  const [last_name, setLast_name] = useState("");
  const [first_name, setFirst_Name] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [position, setPosition] = useState("");
  const [phone_number, setPhone_number] = useState("");

  const [errorOrganizationName, setErrorOrganizationName] = useState(
    "Введите наименование организации"
  );
  const [errorUnp, setErrorUnp] = useState("Введите корректное УНП");
  const [errorLast_name, setErrorLast_name] = useState("Введите фамилию");
  const [errorFirst_name, setErrorFirst_name] = useState("Введите имя");
  const [errorPatronymic, setErrorPatronymic] = useState("Введите отчество");
  const [errorPosition, setErrorPosition] = useState("Введите должность");
  const [errorPhone_number, setErrorPhone_number] = useState(
    "Введите номер телефона"
  );

  const [emptyUnp, setEmptyUnp] = useState(false);
  const [emptyOrganizationName, setEmptyOrganizationName] = useState(false);
  const [emptyLast_name, setEmptyLast_name] = useState(false);
  const [emptyFirst_name, setEmptyFirst_name] = useState(false);
  const [emptyPatronymic, setEmptyPatronymic] = useState(false);
  const [emptyPosition, setEmptyPosition] = useState(false);
  const [emptyPhone_number, setEmptyPhone_number] = useState(false);

  function mainPage() {
    window.location = "/main";
  }

  function buttonChange() {
    if (
      errorOrganizationName ||
      errorUnp ||
      errorLast_name ||
      errorFirst_name ||
      errorPatronymic ||
      errorPosition ||
      errorPhone_number
    ) {
      return false;
    } else {
      return true;
    }
  }
  const blurHandler = (data) => {
    switch (data.target.name) {
      case "organizationName":
        if (organizationName !== "") {
          OrganizationNameHandler(data);
        }
        setEmptyOrganizationName(true);
        break;
      case "unp":
        setEmptyUnp(true);
        break;
      case "last_name":
        if (last_name != "") {
          CorrectName(data);
        }
        setEmptyLast_name(true);
        break;
      case "first_name":
        if (first_name != "") {
          Correct_first_name(data);
        }
        setEmptyFirst_name(true);
        break;
      case "patronymic":
        if (patronymic != "") {
          CorrectPatronymic(data);
        }
        setEmptyPatronymic(true);
        break;
      case "position":
        if (position != "") {
          CorrectPosition(data);
        }
        setEmptyPosition(true);
        break;
      case "phone_number":
        if (phone_number != "") {
          CorrectPhone_number(data);
        }
        setEmptyPhone_number(true);
        break;
    }
  };

  const CorrectName = (data) => {
    setLast_name(data.target.value);
    const re = /^[А-Яа-я]+/;
    if (!re.test(String(data.target.value))) {
      setErrorLast_name("Проверьте информацию");
    } else {
      setErrorLast_name("");
    }
  };
  const Correct_first_name = (data) => {
    setFirst_Name(data.target.value);
    const re = /^[А-Яа-я]+/;
    if (!re.test(String(data.target.value))) {
      setErrorFirst_name("Проверьте информацию");
    } else {
      setErrorFirst_name("");
    }
  };

  const CorrectPatronymic = (data) => {
    setPatronymic(data.target.value);
    const re = /^[А-Яа-я]+/;
    if (!re.test(String(data.target.value))) {
      setErrorPatronymic("Проверьте информацию");
    } else {
      setErrorPatronymic("");
    }
  };

  const CorrectPosition = (data) => {
    setPosition(data.target.value);

    const re = /^[А-Яа-я, - ]+/;
    if (!re.test(String(data.target.value))) {
      setErrorPosition("Проверьте информацию");
    } else {
      setErrorPosition("");
    }
  };

  const CorrectPhone_number = (data) => {
    setPhone_number(data.target.value);
    const re = /^[0-9]{9,9}$/;
    if (!re.test(String(data.target.value))) {
      setErrorPhone_number("Проверьте информацию");
    } else {
      setErrorPhone_number("");
    }
  };

  const OrganizationNameHandler = (data) => {
    setOrganizationName(data.target.value);
    const re = /^[А-Яа-я ]+/;
    if (!re.test(String(data.target.value))) {
      setErrorOrganizationName("Некорректно введено название организации");
      console.log(data.target.value);
    } else {
      setErrorOrganizationName("");
      console.log(data.target.value);
    }
  };

  const unpHandler = (data) => {
    setUnp(data.target.value);
    const re = /^[0-9]{9,9}$/;
    if (!re.test(String(data.target.value))) {
      setErrorUnp("Неккоректно введен УНП");
      console.log(data.target.value);
    } else {
      setErrorUnp("");
      console.log(data.target.value);
    }
  };

  function postData() {
    axios
      // .post("http://19da-93-125-107-39.ngrok.io/logged_in_one", {
      .post("/registration", {
        // organizationalLegalForm,
        organizationName,
        // fieldOfActivity,
        unp: unp,
        adress: adress,
        last_name: last_name,
        first_name: first_name,
        patronymic: patronymic,
        position: position,
        phone_number: phone_number,
      })
      .catch((data) => {
        // if (data.status === 200) {
        window.location = "/NextStep";
        // }
      })
      .then((error) => console.log(error));
  }

  return (
    <div>
      <div className="fisrtBlock">
        <div className="smallLogo">
          <img src="/images/smallLogo.PNG" onClick={mainPage}></img>
        </div>
        <hr />
        <div className="logotype_R1">
          <img src="/images/logo.PNG" alt="logo"></img>
        </div>
        <p className="newUserTitle">Регистрация нового пользователя</p>
        <p className="title">Данные по Вашей организации</p>
        <form>
          <table>
            <tbody>
              <tr>
                <td>
                  <p>Организационно-правовая форма</p>
                </td>
                <td>
                  <select
                    value={organizationalLegalForm}
                    type="organizationalLegalForm"
                    onChange={(data) =>
                      setOrganizationalLegalForm(data.target.value)
                    }
                  >
                    <option value="ZAO">ЗАО</option>
                    <option value="OAO">ОАО</option>
                    <option value="OOO">ООО</option>
                    <option value="RUP">РУП</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Наименование организации</p>
                </td>
                <td>
                  {errorOrganizationName && emptyOrganizationName && (
                    <div className="errorMessage">{errorOrganizationName}</div>
                  )}
                  <input
                    value={organizationName}
                    onBlur={(data) => blurHandler(data)}
                    type="text"
                    name="organizationName"
                    required
                    onChange={
                      ((data) => setOrganizationName(data.target.value),
                      (data) => OrganizationNameHandler(data))
                    }
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Сфера деятельности</p>
                </td>
                <td
                  value={fieldOfActivity}
                  onChange={(data) => setFieldOfActivity(data.target.value)}
                >
                  <input
                    type="radio"
                    value={manufacturer}
                    name="fieldOfActivity"
                    checked
                  />
                  Производитель
                  <br />
                  <input type="radio" value={supplier} name="fieldOfActivity" />
                  Переработчик
                </td>
              </tr>
              <tr>
                <td>
                  <p>УНП</p>
                </td>
                <td>
                  {errorUnp && emptyUnp && (
                    <div className="errorMessage">{errorUnp}</div>
                  )}
                  <input
                    required
                    value={unp}
                    name="unp"
                    onBlur={(data) => blurHandler(data)}
                    onChange={
                      ((data) => setUnp(data.target.value),
                      (data) => unpHandler(data))
                    }
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Юридический адрес</p>
                </td>
                <td>
                  <input
                    value={adress}
                    required
                    onChange={(data) => setAdress(data.target.value)}
                  ></input>
                </td>
              </tr>

              <div>
                <p className="title">Данные по контактному лицу</p>
              </div>

              <tr>
                <td>
                  <p>Фамилия</p>
                </td>
                <td>
                  {emptyLast_name && errorLast_name && (
                    <div className="errorMessage">{errorLast_name}</div>
                  )}
                  <input
                    value={last_name}
                    onBlur={(data) => blurHandler(data)}
                    name="last_name"
                    onChange={
                      ((data) => setLast_name(data.target.value),
                      (data) => CorrectName(data))
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <p>Имя</p>
                </td>
                <td>
                  {emptyFirst_name && errorFirst_name && (
                    <div className="errorMessage">{errorFirst_name}</div>
                  )}
                  <input
                    value={first_name}
                    onBlur={(data) => blurHandler(data)}
                    name="first_name"
                    onChange={
                      ((data) => setFirst_Name(data.target.value),
                      (data) => Correct_first_name(data))
                    }
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Отчество</p>
                </td>
                <td>
                  {emptyPatronymic && errorPatronymic && (
                    <div className="errorMessage">{errorPatronymic}</div>
                  )}
                  <input
                    value={patronymic}
                    onBlur={(data) => blurHandler(data)}
                    name="patronymic"
                    onChange={
                      ((data) => setPatronymic(data.target.value),
                      (data) => CorrectPatronymic(data))
                    }
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Ваша должность в организации</p>
                </td>
                <td>
                  {emptyPosition && errorPosition && (
                    <div className="errorMessage">{errorPosition}</div>
                  )}
                  <input
                    value={position}
                    onBlur={(data) => blurHandler(data)}
                    name="position"
                    onChange={
                      ((data) => setPosition(data.target.value),
                      (data) => CorrectPosition(data))
                    }
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Телефонный номер</p>
                </td>
                <td>
                  {emptyPhone_number && errorPhone_number && (
                    <div className="errorMessage">{errorPhone_number}</div>
                  )}
                  <input
                    value={phone_number}
                    onBlur={(data) => blurHandler(data)}
                    name="phone_number"
                    placeholder="9 цифр номера"
                    onChange={
                      ((data) => setPhone_number(data.target.value),
                      (data) => CorrectPhone_number(data))
                    }
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <button
        className="next"
        type="submit"
        disabled={!buttonChange()}
        onclick={postData}
      >
        <p>Дальше</p>
      </button>
    </div>
  );
}

export default ForOrganization;
