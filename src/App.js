import './App.css';

import Header from "./components/Header"
import Filters from "./components/Filters"
import Beers from "./pages/Beers"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header />
      <Filters />
      <Beers />
      <Footer />
    </div>
  );
}

export default App;
