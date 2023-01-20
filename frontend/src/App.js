import './App.css';
import Intropage from './pages/intropage'
import Homepage from './pages/homepage'
import Servicepage from './pages/servicepage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Diseasepage from './pages/diseasepage';
import Soilpage from './pages/soilpage';
import SimpleMap from './components/vetenarymaps/vetenary';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route exact path='/' element={<Intropage/>}/>
            <Route exact path='/home' element={<Homepage/>}/>
            <Route exact path='/services' element={<Servicepage/>}/>
            <Route exact path='/services/disease' element={<Diseasepage/>}/>
            <Route exact path='/services/soil' element={<Soilpage/>}/>
            <Route exact path='/services/croprecommend' element={<Croprecommendpage/>}/>
            <Route exact path='/services/fertilizerrecommend' element={<FertilizerRecommendpage/>}/>
            <Route exact path='/services/agropedia' element={<Agropediapage/>}/>
            
            <Route exact path='services/vetenarymaps' element={<SimpleMap/>}/>
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
