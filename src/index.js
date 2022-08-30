import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//Cấu hình react router dom:
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Cài đặt redux
import {Provider} from 'react-redux';
import {store} from './redux/configStore';
import ReactForm from './pages/ReactForm/ReactForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='' element ={<App/>}>
        <Route path='/reactform' element={<ReactForm/>} ></Route>

      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
);


