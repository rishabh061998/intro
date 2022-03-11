import {add, mult} from "./calculator"
import "./style.css";

import React from 'react';
import ReactDOM from "react-dom";

console.log(add(5,5))

console.log(mult(10,23))

//new:
ReactDOM.render(
/*React.createElement("div",null,    React.createElement("h1",{className:"redtext"},
React.createElement("p",{},"hello paragraph"),
React.createElement("div",{id:"div"},"hello paragraph1")
),
React.createElement("a",{href:"/test"},"go somewhere")),
*/
<h1 className="redtext">
    <div>Hello</div>
    <p>Paragraph</p>
</h1>,
document.getElementById("root")
);



//old:

/*
const h1=document.createElement("h1")
h1.classList.add("redtext");
h1.innerText="hello world";
document.getElementById("root").appendChild(h1)
*/