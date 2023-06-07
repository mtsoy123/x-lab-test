import React, { useEffect } from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import { Route, Routes } from "react-router-dom";
import News from "../News/News";
import Address from "../Address/Address";
import { api } from "../../utils/api";

type Props = {};
function App({}: Props) {
    useEffect(() => {
        // api.getAddress("ленина").then((res) => console.log(res));
    }, []);

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
