import React from 'react'
import FormEnter from './entranceForm/formEnter';
import RegistrationButton from './entranceForm/registrationButton';


function App() {
  return (
    <div className='wrapper'>
    <div className="logo">Здесь будет логотип</div>
    <h3>Вы уже зарегистрированы в системе</h3>
    <FormEnter />
    <h3>Регистрация нового пользователя</h3>
    <RegistrationButton/>
    </div>
    )
}

export default App;
