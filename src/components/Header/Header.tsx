import React from "react";
import logo from "../../vendor/svg/logo.svg";

type Props = {};

function Header({}: Props) {
    return (
        <header className="header">
            <a href="#">
                <img src={logo} alt="logo" className="header__logo" />
            </a>
            <a href="#" className="header__account-wrapper">
                <i className="icon icon_type_header-account"></i>
                <p className="header__name-surname">Имя Фамилия</p>
            </a>
        </header>
    );
}

export default Header;
