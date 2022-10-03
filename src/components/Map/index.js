import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import PolygonLayer from "../Layers/PolygonLayer";
import Loader from "../Loader";
import LoaderWithApi from "../LoaderWithApi";

const Map = ({ data, error, loading }) => {
  const calculateCenter = () => {
    if (data?.features.length > 1) {
      return [
        data.features[0].geometry.coordinates[0][0][1],
        data.features[0].geometry.coordinates[0][0][0],
      ];
    }
    return [0, 0];
  };

  return (
    <LoaderWithApi
      loading={loading}
      error={error}
      render={() => (
        <MapContainer
          key={calculateCenter()}
          center={calculateCenter()}
          zoom={8}
          scrollWheelZoom
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <PolygonLayer data={data} />
        </MapContainer>
      )}
    />
  );
};

export default Map;
