import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Main from './main/Main';
import List from './list/List';
import Building from './building/Building';
import Chart from './chart/Chart';
import { Footer } from './components/Footer';
import { Testing } from './testing/Testing';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <CssBaseline />
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/list" element={<List />} />
            <Route path="/building/:id" element={<Building />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/check-yourself" element={<Testing />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
