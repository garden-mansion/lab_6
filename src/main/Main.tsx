import { Navbar } from "../components/Navbar";
import { Gallery } from "./components/Gallery";
import { Content } from "./components/Content";
import { NAV_ITEMS } from '../navItems';

function Main() {
  return (
    <div>
      <Navbar active={0} navItems={NAV_ITEMS} />
      <Gallery />
      <Content />
    </div>
  );
}

export default Main;
