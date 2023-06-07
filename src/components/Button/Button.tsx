import React from "react";

type Props = { text: string };

function Button({ text }: Props) {
    // return <button className="button">{text}</button>;
    return (
        <button className="button">
            <i className="icon icon_type_search-button"></i>Поиск
        </button>
    );
}

export default Button;
