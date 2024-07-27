import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
import List  from './ToDoList/List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <App /> */}
    <List />

  </React.StrictMode>
);

