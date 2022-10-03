import { GeoJSON } from "react-leaflet";

const PolygonLayer = ({ data }) => {
  return <GeoJSON key="geo-json-layer" data={data}></GeoJSON>;
};

export default PolygonLayer;
