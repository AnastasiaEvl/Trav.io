import React from "react";
import "./Registered.css";
import Modal from "../entranceForm/Modal/Modal";
import TextCDA from "../entranceForm/Modal/TextCDA";

function Registered() {
  return (
    <div className="registered">
      <div><img className="firstLogo" src="./images/smallLogoForEnter.svg"></img></div>
        <div><img className="big_bigLogo" src="./images/big_bigLogo.png"/></div>
      <div className="form1">
        <div>Вы уже зарегистрированы в системе?</div>
        <div className='inputs' >
            <input className="firstInput"  type="text"></input>
            <input className="secondInput"  type="text"></input>
        </div>
          <div className="checks" >
                 <input type="checkbox" className="check"></input>
              <div className="words"> <span className="remember" >
                  Запомнить меня
              </span>
                 <a href='#'><span className="forget">Забыли пароль?</span></a>

              </div></div>
        <div className="btn_added"><button className="Added">Присоединиться</button></div>
      </div>
      <div className="form2">
        <div className="newUser1">Регистрация нового пользователя</div>
        <div>
         <button className="btn_reg_one">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
}

export default Registered;
