import React from 'react'

const styles = {
    table: {
        borderStyle: 'solid',
        width: 100,
        backgroundColor:'#EDEDED'
    },
    td: {
        textAlign: 'center'
    }
}

function FormEnter(){
    return( 
    <form action="http://foo.com" method="post">
    <table style={styles.table}>
    
    <tr>
      <td style={styles.td}><b>Email:</b></td>
      <td><input type="email" name="UserEmail" required /></td>
    </tr>
    <tr>
      <td style={styles.td}><b>Пароль</b></td>
      <td><input type="password" name="UserPassword" required /></td>
    </tr>
    <tr>
      <td style={styles.td}><b>Сохранить меня в системе</b></td>
      <td>
        <input type="checkbox" name="safeInSystem" value="1" />
      </td>
    </tr>
    <tr>
        <td style={styles.td}><input type="submit" /></td>
    </tr>
  </table>
</form>
 )
}

export default FormEnter