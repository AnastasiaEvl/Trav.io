import React from "react";
import { useState } from "react";
import ContactPerson from "./ContactPerson";
import "./PersonalAreaStyle.css";

function ForOrganization() {
  const [orgForm, setOrgForm] = useState();
  const [orgName, setOrgName] = useState();
  const [orgAct, setOrgAct] = useState();
  const [UNP, setUNP] = useState();
  const [adress, setAdress] = useState();
  const [manufacturer, setManufacturer] = useState;
  const [supplier, setSupplier] = useState;

  function mainPage() {
    window.location = "/main";
  }

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
                <select>
                  <option>ЗАО</option>
                  <option>ОАО</option>
                  <option>ООО</option>
                  <option>РУП</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <p>Наименование организации</p>
              </td>
              <td>
                <input
                  value={orgForm}
                  type="orgName"
                  required
                  onChange={(data) => setOrgForm(data.target.value)}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <p>Сфера деятельности</p>
              </td>
              <td>
                <input
                  type="radio"
                  value={manufacturer}
                  onChange={(data) => setManufacturer(data.target.value)}
                />
                Производитель
                <br />
                <input
                  type="radio"
                  value={supplier}
                  onChange={(data) => setSupplier(data.target.value)}
                />
                Переработчик
              </td>
            </tr>
            <tr>
              <td>
                <p>УНП</p>
              </td>
              <td>
                <input
                  required
                  value={UNP}
                  onChange={(data) => setUNP(data.target.value)}
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
        disabled={!buttonChange()}
        onclick={postData}
      >
        <p>Дальше</p>
      </button>
    </div>
  );
}

export default ForOrganization;
