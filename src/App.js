// import logo from './logo.svg';
// import './App.css';

import Databinding from "./Components/Databinding/Databinding";
import HandleEvent from "./Components/HandleEvent/HandleEvent";
import Home from "./Components/Home/Home";
import ProductList from "./Props/BaiTapProp/ProductList";
import BaiTapXemChiTiet from "./Props/BaiTapXemChiTiet/BaiTapXemChiTiet";
import DemoProps from "./Props/DemoProps/DemoProps";
import ExerciseCarStore from "./Props/ExerciseCarStore/ExerciseCarStore";
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
      {/* <DemoProps/> */}
      {/* <ProductList/> */}
      {/* <BaiTapXemChiTiet/> */}
      <ExerciseCarStore/>
    </div>
  );
}

export default App;
