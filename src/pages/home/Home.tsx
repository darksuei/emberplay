import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Layout } from "../../components";

export const Home = () => {
  const user = useSelector((state: RootState): any => state.auth.user);
  console.log(user);
  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  );
};
