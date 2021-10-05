import React from "react";
import { ReactElement, useState, useEffect } from "react";
import axios from "axios";

import { check } from "prettier";

function ContactPerson() {
  const [last_name, setLast_name] = useState("");
  const [first_name, setFirst_Name] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [position, setPosition] = useState("");
  const [phone_number, setPhone_number] = useState();
  const [emptyInf, setEmptyInf] = useState(false);
  const [errorInf, setErrorInf] = useState("Введите информацию");

  const blurHandler = (data) => {
    switch (data.target.name) {
      case "last_name":
        if (last_name != "") {
          CorrectName(data);
        }
        setEmptyInf(true);
        break;
      case "first_name":
        if (first_name != "") {
          Correct_first_name(data);
        }
        setEmptyInf(true);
        break;
      case "patronymic":
        if (patronymic != "") {
          CorrectPatronymic(data);
        }
        setEmptyInf(true);
        break;
      case "position":
        if (position != "") {
          CorrectPosition(data);
        }
        setEmptyInf(true);
        break;
    }
  };

  const CorrectName = (data) => {
    setLast_name(data.target.value);
    const re = /^[А-Яа-я]+/;
    if (!re.test(String(data.target.value))) {
      setErrorInf("Проверьте информацию");
    } else {
      setErrorInf("");
    }
  };
  const Correct_first_name = (data) => {
    setFirst_Name(data.target.value);
    const re = /^[А-Яа-я]+/;
    if (!re.test(String(data.target.value))) {
      setErrorInf("Проверьте информацию");
    } else {
      setErrorInf("");
    }
  };

  const CorrectPatronymic = (data) => {
    setPatronymic(data.target.value);
    const re = /^[А-Яа-я]+/;
    if (!re.test(String(data.target.value))) {
      setErrorInf("Проверьте информацию");
    } else {
      setErrorInf("");
    }
  };
  const CorrectPosition = (data) => {
    setPosition(data.target.value);
    console.log("ONE");
    const re = /^[А-Яа-я ]+/;
    if (!re.test(String(data.target.value))) {
      setErrorInf("Проверьте информацию");
    } else {
      setErrorInf("");
    }
  };

  return (
    <div>
      <p className="title">Данные по контактному лицу</p>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <p>Фамилия</p>
              </td>
              <td>
                {emptyInf && errorInf && (
                  <div className="errorMessage">{errorInf}</div>
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
                {emptyInf && errorInf && (
                  <div className="errorMessage">{errorInf}</div>
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
                {emptyInf && errorInf && (
                  <div className="errorMessage">{errorInf}</div>
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
                {emptyInf && errorInf && (
                  <div className="errorMessage">{errorInf}</div>
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
                <input
                  value={phone_number}
                  name="phone_number"
                  onChange={(data) => setPhone_number(data.target.value)}
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default ContactPerson;
