import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import './style.css';
import { UserContext } from "./UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserContext>
        <Header />
        <Main />
      </UserContext>
    </BrowserRouter>
  );
}

export default App;
