import React, {useState} from "react";

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
  const [registration, setRegistration] = useState()

  console.log(email)
  console.log(password)
  console.log(confirmPassword)
  console.log(registration)

  return (
    <div>
      <div className="wrapper">
        <div className="logo">Здесь будет логотип</div>
        <h3>Страница регистрации</h3>
        <form>
          <table style={styles.table}>
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
          </table>
        </form>
       
        <button id="submit" disabled = {email && !(password === confirmPassword)} onChange={(data)=>setRegistration(data.target.value)}>Зарегистрироваться</button>
      </div>
    </div>
  );
}

export default FormEnter;
