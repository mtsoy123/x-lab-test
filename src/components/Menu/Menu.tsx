import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import menuItems from "../../utils/const";

type Props = {};

function Menu({}: Props) {
    const [isHidden, setIsHidden] = useState(false);

    const handleClick = () => {
        setIsHidden(!isHidden);
    };

    return (
        <nav className={`menu ${isHidden && "menu__wrapper_type_hidden"}`}>
            <button
                className={`menu__button ${
                    isHidden && "menu__button_type_hidden"
                }`}
                onClick={handleClick}
            />

            <h2 className={`menu__header ${isHidden && "menu_type_hidden"}`}>
                Меню
            </h2>
            <div
                className={`menu__items-wrapper ${
                    isHidden && "menu_type_hidden"
                }`}
            >
                {menuItems.map((item) => {
                    return (
                        <MenuItem
                            id={item.id}
                            key={item.id}
                            label={item.label}
                            url={item.url}
                            icon={item.icon}
                            children={item.children}
                        />
                    );
                })}
            </div>
        </nav>
    );
}

export default Menu;
