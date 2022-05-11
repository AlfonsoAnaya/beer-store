import './App.css';

import Filters from "./components/Filters"
import Beers from "./components/Beers"

function App() {
  return (
    <div>
      <header>Punk API Beer App</header>
      <Filters />
      <Beers />
    </div>
  );
}

export default App;
