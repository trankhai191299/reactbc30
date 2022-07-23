// import logo from './logo.svg';
// import './App.css';

import Databinding from "./Components/Databinding/Databinding";
import HandleEvent from "./Components/HandleEvent/HandleEvent";
import Home from "./Components/Home/Home";
import DemoProps from "./Props/DemoProps/DemoProps";
import BaitapRenderMap from "./RenderWithMap/BaitapRenderMap";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapState from "./State/BaiTapState";
import DemoState from "./State/DemoState";
import StyleRender from "./StyleRender/StyleRender";



function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Databinding /> */}
      {/* <HandleEvent/> */}
      {/* <DemoState/> */}
      {/* <p className="color-red">App</p>
      <StyleRender/> */}
      {/* <BaiTapState/> */}
      {/* <RenderWithMap /> */}
      {/* <BaitapRenderMap/> */}
      <DemoProps/>
    </div>
  );
}

export default App;
