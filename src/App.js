import React from 'react';
import Container from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { useDispatch } from "react-redux";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { fetchAuthMe } from "./redux/slices/auth";
import { MainPage } from './pages/mainPage/mainPage';
import { Info } from './pages/info/info';
import { Projects } from './pages/projects/projects';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (window.localStorage.getItem('token')) {
      dispatch(fetchAuthMe());
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
       <Routes>
        <Route path="/main" element={<Home />} />
        <Route path="/posts/:id" element={<FullPost />} />
        <Route path="/posts/:id/edit" element={<AddPost />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/info" element={<Info />} />
        <Route path="/posts" element={<Projects />} />
       </Routes>
      </Container>
    </>
  );
}

export default App;
