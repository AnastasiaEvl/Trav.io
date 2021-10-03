import React from "react";
import "./PersonalAreaStyle.css";

function ContactPerson() {
  return (
    <div>
      <h1>Данные по контактному лицу</h1>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <p>Фамилия</p>
              </td>
              <td>
                <input value="text"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p>Имя</p>
              </td>
              <td>
                <input value="text"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p>Отчество</p>
              </td>
              <td>
                <input value="text"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p>Ваша должность в организации</p>
              </td>
              <td>
                <input value="text"></input>
              </td>
            </tr>
            <tr>
              <td>
                <p>Телефонный номер</p>
              </td>
              <td>
                <input value="number"></input>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default ContactPerson;
