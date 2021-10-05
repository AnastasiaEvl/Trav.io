import React from "react";
import { ReactElement, useState, useEffect } from "react";
import axios from "axios";
import ContactPerson from "./ContactPerson";
import { check } from "prettier";

function ForOrganization() {
  const [organizationalLegalForm, setOrganizationalLegalForm] = useState();
  const [organizationName, setOrganizationName] = useState("");
  const [fieldOfActivity, setFieldOfActivity] = useState();
  const [unp, setUnp] = useState();
  const [adress, setAdress] = useState();
  const [manufacturer, setManufacturer] = useState();
  const [supplier, setSupplier] = useState();
  const [emptyOrganizationName, setEmptyOrganizationName] = useState(false);
  const [errorOrganizationName, setErrorOrganizationName] = useState(
    "Введите наименование организации"
  );
  const [emptyUnp, setEmptyUnp] = useState(false);
  const [errorUnp, setErrorUnp] = useState("Введите корректное УНП");

  function mainPage() {
    window.location = "/main";
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

  return (
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
          </tbody>
        </table>
      </form>
      <ContactPerson />
      <button
        className="next"
        type="submit"
        // disabled={!buttonChange()}
        // onclick={postData}
      >
        <p>Дальше</p>
      </button>
    </div>
  );
}

export default ForOrganization;
