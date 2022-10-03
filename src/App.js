import "./App.css";
import useGeoJson from "./hooks/useGeoJSON";
import SearchBox from "./components/Searchbox";
import Map from "./components/Map";

const initialCoordinates = {
  min_lon: 42.248,
  min_lat: 11.85,
  max_lon: 42.28,
  max_lat: 15.86,
};

function App() {
  const { data, error, loading, refetch } = useGeoJson({
    coordinates: initialCoordinates,
  });

  const onSubmit = (value) => {
    refetch(value);
  };

  return (
    <div className="app">
      <div className="map-container">
        <Map data={data} error={error} loading={loading} />
      </div>
      <div className="searchbox-container">
        <SearchBox onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default App;
