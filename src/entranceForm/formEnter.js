import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'

const styles = {
  table: {
    borderStyle: "solid",
    width: 100,
    backgroundColor: "#EDEDED",
  },
  td: {
    textAlign: "center",
  },
  button: {
    width: "80px",
    height: "40px"
  }
};

  function FormEnter() {
 
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [emptyEmail, setEmptyEmail]=useState(false)
  const [emptyPassword, setEmptyPassword]=useState(false)
  const [emptyConfirmPassword, setEmptyConfirmPassword]=useState(false)
  const [errorEmail, setErrorEmail]=useState('Введите e-mail')
  const [errorPassword, setErrorPasword]=useState('Введите пароль')
  const [errorConfirmPassword, setErrorConfirmPassword]=useState('Пароли не совпадают')
  const [checked, setChecked] = useState(false);
  


  function buttonChange () {

    if (errorEmail || errorPassword || errorConfirmPassword){
      return false;
    }else {
      return true;
    }
  }
    
  

  const emailHandler = (data) => {
    setEmail(data.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(data.target.value).toLowerCase())){
      setErrorEmail( 'Некорректный e-mail')
    } else {
      setErrorEmail('')
      
    }
  }

  const passHandler = (data) => {
    setPassword(data.target.value)
    const re = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,14}/g
    if (!re.test(String(data.target.value))){
      setErrorPasword('Пароль не соответствует требованиям')
    }else {
      setErrorPasword('')
 
    }
  }

const equalsPassword = (data) => {
  setConfirmPassword(data.target.value)
  if(password === data.target.value){
    setErrorConfirmPassword('')
  }else {
    setErrorConfirmPassword('Пароли не совпадают')
  }
}

  const blurHandler = (data) => {
    switch (data.target.name){
      case 'UserEmail':
        setEmptyEmail(true)
        break
      case 'password':
      setEmptyPassword(true)
      break
      case 'confirmPass':
        setEmptyConfirmPassword(true)
      break
    }
  }
  
    
  // console.log(email)
  // console.log(password)
  // console.log(confirmPassword)
 
  function postData(){
     axios.post('http//server', {email, password})
     .then(data=>console.log(data))
     .catch(error=>console.log(error))
    
  }

  return (
    <div>
      <div className="wrapper">
        <div className="logo">Здесь будет логотип</div>
        <h3>Страница регистрации</h3>
        <form>
          <table style={styles.table}>
            <tbody>
            <tr>
              <td style={styles.td}>
                <b>Email</b>
              </td>
              <td>
                {(emptyEmail && errorEmail) && <div style={{color:'red'}}>{errorEmail}</div>}
                <input value={email} onBlur={data =>blurHandler(data)} type="email" name="UserEmail" required onChange={(data)=>setEmail(data.target.value), (data)=>emailHandler(data)}/>
              </td>
            </tr>
            <tr>
              <td style={styles.td}>
                <b>Пароль</b>
              </td>
              <td>
              {(emptyPassword && errorPassword)&& <div style={{color:'red'}}>{errorPassword}</div>}
                <input value={password} onBlur={data =>blurHandler(data)} type="password" name="password" required onChange={(data)=>setPassword(data.target.value), (data)=>passHandler(data)} />
              </td>
            </tr>
            <tr>
              <td style={styles.td}>
                <b>Подтвердите пароль</b>
              </td>
              <td>
                {(emptyConfirmPassword && errorConfirmPassword) && <div style={{color:'red'}}>{errorConfirmPassword}</div>}
                <input value={confirmPassword} type ="password" onBlur={data =>blurHandler(data)} required onChange={(data)=>setConfirmPassword(data.target.value), (data) => equalsPassword(data)}/>
              </td>
              </tr>
              <tr>
              <td>
              <Link to="/CDA"><p style={{fontSize: '10pt'}}>Я подтверждаю, что ознакомился с правилами пользования Сервисом и Политикой конфиденциальности</p></Link>
              </td>
              <td>
              <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
              </td>
              
            </tr>
                
            </tbody>
          </table>
        </form>
        <Link to="/signUp"><button type="submit" name="confirmPass" disabled = {!buttonChange()} onClick={postData}>Зарегистрироваться</button></Link>
      </div>
    </div>
  );
}

export default FormEnter

