import { useGlobalContext } from "./context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

interface GlobalContextType {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
}

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } =
    useGlobalContext() as GlobalContextType;
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" style={{ color: "#fff" }} />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
