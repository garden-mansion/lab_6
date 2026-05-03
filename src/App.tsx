import './styles/App.css';
import { Navbar } from './components/Navbar';
import { Gallery } from './components/Gallery';
import { Content } from './components/Content';

function App() {
  return (
    <div>
      <Navbar
        activeNavbarItemIndex={0}
        navItems={['Главная', 'Cписок зданий', 'Контакты']}
      />
      <Gallery />
      <Content />
    </div>
  );
}

export default App;
