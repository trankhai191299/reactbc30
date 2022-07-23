import React, { Component } from "react";
import BaiViet from "./BaiViet";
import Card from "./Card";
const dsBaiViet = [
    {tieuDe:'tieu de 1',noiDung:'noi dung 1'},
    {tieuDe:'tieu de 2',noiDung:'noi dung 2'},
    {tieuDe:'tieu de 3',noiDung:'noi dung 3'},
]
export default class DemoProps extends Component {
  render() {
    const tenSP = "product1";
    const gia = 1000;
    const baiViet = {
      tieuDe: "AAAAAAAAAA",
      noiDung:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia cum at culpa commodi quam officia labore maiores facilis nihil fuga rerum  doloremque impedit nulla, architecto deleniti, tempora quas laudantium eum.",
    };
    return (
      <div className="container">
        <div className="w-25">
          <Card tenSP={tenSP} gia={gia} />
        </div>
        <h3>Demo Bai Viet</h3>
        {dsBaiViet.map((baiViet,index)=>{
            return <div key={index}>
                <BaiViet obBaiViet={baiViet} />
            </div>
        })}
        
      </div>
    );
  }
}
