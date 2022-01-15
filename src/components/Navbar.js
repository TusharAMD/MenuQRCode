import Home from './Home';
import Nonac from './Nonac';
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
            <Route exact path='/Nonac' element={< Nonac />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default Navbar;
