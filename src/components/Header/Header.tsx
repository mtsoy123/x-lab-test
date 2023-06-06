import React from "react";

type Props = {};

function Header({}: Props) {
    return (
        <header className="header">
            <img
                src="../../vendor/svg/logo.svg"
                alt="logo"
                className="header__logo"
            ></img>
            <i className="icon icon_type_header-account"></i>
            <p className="header__name-surname">Имя Фамилия</p>
        </header>
    );
}

export default Header;
