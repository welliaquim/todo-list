import Card from "./components/card";
import CardTask from "./components/card-task";
import Checkbox from "./components/checkbox";
import "./output.css";

function App() {
  const toDoArr = [
    { task: "blowjob" },
    { task: "blowjob1" },
    { task: "blowjob2" },
    { task: "blowjob3" },
    { task: "blowjob4" },
    { task: "blowjob5" },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-14 font-josefin bg-contain bg-[url('/src/assets/images/bg-mobile-light.jpg')] md:bg-[url('/src/assets/images/bg-desktop-light.jpg')] bg-no-repeat">
        <div className="w-full max-w-[500px]">
          <header className="flex justify-between w-full pb-8 ">
            <h1 className="uppercase tracking-[.45em] text-3xl text-white font-bold">Todo</h1>
            <div className="flex flex-row">
              <input type="checkbox" className="appearance-none h-6 w-6" />
              <span className="block h-6 w-6 rounded-full bg-[url('/src/assets/images/icon-moon.svg')] bg-no-repeat bg-cover cursor-pointer"></span>
            </div>
          </header>

          <Card>
            <Checkbox />
            <input type="text" placeholder="Create a new todo..." />
          </Card>
          <div className="mt-6 w-full shadow-[0_2px_18px_0px_#c8c8c8] rounded-md">
            <ul className="flex flex-col items-center">
              {toDoArr.map((key) => (
                <CardTask>
                  <div>
                    <li className="flex flex-row items-center text-gray-500">
                      <p>{key.task}</p>
                      <button type="reset" className="bg-[url('./src/assets/images/icon-cross.svg')]"></button>
                    </li>
                  </div>
                </CardTask>
              ))}
            </ul>
            <Card>
              <div className="flex flex-row justify-between w-full text-gray-400">
                <p>5 items left</p>
                <div className="flex justify-center gap-2 text-gray-400 font-bold sm:hidden lg:flex">
                  <button>All</button>
                  <button>Active</button>
                  <button>Completed</button>
                </div>
                <button type="reset">Clear Completed</button>
              </div>
            </Card>
          </div>

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
        </div>
      </div>
    </>
  );
}

export default App;
