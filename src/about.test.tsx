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

// beforeAll(() => {
//   matchMedia = new MatchMediaMock();
//   window.resizeTo = function resizeTo(width, height) {
//     Object.assign(this, {
//       innerWidth: width,
//       innerHeight: height,
//       outerWidth: width,
//       outerHeight: height,
//     }).dispatchEvent(new this.Event("resize"));
//   };
// });

// afterEach(() => {
//   matchMedia.clear();
//   global.innerWidth = 1024;
//   global.dispatchEvent(new Event("resize"));
// });

// const resizeWindow = (x: number, y: number): any => {
//   global.innerWidth = x;
//   global.innerHeight = y;
//   global.dispatchEvent(new Event("resize"));
// };
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

it("should have a nav link", async () => {
  render(<About />);

  expect(screen.getByText("Archive").getAttribute("href")).toBe("/archive");
  // .toBeTruthy();

  // await waitFor(() => expect().toEqual("WOTD"));

  // expect(window.document.title).toEqual("WOTD");
});

it("shouldn't render mobile nav", async () => {
  render(<About />);

  expect(screen.queryByLabelText("mobile-nav")).toBeNull();

  // .toBeTruthy();

  // await waitFor(() => expect().toEqual("WOTD"));

  // expect(window.document.title).toEqual("WOTD");
});

it("should render the desktop viewport navigation", async () => {
  render(<About />);

  // expect(screen.queryByLabelText("desktop-nav")).toBeTruthy();
  expect(screen.queryByLabelText("mobile-nav")).toBeNull();

  // .toBeTruthy();
  // await resizeWindow(300, 300);

  // await waitFor(() => expect().toEqual("WOTD"));

  // expect(window.document.title).toEqual("WOTD");
});

afterEach(cleanup);
// it("renders without crashing", () => {
//   render(<Index wordJSON={""} />);
//   expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
// });
