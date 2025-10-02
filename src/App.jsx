import { Suspense } from "react";
import "./App.css";
import Card from "./component/Daisui/Card/Card";
import Daisyui from "./component/Daisui/Daisyui";
import Nav from "./component/Daisui/nav";
import Resultchart from "./component/Resultchart";

const CardData = async () => {
  const data = await fetch("card.json");
  return data.json();
};

console.log(CardData);
function App() {
  const data = CardData();

  return (
    <>
      <header>
        <Nav></Nav>
        {/* <Daisyui></Daisyui> */}
      </header>
      <main>
        <Suspense fallback={<h3>load...</h3>}>
          <Card Data={data}></Card>
        </Suspense>
      </main>
      <footer>
        <Resultchart></Resultchart>
      </footer>
    </>
  );
}

export default App;
