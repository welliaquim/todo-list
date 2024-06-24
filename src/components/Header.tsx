const Header: React.FC = () => {
  return (
    <header className="flex justify-between w-full pb-8 ">
      <h1 className="uppercase tracking-[.45em] text-3xl text-white font-bold">Todo</h1>
      <div className="flex flex-row">
        <input type="checkbox" className="appearance-none h-6 w-6" />
        <span className="block h-6 w-6 rounded-full bg-[url('/src/assets/images/icon-moon.svg')] bg-no-repeat bg-cover cursor-pointer"></span>
      </div>
    </header>
  );
};

export default Header;
