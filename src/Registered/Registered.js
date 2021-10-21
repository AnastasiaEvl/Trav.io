import React from "react";
import "./Registered.css";

function Registered() {
  return (
    <div className="registered">
      <img className="firstLogo" src="./images/smallLogoForEnter.svg"></img>
      <div className="form1">
        Вы уже зарегистрированы в системе?
        <div>
          <input type="text"></input>
          <input type="text"></input>
        </div>
        <img src="./images/btnAdd.svg" />
      </div>
      <div className="form2">
        <div className="newUser1">Регистрация нового пользователя</div>
        <div>
          <img src="./images/regBtn.png"></img>
        </div>
      </div>
    </div>
  );
}

export default Registered;
