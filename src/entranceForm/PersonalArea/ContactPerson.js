import React from "react";
import { ReactElement, useState, useEffect } from "react";
import axios from "axios";

import { check } from "prettier";

function ContactPerson() {
  const [last_name, setLast_name] = useState("");
  const [first_name, setFirst_Name] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [position, setPosition] = useState("");
  const [phone_number, setPhone_number] = useState("");

  const [emptyLast_name, setEmptyLast_name] = useState(false);
  const [emptyFirst_name, setEmptyFirst_name] = useState(false);
  const [emptyPatronymic, setEmptyPatronymic] = useState(false);
  const [emptyPosition, setEmptyPosition] = useState(false);
  const [emptyPhone_number, setEmptyPhone_number] = useState(false);

  const [errorLast_name, setErrorLast_name] = useState("Введите фамилию");
  const [errorFirst_name, setErrorFirst_name] = useState("Введите имя");
  const [errorPatronymic, setErrorPatronymic] = useState("Введите отчество");
  const [errorPosition, setErrorPosition] = useState("Введите должность");
  const [errorPhone_number, setErrorPhone_number] = useState(
    "Введите номер телефона"
  );

  const blurHandler = (data) => {
    switch (data.target.name) {
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
  );
}

export default ContactPerson;
