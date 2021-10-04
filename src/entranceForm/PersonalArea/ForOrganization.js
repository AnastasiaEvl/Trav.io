import React from "react";
import { useState } from "react";
import ContactPerson from "./ContactPerson";

function ForOrganization() {
  const [organizational_legal_form, setOrganizational_legal_form] = useState();
  const [organization_name, setOrganization_name] = useState("");
  const [field_of_activity, setField_of_activity] = useState();
  const [unp, setUnp] = useState();
  const [adress, setAdress] = useState();
  const [manufacturer, setManufacturer] = useState();
  const [supplier, setSupplier] = useState();
  const [emptyOrganization_name, setEmptyOrganization_name] = useState(false);
  const [errorOrganization_name, setErrorOrganization_name] = useState(
    "Введите наименование организации"
  );

  function mainPage() {
    window.location = "/main";
  }

  const blurHandler = (data) => {
    switch (data.target.name) {
      case "organization_name":
        if (organization_name !== "") {
          Organization_nameHandler();
        }

        setEmptyOrganization_name(true);
        break;
    }
  };

  const Organization_nameHandler = (data) => {
    setOrganization_name(data.target.value);
    const re = /^[\w]{3,25}$/;

    if (!re.test(String(data.target.value))) {
      setErrorOrganization_name("Некорректно введено название компании");
    } else {
      setErrorOrganization_name("");
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
                  value={organizational_legal_form}
                  type="organizational_legal_form"
                  onChange={(data) =>
                    setOrganizational_legal_form(data.target.value)
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
                {errorOrganization_name && emptyOrganization_name && (
                  <div className="errorMessage">{errorOrganization_name}</div>
                )}
                <input
                  value={organization_name}
                  onBlur={(data) => blurHandler(data)}
                  type="text"
                  name="organization_name"
                  required
                  onChange={
                    ((data) => setOrganization_name(data.target.value),
                    (data) => Organization_nameHandler(data))
                  }
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <p>Сфера деятельности</p>
              </td>
              <td
                value={field_of_activity}
                onChange={(data) => setField_of_activity(data.target.value)}
              >
                <input
                  type="radio"
                  value={manufacturer}
                  name="field_of_activity"
                />
                Производитель
                <br />
                <input type="radio" value={supplier} name="field_of_activity" />
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
                  value={unp}
                  onChange={(data) => setUnp(data.target.value)}
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
