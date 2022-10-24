import React from 'react';
import './NotFounded.css';
import { useNavigate } from 'react-router-dom';


function NotFounded() {

  const navigate = useNavigate();

  const redirectToMain = () => {
    navigate('/')
  }

  return (
    <div className=''>
      <div className="">
        <h1 className=''>Страница не найдена</h1>
        <button onClick={() => redirectToMain()}>Вернуться на главную</button>
      </div>
    </div>
  )
}

export default NotFounded