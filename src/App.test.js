import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";

test("renders Header, About, and ArticleList", () => {
  render(<App />);
  expect(screen.getByText("Underreacted")).toBeInTheDocument();
  expect(screen.getByText("A blog about learning React.")).toBeInTheDocument();
  expect(screen.getByText("Components 101")).toBeInTheDocument();
});

test("renders a <header> element", () => {
  const { container } = render(<Header name="Underreacted" />);
  expect(container.querySelector("header")).toBeInTheDocument();
  expect(screen.getByText("Underreacted")).toBeInTheDocument();
});

test("renders an <aside> element with image and paragraph", () => {
  const { container } = render(<About about="About this blog" />);
  expect(container.querySelector("aside")).toBeInTheDocument();
  expect(screen.getByAltText("blog logo")).toBeInTheDocument();
  expect(screen.getByText("About this blog")).toBeInTheDocument();
});

test("renders an <article> element with default date", () => {
  const { container } = render(
    <Article title="Test Article" preview="Test preview" />
  );
  expect(container.querySelector("article")).toBeInTheDocument();
  expect(screen.getByText("January 1, 1970")).toBeInTheDocument();
});