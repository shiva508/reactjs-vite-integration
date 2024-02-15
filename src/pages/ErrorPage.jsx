import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  let title = "Error occurred";
  let message = error.data.message;
  return (
    <>
      <MainNavigation></MainNavigation>
      <PageContent title={title}>
        <h3>{message}</h3>
      </PageContent>
    </>
  );
};
export default ErrorPage;
