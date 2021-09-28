import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Layout from './entranceForm/Layout';
import FormEnter from './entranceForm/formEnter';
import SingUp from './entranceForm/SignUp/SignUp'

function App()  {
  return (
    <Router>
    <FormEnter/>
    </Router>
    )
}

export default App ;
