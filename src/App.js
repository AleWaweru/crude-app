import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './components/create';
import Update from './components/update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
