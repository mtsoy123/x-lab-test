import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

type Props = {};

function Address({}: Props) {
    return (
        <section className="address">
            <h1 className="address__header">Поиск адресов</h1>
            <h2 className="address__subheader">
                Введите интересующий вас адрес
            </h2>
            <div className="address__wrapper">
                <Input></Input>
                <Button></Button>
            </div>
            <ul className="address__search-results">
                <h2 className="address__search-header">Адреса</h2>
                <li className="address__search-result">
                    город Москва, улица Ленина 13, дом 32
                </li>
                <li className="address__search-result">
                    город Москва, улица Ленина 13, дом 32
                </li>
                <li className="address__search-result">
                    город Москва, улица Ленина 13, дом 32
                </li>
                <li className="address__search-result">
                    город Москва, улица Ленина 13, дом 32
                </li>
            </ul>
        </section>
    );
}

export default Address;
