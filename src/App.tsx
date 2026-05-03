import './styles/App.css';
import { Navbar } from './components/Navbar';
import { Gallery } from './components/Gallery';

function App() {
  return (
    <div>
      <Navbar
        activeNavbarItemIndex={0}
        navItems={['Главная', 'Cписок зданий', 'Контакты']}
      />
      <Gallery />
    </div>
  );
}

export default App;
