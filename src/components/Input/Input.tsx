import React, { useState } from "react";

type Props = {
    placeholder: string;
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    type: string;
    minLength: number;
};

function Input({
    placeholder,
    searchQuery,
    setSearchQuery,
    type,
    minLength,
}: Props) {
    const [inputError, setInputError] = useState(false);

    const handleChange = (value: string) => {
        if (value.length <= minLength) {
            setInputError(true);
        } else {
            setInputError(false);
        }
        setSearchQuery(value);
    };

    return (
        <input
            type={type}
            value={searchQuery}
            placeholder={placeholder}
            className={`input ${inputError && "input_type_error"}`}
            onChange={(event) => handleChange(event.target.value)}
        ></input>
    );
}

export default Input;
