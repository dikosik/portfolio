import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuth, logout } from '../../redux/slices/auth';
import './index.css';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const location = useLocation();
  const navigate = useNavigate()

  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
      navigate('/')
    }
  };

  // Determine if we are on the main page
  const isMainPage = location.pathname === '/';

  return (
    <header>
      <nav className="navbar">
        <Link to="/" className={`nav-link ${isMainPage ? 'black-link' : 'white-link'}`}>main</Link>
        <Link to="/posts" className={`nav-link ${isMainPage ? 'black-link' : 'white-link'}`}>projects</Link>
        <Link to="/info" className={`nav-link ${isMainPage ? 'black-link' : 'white-link'}`}>info</Link>
        {isAuth ? (
          <>
            <Link to="/add-post" className={`nav-link ${isMainPage ? 'black-link' : 'white-link'}`}>addproject</Link>
            <a onClick={onClickLogout} className={`nav-link ${isMainPage ? 'black-link' : 'white-link'}`}>logout</a>
          </>
        ) : (
          <>
            {/* <Link to="/login" className={`nav-link ${isMainPage ? 'black-link' : 'white-link'}`}>login</Link>
            <Link to="/register" className={`nav-link ${isMainPage ? 'black-link' : 'white-link'}`}>create account</Link> */}
          </>
        )}
      </nav>
    </header>
  );
};
