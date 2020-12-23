import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import About from "src/pages/about";
// import Index from "src/pages/index";

// Mock for window
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// eslint-disable-next-line no-undef
it("renders without crashing", () => {
  render(<About />);
  expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
});

it("should have the correct title", async () => {
  render(<About />);

  expect(screen.getByText("Technologies")).toBeTruthy();

  // await waitFor(() => expect().toEqual("WOTD"));

  // expect(window.document.title).toEqual("WOTD");
});

afterEach(cleanup);
// it("renders without crashing", () => {
//   render(<Index wordJSON={""} />);
//   expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
// });
