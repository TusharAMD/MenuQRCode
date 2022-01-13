import Home from './Home';
import {
    HashRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <HashRouter>
        <Routes>
            <Route exact path='/home' element={< Home />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default Navbar;
