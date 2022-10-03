import { useEffect, useState } from "react";
import { getOSM } from "../api/getOSM";
import osmtogeojson from "osmtogeojson";

const initialValue = {
  loading: true,
  data: null,
  error: null,
};

const useGeoJson = ({ coordinates }) => {
  const [geoData, setGeoData] = useState(initialValue);

  const getData = async (coordinates) => {
    const response = await getOSM(coordinates);
    const { data, error } = response;
    if (error) {
      setGeoData({
        data: null,
        error: response.error,
        loading: false,
      });
    } else {
      try {
        const osmToJson = osmtogeojson(data);
        setGeoData({
          data: osmToJson,
          error: null,
          loading: false,
        });
      } catch (e) {
        setGeoData({
          data: [],
          error: "Error happened while converting osm to geojson",
          loading: false,
        });
      }
    }
  };

  useEffect(() => {
    if (
      (coordinates.min_lon,
      coordinates.min_lat,
      coordinates.max_lon,
      coordinates.max_lat)
    ) {
      setGeoData(initialValue);
      getData(coordinates);
    }
  }, [coordinates]);

  return { ...geoData, refetch: getData };
};

export default useGeoJson;
