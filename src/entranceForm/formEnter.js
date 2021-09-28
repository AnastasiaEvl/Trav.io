import React, {useState} from "react";
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
};

  function FormEnter() {
 
  const [email, setEmail] = useState(false)
  const [password, setPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState(false)
  
  console.log(email)
  console.log(password)
  console.log(confirmPassword)
 
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
                <input type="email" name="UserEmail" required onChange={(data)=>setEmail(data.target.value)}/>
              </td>
            </tr>
            <tr>
              <td style={styles.td}>
                <b>Пароль</b>
              </td>
              <td>
                <input type="password" id="password" required onChange={(data)=>setPassword(data.target.value)} />
              </td>
            </tr>
            <tr>
              <td style={styles.td}>
                <b>Подтвердите пароль</b>
              </td>
              <td>
                <input type="password" id="confirmPassword" required onChange={(data)=>setConfirmPassword(data.target.value)}/>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/signUp"><input type="submit" value="Регистрация"  disabled = {!(password === confirmPassword)} onClick={postData}/></Link>
              </td>
            </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default FormEnter

