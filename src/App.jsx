import { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequestProcess from './pages/RequestProcess';
import Home from './pages/Home';
import Layout from './components/Layout';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/solicitar-tramite" element={<RequestProcess />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
