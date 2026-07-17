import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'; 
import Contato from './pages/Contato';
import Projetos from './pages/Projetos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </Router>
  );
}

export default App;