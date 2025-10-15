import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () =>(
    <div id = "container">
     <h1 id="heading">This is the info in Heading Component!</h1>
     </div>
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);