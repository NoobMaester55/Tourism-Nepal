import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Component/NavBar/NavBar';
import Footer from './Component/Footer/Footer';

import HomeSection from './Section/HomeSection';
import NatureSection from './Section/NatureSection';
import CultureSection from './Section/CultureSection';
import AdventureSection from './Section/AdventureSection';
import MountainSection from './Section/MountainSection';
import WildlifeSection from './Section/WildlifeSection';
import PlaceDetail from './Section/PlaceDetail';
import TravelAgencies from './Section/TravelAgencies'

import Location from './Section/Location';
import data from './Data/data';
import locationData from './Data/locationData';

function App() {
  const locations = [...new Set(data.filter(place => place.Location).map(place => place.Location))];

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/nature" element={<NatureSection />} />
          <Route path="/culture" element={<CultureSection />} />
          <Route path="/adventure" element={<AdventureSection />} />
          <Route path="/mountain" element={<MountainSection />} />
          <Route path="/wildlife" element={<WildlifeSection />} />
          <Route path="/TravelAgencies" element={<TravelAgencies />} />
          <Route path="/:placeId" element={<PlaceDetail />} />
          

          {locations.map(location => {
            const places = data.filter(place => place.Location === location);

            return (
              <Route
                key={location}
                path={`/${location.toLowerCase()}`}
                element={<Location
                  locationDataKey={location}
                  places={places}
                />}
              />
            );
          })}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
