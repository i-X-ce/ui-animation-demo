import "./App.css";
import MainView from "./components/MainView";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="flex ">
        <SideBar />
        <MainView />
      </div>
    </>
  );
}

export default App;
