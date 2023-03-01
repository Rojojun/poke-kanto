import logo from "./asset/logo.png";
import "./App.css";
import innerlogo from "./asset/logo-2.GIF";
import { Form } from "react-bootstrap";

function App() {
  return (
    <div id="wrapper">
      <div className="logo-box">
        <img src={logo} className="logo" alt="logo" />
        <div className="inner-logo-box">
          <img src={innerlogo} className="img" alt="img"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
