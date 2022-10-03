import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { MapContainer } from "react-leaflet";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

test("renders heading", () => {
  render(<App />, { wrapper: MapContainer });
  const heading = screen.getByRole("heading", {
    name: /please insert coordinates/i,
  });
  expect(heading).toBeInTheDocument();
});
