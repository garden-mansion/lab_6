import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main/Main';
import List from './list/List';
import Building from './building/Building';
import Chart from './chart/Chart';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/building/:id" element={<Building />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
