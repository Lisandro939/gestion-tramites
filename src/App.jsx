import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequestProcedure from './pages/request-process/RequestProcedure';
import Home from './pages/Home';
import Layout from './components/Layout';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/solicitar-tramite" element={<RequestProcedure />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
