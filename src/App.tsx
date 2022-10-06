import ArraysComponent from "./components/ArraysComponent";
import EnumsComponent from "./components/EnumsComponent";
import FunctionsComponent from "./components/FunctionsComponent";
import GenericsComponent from "./components/GenericsComponent";
import InterfacesComponent from "./components/InterfacesComponent";
import ObjectsComponent from "./components/ObjectsComponent";
import TypesComponent from "./components/TypesComponent";
import UnknownComponent from "./components/UnknownComponent";
import "../src/App.css";
import UtilitytypesComponent from "./components/UtilitytypesComponent";
import TypeAliasComponent from "./components/TypeAliasComponent";

function App() {
  return (
    <div>
      <h1>
        This Website was created in order to practice Typescript and showcase
        some examples.
      </h1>
      <h3>
        For more Visual oriented projects please check other projects here:{" "}
        <a href="https://mikenotu.github.io/front-portfolio/" target="_self">
          <button className="other-button">OTHER PROJECTS</button>
        </a>
      </h3>
      <h3>
        To see the Source Code press this button:{" "}
        <a
          href="https://github.com/MikeNotu/in-depth-typescript/blob/master/src/App.tsx"
          target="_self"
        >
          <button className="source-button">SOURCE CODE</button>
        </a>
      </h3>
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
      <h1>Unknown</h1>
      <UnknownComponent />
      <h1>Utility</h1>
      <UtilitytypesComponent />
      <h1>TypeAliasComponent</h1>
      <TypeAliasComponent />
    </div>
  );
}

export default App;
