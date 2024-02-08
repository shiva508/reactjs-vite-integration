import MainNavigation from "./MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        <h1>Error Occurred</h1>
        <p>Page could not found</p>
      </main>
    </>
  );
};
export default ErrorPage;
