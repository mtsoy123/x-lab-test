import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import { Route, Routes } from "react-router-dom";
import News from "../News/News";
import Address from "../Address/Address";

type Props = {};
function App({}: Props) {
    return (
        <div className="app">
            <Header></Header>
            <main className="app__wrapper">
                <Menu />
                <Routes>
                    <Route path="/" element={<News />} />
                    <Route path="address" element={<Address />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
