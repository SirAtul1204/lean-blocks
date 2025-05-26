import { Button, Icon, Link, Loading, Tab } from ".";
import "./App.css";

function App() {
  const changeTheme = () => {
    const alreadyDark = document.documentElement.classList.contains("dark");
    if (alreadyDark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className=" w-screen h-screen bg-background p-8">
      <Button onClick={changeTheme}>Switch theme</Button>

      <Loading />

      <Link href="/ppp">This is a link</Link>

      <Tab>Tab 1</Tab>

      <Icon icon="chevron-right" />
    </div>
  );
}

export default App;
