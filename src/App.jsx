import "./App.css";
import ImageComponent from "./components/ImageComponent";
import ButtonClassComponent from "./components/ButtonClassComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent />
        <ButtonClassComponent customTitle="Cliccami" />
      </header>
    </div>
  );
}

export default App;
