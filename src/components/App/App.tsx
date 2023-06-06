import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

type Props = {};
function App({}: Props) {
    return (
        <div className="App">
            <Header></Header>
            <Menu></Menu>
        </div>
    );
}

export default App;
