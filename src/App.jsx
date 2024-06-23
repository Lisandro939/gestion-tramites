import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequestProcedure from './pages/request-procedure/RequestProcedure';
import Home from './pages/Home';
import Layout from './components/Layout';
import CompleteDocumentation from './pages/complete-documentation/CompleteDocumentation';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/solicitar-tramite" element={<RequestProcedure />} />
          <Route path="/completar-documentación" element={<CompleteDocumentation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
