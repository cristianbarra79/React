import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CartContextProvider from './context/CartContext';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import './App.css';


function App() {

    return (
    <div className="App">      
      <CartContextProvider >
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
      </CartContextProvider>
    </div>
  );
}

export default App;