interface LootItem {
    id: string
    image: string
    drop: string
    about: string
    drop_chance: string
    cost: string
}

export const moleLoot: LootItem[] = [
    {
        id: 'id 37',
        image: '37.png',
        drop: 'Кирка крота-рудокопа',
        about: 'Лут',
        drop_chance: '5,00%',
        cost: '20',
    },

    {
        id: 'id 36',
        image: '36.png',
        drop: 'Серебряная руда',
        about: 'Лут',
        drop_chance: '2,00%',
        cost: '27',
    },

    {
        id: 'id 13',
        image: '13.png',
        drop: 'Бараньи ребрышки',
        about: 'Восстанавливает 30 выносливости',
        drop_chance: '2.00%',
        cost: '110',
    },

    {
        id: 'id 14',
        image: '14.png',
        drop: 'Отборный кусок мяса',
        about: 'Восстанавливает 35 выносливости',
        drop_chance: '2.00%',
        cost: '130',
    },

    {
        id: 'id 35',
        image: '35.png',
        drop: 'Питание феи',
        about: 'Восстанавливает 10 жизни феи',
        drop_chance: '0.2%',
        cost: '1000',
    },

    {
        id: 'id 15',
        image: '15.png',
        drop: 'Осколки моего прошлого',
        about: 'Квестовая вешь',
        drop_chance: '0.02%',
        cost: '50000',
    },

    {
        id: 'id 30',
        image: '30.png',
        drop: 'Осколки моего прошлого',
        about: 'Квестовая вешь',
        drop_chance: '0.02%',
        cost: '50000',
    },

    {
        id: 'id 32',
        image: '32.png',
        drop: 'Осколки моего прошлого',
        about: 'Квестовая вешь',
        drop_chance: '0.02%',
        cost: '50000',
    },

    {
        id: 'id 38',
        image: '38.png',
        drop: 'Камень гильдий',
        about: 'Квестовая вещь',
        drop_chance: '0,001%',
        cost: '100000',
    },
]
