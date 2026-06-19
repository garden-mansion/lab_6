import { Navbar } from '../components/Navbar';
import { NAV_ITEMS } from '../navItems';
import BuildingsGrid from './components/BuildingsGrid';

function List() {
  return (
    <div>
      <Navbar active={1} navItems={NAV_ITEMS} />
      <BuildingsGrid />
    </div>
  );
}

export default List;
