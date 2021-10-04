import React from "react";
import { useState } from "react/cjs/react.development";

function ContactPerson() {
  const [last_name, setLast_name] = useState();
  const [first_name, setFirst_Name] = useState();
  const [patronymic, setPatronymic] = useState();
  const [position, setPosition] = useState();
  const [phone_number, setPhone_number] = useState();

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
                <input
                  value={last_name}
                  name="last_name"
                  onChange={(data) => setLast_name(data.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <p>Имя</p>
              </td>
              <td>
                <input
                  value={first_name}
                  name="first_name"
                  onChange={(data) => setFirst_Name(data.target.value)}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <p>Отчество</p>
              </td>
              <td>
                <input
                  value={patronymic}
                  name="patronymic"
                  onChange={(data) => setPatronymic(data.target.value)}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <p>Ваша должность в организации</p>
              </td>
              <td>
                <input
                  value={position}
                  name="position"
                  onChange={(data) => setPosition(data.target.value)}
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
