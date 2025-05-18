import { Button, Link, Loading } from ".";
import "./App.css";

function App() {
  return (
    <div className=" w-screen h-screen bg-background p-8">
      <Button>Hello world</Button>

      <Loading />

      <Link href="/ppp">This is a link</Link>
    </div>
  );
}

export default App;
