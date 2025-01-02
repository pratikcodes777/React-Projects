import Navbar from "./components/Navbar";
import { FaSearch } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

const App = () => {
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar></Navbar>

      <div className="flex gap-2">
        <div className="relative flex items-center flex-grow">
          <FaSearch className="absolute ml-1 text-2xl text-white"></FaSearch>
          <input
            type="text"
            placeholder="Search Contact"
            className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
          />
        </div>
          <FaPlusCircle className="text-white text-[40px] cursor-pointer" />
      </div>
    </div>
  );
};

export default App;
