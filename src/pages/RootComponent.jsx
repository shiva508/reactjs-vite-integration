import MainNavigation from "../components/MainNavigation";
import { Outlet, useNavigation } from "react-router-dom";
const RootComponent = () => {
  const navigation = useNavigation();
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        {navigation.state === "loading" && (
          <p className={{ color: "#fff" }}>Loading........</p>
        )}
        <Outlet />
      </main>
    </>
  );
};
export default RootComponent;
