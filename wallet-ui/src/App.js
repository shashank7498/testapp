import './App.css';
import Wallet from "./components/Wallet";

function App() {
  return (
    <div style={{display: "flex", flexDirection: "column", backgroundColor: "beige"}}>
        <h1 style={{display: "flex", justifyContent: "center"}}>Wallet App</h1>
      <Wallet />
    </div>
  );
}

export default App;
