import logo from "./logo.svg";

const blogData = {
  name: "Underreacted",
  image: logo,
  about: "A blog about learning React.",
  posts: [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up your first React components.",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props down to child components.",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function Components vs Class Components",
      preview: "A look at modern function components.",
      minutes: 47,
    },
  ],
};

export default blogData;