\import './App.css';
import Intropage from './pages/intropage'
import Homepage from './pages/homepage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route exact path='/' element={<Intropage/>}/>
            <Route exact path='/home' element={<Homepage/>}/>
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
