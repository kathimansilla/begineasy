import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
//import reportWebVitals from './reportWebVitals';
//de momento no se usar webvitals pero se podria usar para verificar que la aplicacion funciona correctamente



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  //me cargo esto porque se refersca la pagina mas veces de la cuenta aunque nos ayuda a programar mejor
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
