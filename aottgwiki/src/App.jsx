import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from './routes/home/Home';
import Download from './routes/download/Download';
import Tutorials from './routes/tutorials/Tutorials';
import Community from './routes/community/Community';
import About from './routes/about/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Download" element={<Download />} />
        <Route path="Tutorials" element={<Tutorials />} />
        <Route path="Community" element={<Community />} />
      </Routes>
    </div>
  );
}

export default App;
