export const generateInitialCoordinates = (...args) => {
  if (args.length === 0) {
    return {
      min_lon: "",
      min_lat: "",
      max_lon: "",
      max_lat: "",
    };
  }
  return {
    min_lon: args[0],
    min_lat: args[1],
    max_lon: args[2],
    max_lat: args[3],
  };
};
