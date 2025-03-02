import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/'
import Survey from './pages/Survey'
import Header from './components/headers'
// On ajoute nos composants
import ClientForm from './components/ClientForm'
import FreeLanceForm from './components/FreeLanceForm'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />}>
          { /* Nous imbriquons nos composants dans survey */}
          <Route path="client" element={<ClientForm />} />
          <Route path="freelance" element={<FreeLanceForm />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
