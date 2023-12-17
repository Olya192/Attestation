import { render, screen } from "@testing-library/react";
import App from "./App";

test("test input", () => {
  render(<App />);
  const inputElement = screen.getByTestId("input");
  expect(inputElement).toBeInTheDocument();
});

test("test button", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("button");
  expect(buttonElement).toBeInTheDocument();
});

test("test users", () => {
  render(<App />);
  const inputElement = screen.getByTestId("input");
  inputElement.value = "olya";
  const buttonElement = screen.getByTestId("button");
  buttonElement.click();
  setTimeout(() => {
    const usersElement = screen.getByTestId("users");
    expect(usersElement).toBeInTheDocument();
  }, 5000);
});
