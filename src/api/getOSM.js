import axios from "axios";

export const getOSM = async ({ min_lon, min_lat, max_lon, max_lat }) => {
  try {
    const { data } = await axios.get(
      "https://www.openstreetmap.org/api/0.6/map",
      {
        params: {
          bbox: `${min_lon},${min_lat},${max_lon},${max_lat}`,
        },
      }
    );
    return {
      data,
      error: null,
    };
  } catch (e) {
    console.log(e);
    return {
      data: null,
      error: e?.response?.data,
    };
  }
};
