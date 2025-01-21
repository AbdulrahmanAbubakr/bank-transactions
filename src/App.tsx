import { Route, Routes } from "react-router-dom";
import Buttons from "./components/Buttons";
import Card from "./components/Card";
import Transactions from "./components/Transactions";

function App() {
  return (
    <>
      <Buttons />
      {/* <div className="card">
        <Card />
      </div> */}

      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/Transactions" element={<Transactions />} />
      </Routes>
    </>
  );
}

export default App;
