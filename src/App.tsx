import './styles/App.css';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar
        activeNavbarItemIndex={0}
        navItems={['Главная', 'Cписок зданий', 'Контакты']}
      />
    </div>
  );
}

export default App;
