import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Allproduct from './Components/Allproduct';
import ItemState from './Context/ItemState';

function App() {
  return (
    <div >
      
      <Router>
      <ItemState>
      <Navbar></Navbar>
      <Routes>
      <Route exact path="/"element={<Allproduct/>}/>
      </Routes>
      </ItemState>
      </Router>
     
    </div>
  );
}

export default App;
