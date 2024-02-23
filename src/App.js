import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const user = useSelector((state) => state.auth.isAuth);
  return (
    <Fragment>
      <Header />
      {user && <UserProfile />}
      {!user && <Auth />}

      <Counter />
    </Fragment>
  );
}

export default App;
