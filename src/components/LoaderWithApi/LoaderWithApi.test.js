import { render, screen } from "@testing-library/react";
import LoaderWithApi from "./index";

test("loader shows loader spinner when loading", () => {
  render(<LoaderWithApi loading={true} />);

  const loadingHeading = screen.getByRole("heading", { name: /loading/i });
  expect(loadingHeading).toBeInTheDocument();
});

test("component shows error message and loader is hidden", () => {
  const errorMessage = "Something went wrong";
  render(<LoaderWithApi error={errorMessage} />);

  const loadingHeading = screen.queryByRole("heading", {
    name: /loading/i,
  });
  expect(loadingHeading).toBeNull();
  const alertDiv = screen.getByRole("alert");
  const errorText = screen.getByText(errorMessage);
  expect(alertDiv).toBeInTheDocument();
  expect(errorText).toBeInTheDocument();
});

test("component executes render function and loader and alert is hidden", () => {
  const Component = () => <h1>Map</h1>;
  render(<LoaderWithApi loading={false} render={() => <Component />} />);

  const loadingHeading = screen.queryByRole("heading", {
    name: /loading/i,
  });
  expect(loadingHeading).toBeNull();

  const alertDiv = screen.queryByRole("alert");
  expect(alertDiv).not.toBeInTheDocument();

  const childComponent = screen.getByRole("heading", { name: /map/i });
  expect(childComponent).toBeInTheDocument();
});
