import ArraysComponent from "./components/ArraysComponent";
import EnumsComponent from "./components/EnumsComponent";
import FunctionsComponent from "./components/FunctionsComponent";
import GenericsComponent from "./components/GenericsComponent";
import InterfacesComponent from "./components/InterfacesComponent";
import ObjectsComponent from "./components/ObjectsComponent";
import TypesComponent from "./components/TypesComponent";

function App() {
  return (
    <div>
      <h1>Interfaces</h1>
      <InterfacesComponent />
      <h1>Enums</h1>
      <EnumsComponent />
      <h1>Arrays</h1>
      <ArraysComponent />
      <h1>Objects</h1>
      <ObjectsComponent />
      <h1>Functions</h1>
      <FunctionsComponent />
      <h1>Types</h1>
      <TypesComponent />
      <h1>Generics</h1>
      <GenericsComponent />
    </div>
  );
}

export default App;
