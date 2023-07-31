import Profile from "./Component/Profile";

const profileDetials = {
  image: "https://unsplash.it/900/400/",
  name: "Dam",
  role: "SDE-1",
};

const App = () => (
  <div>
    <h1>Profile List</h1>
    <Profile userDetails={profileDetials} />
  </div>
);

export default App;
