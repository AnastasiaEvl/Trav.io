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
  function handleClick() {
    let s;
    return (s = alert("Пользователь хочет зарегистрироваться"));
  }
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  console.log(email)
  return (
    <div>
      <div className="wrapper">
        <div className="logo">Здесь будет логотип</div>
        <h3>Вы уже зарегистрированы в системе</h3>
        <form action="http://foo.com" method="post">
          <table style={styles.table}>
            <tr>
              <td style={styles.td}>
                <b>Email:</b>
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
                <input type="password" name="UserPassword" required />
              </td>
            </tr>
            <tr>
              <td style={styles.td}>
                <b>Сохранить меня в системе</b>
              </td>
              <td>
                <input type="checkbox" name="safeInSystem" value="1" />
              </td>
            </tr>
            <tr>
              <td style={styles.td}>
                <input type="submit" />
              </td>
            </tr>
          </table>
        </form>
        <h3>Регистрация нового пользователя</h3>
        <button onClick={handleClick}>Зарегистрироваться</button>
      </div>
    </div>
  );
}

export default FormEnter;
