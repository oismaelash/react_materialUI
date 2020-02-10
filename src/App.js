import React, { Fragment } from 'react';
import Sidebar from './Components/Sidebar'
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import NewJobForm from './Components/NewItemForm';

const App = () => {
  return (
    <Fragment>
      <NewJobForm/>
      {/* <LoginForm/> */}
      {/* <RegisterForm/> */}
      {/* <Sidebar/> */}
    </Fragment>
  );
};

export default App;