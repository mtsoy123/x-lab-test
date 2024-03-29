interface MenuItem {
    id: number;
    label: string;
    url: string;
    icon: string;
    children?: MenuItem[];
}

const menuItems: MenuItem[] = [
    {
        id: 1,
        label: "Главная",
        url: "/",
        icon: "main",
    },
    {
        id: 2,
        label: "Поиск адресов",
        url: "/address",
        icon: "search",
    },
    {
        id: 3,
        label: "Таблица",
        url: "/foo-bar1",
        icon: "tables",
    },
    {
        id: 4,
        label: "Календарь",
        url: "/foo-bar2",
        icon: "calendar",
    },
    {
        id: 5,
        label: "Карты",
        url: "/foo-bar3",
        icon: "maps",
    },
    {
        id: 6,
        label: "Виджеты",
        url: "/foo-bar4",
        icon: "widget",
    },
    {
        id: 7,
        label: "Настройки",
        url: "/foo-bar",
        icon: "settings",
        children: [
            {
                id: 8,
                label: "Настройки профиля",
                url: "/foo-bar5",
                icon: "profile",
            },
            {
                id: 9,
                label: "Управление финансами",
                url: "/foo-bar6",
                icon: "finances",
            },
        ],
    },
    {
        id: 10,
        label: "Выход",
        url: "/foo-bar7",
        icon: "exit",
    },
];

export default menuItems;
