import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
    id: number;
    icon: string;
    label: string;
    url: string;
    children?: Props[];
};

function MenuItem({ icon, label, url, children }: Props) {
    const location: string = useLocation().pathname;

    const [menuOpened, setMenuOpened] = useState(false);

    const isActive: boolean = location === url;

    const handleToggleMenu = () => {
        setMenuOpened(!menuOpened);
    };

    if (children !== undefined) {
        return (
            <>
                <div className="menu-item" onClick={handleToggleMenu}>
                    <i className={`icon icon__menu icon_type_${icon}`} />
                    <p className="menu-item__text">{label}</p>
                    <i
                        className={`'icon icon__menu icon_type_chevron  ${
                            menuOpened && "icon_type_opened"
                        }`}
                    />
                </div>

                <div
                    className={`${
                        menuOpened && "menu-item__children_type_opened"
                    } menu-item__children`}
                >
                    {children.map((child) => (
                        <MenuItem
                            id={child.id}
                            key={child.id}
                            icon={child.icon}
                            label={child.label}
                            url={child.url}
                        />
                    ))}
                </div>
            </>
        );
    }

    return (
        <>
            <Link
                to={url}
                className={`menu-item ${isActive && "menu-item_type_active"}`}
            >
                <i className={`icon icon__menu icon_type_${icon}`} />
                <p className="menu-item__text">{label}</p>
            </Link>
        </>
    );
}

export default MenuItem;
