import Profile from "./Component/Profile";

const profileDetials = [
  {
    image: "https://unsplash.it/300/300/",
    name: "Dam1",
    role: "SDE-1",
    email: "dam1@gmail.com",
  },
  {
    image: "https://unsplash.it/300/300/",
    name: "Dam2",
    role: "SDE-1",
    email: "dam1@gmail.com",
  },
  {
    image: "https://unsplash.it/300/300/",
    name: "Dam3",
    role: "SDE-1",
    email: "dam1@gmail.com",
  },
  {
    image: "https://unsplash.it/300/300/",
    name: "Dam4",
    role: "SDE-1",
    email: "dam1@gmail.com",
  },
];

const App = () => (
  <div className="list-container">
    <h1>Profile List</h1>
    <Profile userDetails={profileDetials[0]} />
    <Profile userDetails={profileDetials[1]} />
    <Profile userDetails={profileDetials[2]} />
    <Profile userDetails={profileDetials[3]} />
  </div>
);

export default App;
