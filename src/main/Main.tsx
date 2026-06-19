import { Navbar } from '../components/Navbar';
import { Gallery } from './components/Gallery';
import { Content } from './components/Content';
import SearchBar from './components/SearchBar';
import { NAV_ITEMS } from '../navItems';

function Main() {
  return (
    <div>
      <Navbar active={0} navItems={NAV_ITEMS} />
      <SearchBar />
      <Gallery />
      <Content />
    </div>
  );
}

export default Main;
