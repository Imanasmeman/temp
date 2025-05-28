import { useState } from 'react'
import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import InboxPage from './pages/InboxPage';
import SettingsPage from './pages/SettingsPage';
import TaskDetailPage from './pages/TaskDetailPage';

function App() {

  return (
    <Routes>
      <Route path='/' element = {<LoginPage/>} />
      <Route path='/inbox' element = {<InboxPage/>} />
      <Route path='/task/:id' element = {<TaskDetailPage/>} />
      <Route path='/settings' element = {<SettingsPage/>} />
    </Routes>
  )
}

export default App
