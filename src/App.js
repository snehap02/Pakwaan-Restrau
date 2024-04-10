import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import ShimmerUI from "./components/ShimmerUI";

const App = () => {
    return (
        <div>
            <Header/>
            <ShimmerUI/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);