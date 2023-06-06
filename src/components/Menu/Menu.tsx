import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import menuItems from "../../utils/const";

type Props = {};

function Menu({}: Props) {
    return (
        <nav className="menu">
            <h2 className="menu__header">Меню</h2>
            <div className="menu__items-wrapper">
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
