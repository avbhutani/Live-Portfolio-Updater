import logo from './logo.svg';
import './App.css';
import {Routes,Route, Router} from 'react-router-dom'
import React, { Suspense } from 'react'
import Homepage from './pages/Homepage';

const EditAbout = React.lazy(() => import('./pages/EditAbout'));
const EditIntro = React.lazy(() => import('./pages/EditIntro'));
const EditExperience = React.lazy(() => import('./pages/EditExperience'));
const EditEducation = React.lazy(() => import('./pages/EditEducation'));
const EditAchievements = React.lazy(() => import('./pages/EditAchievements'));

function App() {
  return (
    <>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/edit/intro' element={<EditIntro />} />
        <Route path='/edit/about' element={<EditAbout />} />
        <Route path='/edit/experience' element={<EditExperience />} />
        <Route path='/edit/education' element={<EditEducation />} />
        <Route path='/edit/achievements' element={<EditAchievements />} />
      </Routes>
    </Suspense>
    </>
  );
}

export default App;
