import React from "react";

type Props = {
    text: string;
};

function Button({ text }: Props) {
    return (
        <button className="button">
            <i className="icon icon_type_search-button"></i>
            {text}
        </button>
    );
}

export default Button;
