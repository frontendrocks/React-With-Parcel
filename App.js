import React from 'react';
import ReactDOM from "react-dom/client";


const heading = <h1>Heading123</h1>

const HeadingComponent = () => {
    return (
        <>
         {heading}
        <h2>Heading goes here</h2>
        <div>dgbd dgbdfgb</div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);