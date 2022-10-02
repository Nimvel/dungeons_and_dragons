import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import MapContainer from './components/Map/MapContainer';
import Navbar from './components/Navbar/Navbar';
import PicturesContainer from './components/Pictures/PicturesContainer';

const App = () => {
  return <div className='App'>
      <Header />
      <Navbar />
      <div className='menu'>
      <Routes>
        <Route path='/pictures' element={<PicturesContainer />} />
      </Routes>
      </div>
      <div className='content'>
        <MapContainer />
      </div>
    </div>
}

export default App;