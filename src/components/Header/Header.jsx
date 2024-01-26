import Core from "../../assets/react-core-concepts.png";
const Header = () => {
  const reactiveDescription = ["Fundamental", "Crucial", "Core"];
  return (
    <header>
      <img src={Core} alt="Stylized atom" />
      <h1>Dear Telangana</h1>
      <p>
        {reactiveDescription[Math.floor(Math.random() * 3)]} React concepts you
        will need for almost any app you are going to build!
      </p>
    </header>
  );
};
export default Header;
