import './App.css';
import { FC, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Register from './components/auth/Register';
// import Login from './components/auth/Login';
// import Home from './components/home/Home';
// import Landing from './components/home/Landing';
import TopBar from './components/Home/TopBar';
import Banner from './components/Home/Banner';
import Skills from './components/Home/Skills';
import { Projects } from './components/Home/Projects';
import { Contact } from './components/Home/Contact';
import { Footer } from './components/Home/Footer';
import { useDispatch } from 'react-redux';
import { fetchMe } from './store/meSlice';
// import '../src/assets/vendor/aos/aos.css';
// // import '../src/assets/vendor/bootstrap/css/bootstrap.min.css';
// import '../src/assets/vendor/bootstrap-icons/bootstrap-icons.css';
// import '../src/assets/vendor/boxicons/css/boxicons.min.css';
// import '../src/assets/vendor/glightbox/css/glightbox.min.css';
// import '../src/assets/vendor/swiper/swiper-bundle.min.css';
// import '../src/assets/css/style.css';

const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMe());
  }, [dispatch]);
  return (
    <div className='App'>
      <TopBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
