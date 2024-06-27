import { DarkTheme } from "../utils/interfaces";

const Header: React.FC<DarkTheme> = ({ darkTheme, setDarkTheme }) => {
  return (
    <header className="flex justify-between w-full pb-8 ">
      <h1 className="uppercase tracking-[.45em] text-3xl text-white font-bold">Todo</h1>
      <div className="flex flex-row">
        <button
          className={`block h-6 w-6 rounded-full ${
            darkTheme ? "bg-[url('/src/assets/images/icon-sun.svg')]" : "bg-[url('/src/assets/images/icon-moon.svg')]"
          } bg-no-repeat bg-cover cursor-pointer`}
          onClick={() => setDarkTheme(!darkTheme)}
        />
      </div>
    </header>
  );
};

export default Header;
