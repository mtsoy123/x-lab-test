import React, { useCallback, useMemo, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { api } from "../../utils/api";

type Props = {};

const renderAddress = (address: string[]) => {
    return address.map((item, id) => {
        return (
            <li key={id} className="address__search-result">
                {item}
            </li>
        );
    });
};

function Address({}: Props) {
    type Address = {
        value: string;
    };

    const [searchQuery, setSearchQuery] = useState("");
    const [address, setAddress] = useState([]);
    const [notFound, setNotFound] = useState(false);

    const handleSubmit = (searchQuery: string) => {
        if (searchQuery.length >= 3) {
            api.getAddress(searchQuery)
                .then((res) => {
                    if (res.suggestions.length === 0) {
                        setNotFound(true);
                    } else {
                        setNotFound(false);
                    }

                    setAddress(
                        res.suggestions.map((item: Address) => {
                            return item.value;
                        })
                    );
                })
                .catch((err) => console.log(err));
        }
    };

    const memoizedRenderAddress = useMemo(
        () => renderAddress(address),
        [address]
    );

    return (
        <section className="address">
            <h1 className="address__header">Поиск адресов</h1>
            <h2 className="address__subheader">
                Введите интересующий вас адрес
            </h2>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit(searchQuery);
                }}
                className="address__wrapper"
            >
                <Input
                    type="text"
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    placeholder="Введите адрес"
                    minLength={3}
                />
                <Button text="Поиск" />
            </form>
            <ul className="address__search-results">
                <h2 className="address__search-header">Адреса</h2>
                {notFound && (
                    <p className="address__not-found">Адрес не найден</p>
                )}
                {memoizedRenderAddress}
            </ul>
        </section>
    );
}

export default Address;
