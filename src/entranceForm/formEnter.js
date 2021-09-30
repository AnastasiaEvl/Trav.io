import React, {ReactElement, useState, useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import Modal from './Modal/Modal'



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
  const [modalActive, setModalActive]= useState(true);

  


  function buttonChange () {
    console.log(checked)

    if (errorEmail || errorPassword || errorConfirmPassword || !checked){
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
      cheackEmail();
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


  function cheackEmail(){
    axios.post('http//cheackEmail', {email})
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
              <p style={{fontSize: '10pt', textDecoration:'underline'}} onClick={() => setModalActive(true)}>Я подтверждаю, что ознакомился с правилами пользования Сервисом и Политикой конфиденциальности</p>
              </td>
              <td>
              <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
              <Modal active = {modalActive} setActive={setModalActive}>
                <p style={{fontSize: '18pt', textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                  natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat 
                  massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis 
                  pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend 
                  tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus 
                  in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. 
                  Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. 
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
                   adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                    Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. 
                    Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla 
                    mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, 
                    augue velit cursus nunc,
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                  natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat 
                  massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis 
                  pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend 
                  tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus 
                  in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. 
                  Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. 
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
                   adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                    Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. 
                    Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla 
                    mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, 
                    augue velit cursus nunc,</p>
                    <button style={{height:'50px', width: '150px', fontSize:'20pt', float: 'right'}}>Закрыть</button>
              </Modal>
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

