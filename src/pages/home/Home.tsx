import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const Home = () => {
  const user = useSelector((state: RootState): any => state.auth.user);
  console.log(user);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
