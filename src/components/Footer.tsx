import Card from "./card";

const Footer = () => {
  return (
    <footer className="mt-6 flex flex-col w-full items-center gap-16 ">
      <div className="lg:hidden">
        <Card>
          <div className="flex justify-center gap-6 w-full text-xl text-gray-400 font-bold">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
        </Card>
      </div>
      <p className="text-gray-400 font-bold">Drag and drop to reorder list</p>
    </footer>
  );
};

export default Footer;
