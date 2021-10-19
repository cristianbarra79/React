import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div className="App">            
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Bienvenido!!!"/>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer/>
          </Route>
          <Route exact path="/category/:category">
            <ItemListContainer greeting="Bienvenido!!!"/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>           
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;