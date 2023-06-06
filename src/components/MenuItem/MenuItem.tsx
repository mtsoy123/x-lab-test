import React, { useState } from "react";

type Props = {
    id: number;
    icon: string;
    label: string;
    url: string;
    children?: Props[];
};

function MenuItem({ icon, label, url, children }: Props) {
    const [menuOpened, setMenuOpened] = useState(false);

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
            <a className="menu-item" href="#">
                <i className={`icon icon__menu icon_type_${icon}`} />
                <p className="menu-item__text">{label}</p>
            </a>
        </>
    );
}

export default MenuItem;
