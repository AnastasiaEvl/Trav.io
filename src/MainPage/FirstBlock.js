import React, {useEffect} from "react";
import "../MainPage/MainPage.css";
import Form from "../MainPage/Form";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {logout} from "../reducers/UserReducer";
import {auth} from "../entranceForm/action/user";

function FirstBlock() {

  const isAuth = useSelector(state => state.user.isAuth)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(auth())
  }, [])
  function toReg() {
    window.location = "/reg";
  }

  function MainPageTwo() {
    window.location = "/enter";
  }
  function enter(){
    window.location='/enter';
  }
  return (
    <div>


      <div className="navBar1">
        <a href="#">
          <img className="inst" src="./images/instLogo.svg" />
        </a>
        <a href="#">
          <img className="tel" src="./images/telLogo.svg" />
        </a>

          <img onClick={enter} className="btn1" src="./images/btnCreateOffer.svg" />{" "}


        {!isAuth && <a className="Reg" href="#" onClick={toReg}>
          Регистрация
        </a>}
        {!isAuth && <a href="#" onClick={MainPageTwo}>
          <img className="Enter" src="./images/enter.svg" />{" "}
        </a>}
        {isAuth && <div className="Reg"  onClick={()=>dispatch(logout())}>
          Выход
        </div>}

        <img className="mainLogo" src="./images/mainLogo.png" />

        <div className="navBar2">
          <a href="#">
            <div className="about">О проекте</div>{" "}
          </a>
          <a href="#">
            <div className="list">Список переработчиков</div>{" "}
          </a>
          <a href="#">
            {" "}
            <div className="map">Интерактивная карта</div>{" "}
          </a>
          <a href="#">
            {" "}
            <div className="goods">Экотовары</div>{" "}
          </a>
          <a href="#">
            {" "}
            <div className="faq">FAQ</div>{" "}
          </a>
          <a href="#">
            <div className="news">Новости</div>
          </a>
          <a href="#">
            <div className="contacts">Контакты</div>{" "}
          </a>
          <div className="img">
            <Form />
          </div>
        </div>
        <div className="text1">
          <b>TraVio</b> - автоматизированное решение, призванное упростить
          процесс переработки отходов для предприятий
        </div>

        <img className="bigLogo" src="./images/mainLogo2.svg" />

        <a href="#" onClick={toReg}>
          <img className="btnAdd" src="./images/btnAdd.svg" />{" "}
        </a>
      </div>
    </div>
  );
}

export default FirstBlock;
