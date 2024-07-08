import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";
function App() {
  return (
    <div className="w-full h-screen relative flex flex-col background overflow-x-hidden items-center">
      <h1 className=" bg-white rounded-sm w-11/12 text-center mt-[40px] ml-[25px] mr-[25px] px-10 py-2 text-2xl font-bold mx-auto">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
