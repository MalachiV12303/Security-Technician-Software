
import './App.css';
import Header from "./components/Header.js";
import ExpandableMenu from './components/ExpandableMenu.js';
import Footer from './components/Footer.js';
import { menuData } from './utils/MenuData.js';

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <div class="all-Menus">
        {menuData.map(({ title, content }) => (
          <ExpandableMenu title={title} content={content} />
        ))}
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default App;
