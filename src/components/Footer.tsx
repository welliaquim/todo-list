import { FooterProps } from "../utils/interfaces";

const Footer: React.FC<FooterProps> = ({ darkTheme }) => {
  return (
    <footer
      className={`mt-12 lg:pt-2 flex flex-col w-full items-center gap-16 ${
        darkTheme ? "bg-very-dark-blue" : "bg-white"
      }`}
    >
      <p className="text-gray-400 font-bold">Drag and drop to reorder list</p>
    </footer>
  );
};

export default Footer;
