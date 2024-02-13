import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
const RootComponent = () => {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default RootComponent;
