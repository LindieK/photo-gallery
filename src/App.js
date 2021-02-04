import './App.css';
import Search from './components/Search'
import Categories from './components/Categories'
import Grid from './components/Grid'

function App() {
  return (
    <div className="App">
      <header>
          <div className='Nav'>
              <h1>PG</h1>
              <Search />
          </div>
          <Categories />
      </header>
      <Grid />
    </div>
  );
}

export default App;
