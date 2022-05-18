import './App.css';

import Header from "./components/Header"
import Filters from "./components/Filters"
import Beers from "./pages/Beers"

function App() {
  return (
    <div>
      <Header />
      <Filters />
      <Beers />
    </div>
  );
}

export default App;
