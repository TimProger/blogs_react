import './App.css';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import NotFounded from './pages/notFounded/NotFounded';
import ProptectRoutes from './hocs/ProtectedRoutes';
import Posts from './pages/Posts/PostsContainer';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFounded />} />
        {/* <Route index path="/" element={<></>} /> */}
        <Route element={<ProptectRoutes />}>
          <Route path="/" element={<Posts />} />
        </Route>
      </Routes>  
    </div>
  );
}

export default App;
