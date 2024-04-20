
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function Home() {
  const auth = useSelector((state: RootState) => state.auth);
  return auth.isAuthenticated ? (
    <div>
      <h1>Welcome {auth.user}</h1>
    </div>
  ) : (
    <div>
      <h1>Welcome to the home page</h1>
    </div>
  );
}

export default Home;
