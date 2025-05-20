import {
    Avatar,
    Box,
    Paper,
    styled,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import img1 from 'entities/lootAndMobsBase/dbLoot//1.png'
import img2 from 'entities/lootAndMobsBase/dbLoot//2.png'
import img3 from 'entities/lootAndMobsBase/dbLoot//3.png'
import img4 from 'entities/lootAndMobsBase/dbLoot//4.png'
import img5 from 'entities/lootAndMobsBase/dbLoot//5.png'
import img6 from 'entities/lootAndMobsBase/dbLoot//6.png'
import img7 from 'entities/lootAndMobsBase/dbLoot//7.png'
import img8 from 'entities/lootAndMobsBase/dbLoot//8.png'
import img9 from 'entities/lootAndMobsBase/dbLoot//9.png'
import img10 from 'entities/lootAndMobsBase/dbLoot//10.png'
import img11 from 'entities/lootAndMobsBase/dbLoot//11.png'
import img12 from 'entities/lootAndMobsBase/dbLoot//12.png'
import img13 from 'entities/lootAndMobsBase/dbLoot//13.png'
import img14 from 'entities/lootAndMobsBase/dbLoot//14.png'
import img15 from 'entities/lootAndMobsBase/dbLoot//15.png'
import img16 from 'entities/lootAndMobsBase/dbLoot//16.png'
import img17 from 'entities/lootAndMobsBase/dbLoot//17.png'
import img18 from 'entities/lootAndMobsBase/dbLoot//18.png'
import img19 from 'entities/lootAndMobsBase/dbLoot//19.png'
import img20 from 'entities/lootAndMobsBase/dbLoot//20.png'
// import img21 from 'shared/ui/lootAndMobs/dbLoot//21.png'
import img22 from 'entities/lootAndMobsBase/dbLoot//22.png'
// import img23 from 'shared/ui/lootAndMobs/dbLoot//23.png'
import img24 from 'entities/lootAndMobsBase/dbLoot//24.png'
import img25 from 'entities/lootAndMobsBase/dbLoot//25.png'
import img26 from 'entities/lootAndMobsBase/dbLoot//26.png'
import img27 from 'entities/lootAndMobsBase/dbLoot//27.png'
import img28 from 'entities/lootAndMobsBase/dbLoot//28.png'
import img29 from 'entities/lootAndMobsBase/dbLoot//29.png'
import img30 from 'entities/lootAndMobsBase/dbLoot//30.png'
import img31 from 'entities/lootAndMobsBase/dbLoot//31.png'
import img32 from 'entities/lootAndMobsBase/dbLoot//32.png'
// import img33 from 'shared/ui/lootAndMobs/dbLoot//33.png'
import img34 from 'entities/lootAndMobsBase/dbLoot//34.png'
import img35 from 'entities/lootAndMobsBase/dbLoot//35.png'
import img36 from 'entities/lootAndMobsBase/dbLoot//36.png'
import img37 from 'entities/lootAndMobsBase/dbLoot//37.png'
import img38 from 'entities/lootAndMobsBase/dbLoot//38.png'
import img39 from 'entities/lootAndMobsBase/dbLoot//39.png'
import img40 from 'entities/lootAndMobsBase/dbLoot//40.png'
import img41 from 'entities/lootAndMobsBase/dbLoot//41.png'
import img42 from 'entities/lootAndMobsBase/dbLoot//42.png'
import bat from 'entities/lootAndMobsBase/dbMob/bat.png'
import brain from 'entities/lootAndMobsBase/dbMob/brain.png'
import mole from 'entities/lootAndMobsBase/dbMob/mole.png'

import { batLoot } from '../dbLoot/batLoot'
import { brainLoot } from '../dbLoot/brainLoot'
import { moleLoot } from '../dbLoot/moleLoot'

const imageBrainMap: Record<string, string> = {
    '1.png': img1,
    '2.png': img2,
    '3.png': img3,
    '4.png': img4,
    '5.png': img5,
    '6.png': img6,
    '7.png': img7,
    '8.png': img8,
    '9.png': img9,
    '10.png': img10,
    '11.png': img11,
    '12.png': img12,
    '15.png': img15,
    '16.png': img16,
    '17.png': img17,
    '18.png': img18,
    '19.png': img19,
    '20.png': img20,
    '22.png': img22,
    '24.png': img24,
    '25.png': img25,
    '26.png': img26,
    '27.png': img27,
    '28.png': img28,
    '29.png': img29,
    '30.png': img30,
    '31.png': img31,
    '32.png': img32,
    '39.png': img39,
    '40.png': img40,
    '41.png': img41,
    '42.png': img42,
}

const imageBatMap: Record<string, string> = {
    '13.png': img13,
    '14.png': img14,
    '15.png': img15,
    '30.png': img30,
    '32.png': img32,
    '34.png': img34,
    '35.png': img35,
}

const imageMoleMap: Record<string, string> = {
    '37.png': img37,
    '36.png': img36,
    '13.png': img13,
    '14.png': img14,
    '35.png': img35,
    '15.png': img15,
    '30.png': img30,
    '32.png': img32,
    '38.png': img38,
}

const tableBrainData = [
    { id: 1, parameter: 'Жизнь', number: 100000 },
    { id: 2, parameter: 'Атака', number: 5 },
    { id: 3, parameter: 'Защита', number: 0 },
    { id: 4, parameter: 'Уклонение', number: 90 },
    { id: 5, parameter: 'Опыт', number: 0 },
]

const tableBatData = [
    { id: 1, parameter: 'Жизнь', number: 100 },
    { id: 2, parameter: 'Атака', number: 2 },
    { id: 3, parameter: 'Защита', number: 1 },
    { id: 4, parameter: 'Уклонение', number: 10 },
    { id: 5, parameter: 'Опыт', number: 10 },
]

const tableMoleData = [
    { id: 1, parameter: 'Жизнь', number: 200 },
    { id: 2, parameter: 'Атака', number: 2 },
    { id: 3, parameter: 'Защита', number: 2 },
    { id: 4, parameter: 'Уклонение', number: 10 },
    { id: 5, parameter: 'Опыт', number: 15 },
]

const AdaptiveTableCell = styled(TableCell)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        padding: '28px',
        fontSize: '1.2rem',
        lineHeight: '1.2',
        // '&:first-of-type': { display: 'none' }, // Скрываем ID
    },
    color: 'white',
    borderColor: 'rgba(255,255,255,0.2)',
}))

export const LootAndMobsBase = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box
            sx={{
                margin: { xs: 0, md: 0 },
                display: 'flex',
                gap: 0, // Отступ между таблицами
                flexDirection: { xs: 'column', md: 'column' },
                mt: { xs: '30px', md: '30px' },
                // Адаптивность
            }}>
            {/* Таблица 1 */}

            <Box sx={{ flex: 0 }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: {
                            xs: `0 ${theme.spacing(1)}`,
                            sm: `0 ${theme.spacing(3)}`,
                        },
                        width: {
                            xs: `calc(100% - ${theme.spacing(2)})`,
                            sm: `calc(100% - ${theme.spacing(6)})`,
                        },
                        background:
                            'linear-gradient(to right, rgb(96, 99, 119), rgb(59, 54, 70))',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.2)', // Добавляем общую границу
                        // '& table': {
                        //     minWidth: isMobile ? '100%' : '100%',
                        //     tableLayout: 'fixed',
                        //     borderCollapse: 'collapse', // Важно для единого стиля границ
                        // },
                        boxShadow: 'none',
                        overflow: 'auto',
                        maxWidth: '100vw',
                        transform: isMobile ? 'scale(1)' : 'none',
                        transformOrigin: 'top left',
                        // Убираем внутренние отступы для экономии места
                        padding: isMobile ? 0 : 'inherit',
                        // Компенсируем масштаб через расчет ширины
                        // width: isMobile ? '100%' : '100%',
                        '& table': {
                            minWidth: isMobile ? '100%' : '100%',
                            borderCollapse: 'collapse', // Важно для единого стиля границ
                        },
                    }}>
                    <Table
                        aria-label='Second table'
                        size={isMobile ? 'small' : 'medium'}
                        sx={{
                            '& .MuiTableRow-root': {
                                // Границы для строк
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                            },
                            '& .MuiTableCell-root': {
                                fontSize: isMobile ? '0.4rem' : '1.5rem',
                                padding: isMobile ? '10px' : '16px',
                                lineHeight: 1.2,
                                borderRight: '1px solid rgba(255,255,255,0.2)',
                            },
                        }}>
                        <TableHead>
                            <TableRow>
                                <AdaptiveTableCell sx={{ width: '7%' }}>
                                    <Avatar
                                        src={brain}
                                        // alt={Мозг}
                                        sx={{
                                            width: isMobile ? 42 : 58,
                                            height: isMobile ? 42 : 58,
                                        }}
                                    />
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'left', // Выравнивание по центру
                                        verticalAlign: 'middle', // Вертикальное выравнивание
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '1.5rem', // Размер шрифта
                                        color: '#ffff00', // Цвет текста
                                        // fontWeight: 'bold', // Жирный шрифт (опционально)
                                        // Переопределяем общие стили ячеек для конкретно этой ячейки
                                        borderRight:
                                            '1px solid rgba(255,255,255,0.2) !important',
                                        padding: isMobile ? '10px' : '16px',
                                    }}>
                                    Мозг
                                </AdaptiveTableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Box>

            <Box sx={{ flex: 0 }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: {
                            xs: `0 ${theme.spacing(1)}`,
                            sm: `0 ${theme.spacing(3)}`,
                        },
                        width: {
                            xs: `calc(100% - ${theme.spacing(2)})`,
                            sm: `calc(100% - ${theme.spacing(6)})`,
                        },
                        background:
                            'linear-gradient(to right, rgb(96, 99, 119), rgb(59, 54, 70))',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.2)', // Добавляем общую границу
                        // '& table': {
                        //     minWidth: isMobile ? '100%' : '100%',
                        //     tableLayout: 'fixed',
                        //     borderCollapse: 'collapse', // Важно для единого стиля границ
                        // },
                        boxShadow: 'none',
                        overflow: 'auto',
                        maxWidth: '100vw',
                        transform: isMobile ? 'scale(1)' : 'none',
                        transformOrigin: 'top left',
                        // Убираем внутренние отступы для экономии места
                        padding: isMobile ? 0 : 'inherit',
                        // Компенсируем масштаб через расчет ширины
                        // width: isMobile ? '100%' : '100%',
                        '& table': {
                            minWidth: isMobile ? '100%' : '100%',
                            borderCollapse: 'collapse', // Важно для единого стиля границ
                        },
                    }}>
                    <Table
                        aria-label='First table'
                        size={isMobile ? 'small' : 'medium'}
                        sx={{
                            '& .MuiTableRow-root': {
                                // Границы для строк
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                            },
                            '& .MuiTableCell-root': {
                                fontSize: isMobile ? '0.4rem' : '1.5rem',
                                padding: isMobile ? '10px' : '16px',
                                lineHeight: 1.2,
                                borderRight: '1px solid rgba(255,255,255,0.2)',
                            },
                        }}>
                        <TableHead>
                            <TableRow>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '7%', // В процентах
                                    }}>
                                    Уровень
                                </AdaptiveTableCell>
                                <AdaptiveTableCell>100</AdaptiveTableCell>
                                {/* <TableCell>Age</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableBrainData.map((row) => (
                                <TableRow key={row.id}>
                                    <AdaptiveTableCell>
                                        {row.parameter}
                                    </AdaptiveTableCell>
                                    <AdaptiveTableCell>
                                        {row.number}
                                    </AdaptiveTableCell>
                                    {/* <TableCell>{row.age}</TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            <Box sx={{ flex: 0 }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: {
                            xs: `0 ${theme.spacing(1)}`,
                            sm: `0 ${theme.spacing(3)}`,
                        },
                        width: {
                            xs: `calc(100% - ${theme.spacing(2)})`,
                            sm: `calc(100% - ${theme.spacing(6)})`,
                        },
                        background:
                            'linear-gradient(to right, rgb(96, 99, 119), rgb(59, 54, 70))',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.2)', // Добавляем общую границу
                        // '& table': {
                        //     minWidth: isMobile ? '100%' : '100%',
                        //     tableLayout: 'fixed',
                        //     borderCollapse: 'collapse', // Важно для единого стиля границ
                        // },
                        boxShadow: 'none',
                        overflow: 'auto',
                        maxWidth: '100vw',
                        transform: isMobile ? 'scale(1)' : 'none',
                        transformOrigin: 'top left',
                        // Убираем внутренние отступы для экономии места
                        padding: isMobile ? 0 : 'inherit',
                        // Компенсируем масштаб через расчет ширины
                        // width: isMobile ? '100%' : '100%',
                        '& table': {
                            minWidth: isMobile ? '100%' : '100%',
                            borderCollapse: 'collapse', // Важно для единого стиля границ
                        },
                    }}>
                    <Table
                        aria-label='Second table'
                        size={isMobile ? 'small' : 'medium'}
                        sx={{
                            '& .MuiTableRow-root': {
                                // Границы для строк
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                            },
                            '& .MuiTableCell-root': {
                                fontSize: isMobile ? '0.4rem' : '1.5rem',
                                padding: isMobile ? '10px' : '16px',
                                lineHeight: 1.2,
                                borderRight: '1px solid rgba(255,255,255,0.2)',
                            },
                        }}>
                        <TableHead>
                            <TableRow>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center', // Выравнивание по центру
                                        verticalAlign: 'middle', // Вертикальное выравнивание
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem', // Размер шрифта
                                        color: '#ffff00', // Цвет текста
                                        // fontWeight: 'bold', // Жирный шрифт (опционально)
                                        // Переопределяем общие стили ячеек для конкретно этой ячейки
                                        borderRight:
                                            '1px solid rgba(255,255,255,0.2) !important',
                                        padding: isMobile ? '10px' : '16px',
                                    }}>
                                    Локация (место обитания)
                                </AdaptiveTableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Box>

            <Box sx={{ flex: 0 }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: {
                            xs: `0 ${theme.spacing(1)}`,
                            sm: `0 ${theme.spacing(3)}`,
                        },
                        width: {
                            xs: `calc(100% - ${theme.spacing(2)})`,
                            sm: `calc(100% - ${theme.spacing(6)})`,
                        },
                        background:
                            'linear-gradient(to right, rgb(96, 99, 119), rgb(59, 54, 70))',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.2)', // Добавляем общую границу
                        // '& table': {
                        //     minWidth: isMobile ? '100%' : '100%',
                        //     tableLayout: 'fixed',
                        //     borderCollapse: 'collapse', // Важно для единого стиля границ
                        // },
                        boxShadow: 'none',
                        overflow: 'auto',
                        maxWidth: '100vw',
                        transform: isMobile ? 'scale(1)' : 'none',
                        transformOrigin: 'top left',
                        // Убираем внутренние отступы для экономии места
                        padding: isMobile ? 0 : 'inherit',
                        // Компенсируем масштаб через расчет ширины
                        // width: isMobile ? '100%' : '100%',
                        '& table': {
                            minWidth: isMobile ? '100%' : '100%',
                            borderCollapse: 'collapse', // Важно для единого стиля границ
                        },
                    }}>
                    <Table
                        aria-label='First table'
                        size={isMobile ? 'small' : 'medium'}
                        sx={{
                            '& .MuiTableRow-root': {
                                // Границы для строк
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                            },
                            '& .MuiTableCell-root': {
                                fontSize: isMobile ? '0.4rem' : '1.5rem',
                                padding: isMobile ? '10px' : '16px',
                                lineHeight: 1.2,
                                borderRight: '1px solid rgba(255,255,255,0.2)',
                            },
                            textAlign: 'center',
                        }}>
                        <TableHead>
                            <TableRow>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center', // Выравнивание по центру
                                        // verticalAlign: 'middle', // Вертикальное выравнивание
                                        // fontSize: isMobile ? '7rem' : '7.2rem', // Размер шрифта
                                        // color: '#ffff00', // Цвет текста
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem',
                                        // // fontWeight: 'bold', // Жирный шрифт (опционально)
                                        // // Переопределяем общие стили ячеек для конкретно этой ячейки
                                        // borderRight:
                                        //     '1px solid rgba(255,255,255,0.2) !important',
                                        // padding: isMobile ? '10px' : '16px',
                                    }}>
                                    Карта
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center', // Выравнивание по центру
                                        // verticalAlign: 'middle', // Вертикальное выравнивание
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem', // Размер шрифта
                                        // color: '#ffff00', // Цвет текста
                                        // // fontWeight: 'bold', // Жирный шрифт (опционально)
                                        // // Переопределяем общие стили ячеек для конкретно этой ячейки
                                        // borderRight:
                                        //     '1px solid rgba(255,255,255,0.2) !important',
                                        // padding: isMobile ? '10px' : '16px',
                                    }}>
                                    Количество
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center', // Выравнивание по центру
                                        // verticalAlign: 'middle', // Вертикальное выравнивание
                                        // fontSize: isMobile ? '7rem' : '7.2rem', // Размер шрифта
                                        // color: '#ffff00', // Цвет текста
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem',
                                        // // fontWeight: 'bold', // Жирный шрифт (опционально)
                                        // // Переопределяем общие стили ячеек для конкретно этой ячейки
                                        // borderRight:
                                        //     '1px solid rgba(255,255,255,0.2) !important',
                                        // padding: isMobile ? '10px' : '16px',
                                    }}>
                                    Восстановление
                                </AdaptiveTableCell>
                                {/* <TableCell>Age</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {table1Data.map((row) => (
                                <TableRow key={row.id}> */}
                            <TableRow>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center',
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem', // Выравнивание по центру
                                    }}>
                                    Вход в шахты
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center',
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem', // Выравнивание по центру
                                    }}>
                                    1
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center',
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem', // Выравнивание по центру
                                    }}>
                                    1 час
                                </AdaptiveTableCell>
                                {/* <TableCell>{row.age}</TableCell> */}
                                {/* </TableRow>
                            ))} */}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ flex: 0 }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: {
                            xs: `0 ${theme.spacing(1)}`,
                            sm: `0 ${theme.spacing(3)}`,
                        },
                        width: {
                            xs: `calc(100% - ${theme.spacing(2)})`,
                            sm: `calc(100% - ${theme.spacing(6)})`,
                        },
                        background:
                            'linear-gradient(to right, rgb(96, 99, 119), rgb(59, 54, 70))',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.2)', // Добавляем общую границу
                        // '& table': {
                        //     minWidth: isMobile ? '100%' : '100%',
                        //     tableLayout: 'fixed',
                        //     borderCollapse: 'collapse', // Важно для единого стиля границ
                        // },
                        boxShadow: 'none',
                        overflow: 'auto',
                        maxWidth: '100vw',
                        transform: isMobile ? 'scale(1)' : 'none',
                        transformOrigin: 'top left',
                        // Убираем внутренние отступы для экономии места
                        padding: isMobile ? 0 : 'inherit',
                        // Компенсируем масштаб через расчет ширины
                        // width: isMobile ? '100%' : '100%',
                        '& table': {
                            minWidth: isMobile ? '100%' : '100%',
                            borderCollapse: 'collapse', // Важно для единого стиля границ
                        },
                    }}>
                    <Table
                        aria-label='Second table'
                        size={isMobile ? 'small' : 'medium'}
                        sx={{
                            '& .MuiTableRow-root': {
                                // Границы для строк
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                            },
                            '& .MuiTableCell-root': {
                                fontSize: isMobile ? '0.4rem' : '1.5rem',
                                padding: isMobile ? '10px' : '16px',
                                lineHeight: 1.2,
                                borderRight: '1px solid rgba(255,255,255,0.2)',
                            },
                        }}>
                        <TableHead>
                            <TableRow>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center', // Выравнивание по центру
                                        verticalAlign: 'middle', // Вертикальное выравнивание
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem', // Размер шрифта
                                        color: '#ffff00', // Цвет текста
                                        // fontWeight: 'bold', // Жирный шрифт (опционально)
                                        // Переопределяем общие стили ячеек для конкретно этой ячейки
                                        // borderRight:
                                        //     '1px solid rgba(255,255,255,0.2) !important',
                                        // padding: isMobile ? '10px' : '16px',
                                    }}>
                                    {/* поменять все TableCell на Adaptive Table Cell */}
                                    Дроп-лист
                                </AdaptiveTableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    overflowX: 'hidden', // Блокируем горизонтальный скролл
                    width: '100%', // Занимаем всю доступную ширину
                }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: {
                            xs: `0 ${theme.spacing(1)}`,
                            sm: `0 ${theme.spacing(3)}`,
                        },
                        width: {
                            xs: `calc(100% - ${theme.spacing(2)})`,
                            sm: `calc(100% - ${theme.spacing(6)})`,
                        },
                        background:
                            'linear-gradient(to right, rgb(96, 99, 119), rgb(59, 54, 70))',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.2)', // Добавляем общую границу
                        // '& table': {
                        //     minWidth: isMobile ? '100%' : '100%',
                        //     tableLayout: 'fixed',
                        //     borderCollapse: 'collapse', // Важно для единого стиля границ
                        // },
                        boxShadow: 'none',
                        overflowX: 'auto',
                        maxWidth: '100vw',
                        transform: isMobile ? 'scale(1)' : 'none',
                        transformOrigin: 'top left',
                        // Убираем внутренние отступы для экономии места
                        padding: isMobile ? 0 : 'inherit',
                        // Компенсируем масштаб через расчет ширины
                        // width: isMobile ? '100%' : '100%',
                        '& table': {
                            minWidth: isMobile ? '100%' : '100%',
                            borderCollapse: 'collapse', // Важно для единого стиля границ
                        },
                    }}>
                    <Table
                        aria-label='Third table'
                        size={isMobile ? 'small' : 'medium'}
                        sx={{
                            '& .MuiTableRow-root': {
                                // Границы для строк
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                            },
                            '& .MuiTableCell-root': {
                                fontSize: isMobile ? '0.4rem' : '1.5rem',
                                padding: isMobile ? '10px' : '16px',
                                lineHeight: 1.2,
                                borderRight: '1px solid rgba(255,255,255,0.2)',
                            },
                            width: '100%',
                            minWidth: 'unset',
                            tableLayout: 'fixed',
                        }}>
                        <TableHead>
                            {/* <TableRow>
                        <AdaptiveTableCell>Дроп-лист</AdaptiveTableCell>
                    </TableRow> */}
                            <TableRow>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '13%',
                                        fontSize: isMobile
                                            ? '0.25rem'
                                            : '2.5rem', // В процентах
                                    }}>
                                    ID
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '19%',
                                        fontSize: isMobile
                                            ? '0.25rem'
                                            : '2.5rem', // В процентах
                                    }}>
                                    Изображение
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '20%',
                                        fontSize: isMobile
                                            ? '0.25rem'
                                            : '2.5rem', // В процентах
                                    }}>
                                    Название
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '24%',
                                        fontSize: isMobile
                                            ? '0.25rem'
                                            : '2.5rem', // В процентах
                                    }}>
                                    Описание
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '13%',
                                        fontSize: isMobile
                                            ? '0.25rem'
                                            : '2.5rem', // В процентах
                                    }}>
                                    Шанс
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '11%',
                                        fontSize: isMobile
                                            ? '0.25rem'
                                            : '2.5rem', // В процентах
                                    }}>
                                    Цена
                                </AdaptiveTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {brainLoot.map((item) => (
                                <TableRow key={item.id}>
                                    <AdaptiveTableCell
                                        sx={{
                                            fontSize: isMobile
                                                ? '0.25rem'
                                                : '2.5rem', // В процентах
                                        }}>
                                        {item.id}
                                    </AdaptiveTableCell>
                                    <AdaptiveTableCell>
                                        <Avatar
                                            src={imageBrainMap[item.image]}
                                            alt={item.drop}
                                            sx={{
                                                width: isMobile ? 32 : 48,
                                                height: isMobile ? 32 : 48,
                                            }}
                                        />
                                    </AdaptiveTableCell>
                                    <AdaptiveTableCell
                                        sx={{
                                            fontSize: isMobile
                                                ? '0.25rem'
                                                : '2.5rem', // В процентах
                                        }}>
                                        {item.drop}
                                    </AdaptiveTableCell>
                                    <AdaptiveTableCell
                                        sx={{
                                            fontSize: isMobile
                                                ? '0.25rem'
                                                : '2.5rem', // В процентах
                                        }}>
                                        {item.about}
                                    </AdaptiveTableCell>
                                    <AdaptiveTableCell
                                        sx={{
                                            fontSize: isMobile
                                                ? '0.25rem'
                                                : '2.5rem', // В процентах
                                        }}>
                                        {item.drop_chance}
                                    </AdaptiveTableCell>
                                    <AdaptiveTableCell
                                        sx={{
                                            fontSize: isMobile
                                                ? '0.25rem'
                                                : '2.5rem', // В процентах
                                        }}>
                                        {item.cost}
                                    </AdaptiveTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            {/* отсюда летучая мышь */}

            <Box sx={{ flex: 0 }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: {
                            xs: `0 ${theme.spacing(1)}`,
                            sm: `0 ${theme.spacing(3)}`,
                        },
                        width: {
                            xs: `calc(100% - ${theme.spacing(2)})`,
                            sm: `calc(100% - ${theme.spacing(6)})`,
                        },
                        background:
                            'linear-gradient(to right, rgb(96, 99, 119), rgb(59, 54, 70))',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.2)', // Добавляем общую границу
                        // '& table': {
                        //     minWidth: isMobile ? '100%' : '100%',
                        //     tableLayout: 'fixed',
                        //     borderCollapse: 'collapse', // Важно для единого стиля границ
                        // },
                        boxShadow: 'none',
                        overflow: 'auto',
                        maxWidth: '100vw',
                        transform: isMobile ? 'scale(1)' : 'none',
                        transformOrigin: 'top left',
                        // Убираем внутренние отступы для экономии места
                        padding: isMobile ? 0 : 'inherit',
                        // Компенсируем масштаб через расчет ширины
                        // width: isMobile ? '100%' : '100%',
                        '& table': {
                            minWidth: isMobile ? '100%' : '100%',
                            borderCollapse: 'collapse', // Важно для единого стиля границ
                        },
                    }}>
                    <Table
                        aria-label='Second table'
                        size={isMobile ? 'small' : 'medium'}
                        sx={{
                            '& .MuiTableRow-root': {
                                // Границы для строк
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                            },
                            '& .MuiTableCell-root': {
                                fontSize: isMobile ? '0.4rem' : '1.5rem',
                                padding: isMobile ? '10px' : '16px',
                                lineHeight: 1.2,
                                borderRight: '1px solid rgba(255,255,255,0.2)',
                            },
                        }}>
                        <TableHead>
                            <TableRow>
                                <AdaptiveTableCell sx={{ width: '7%' }}>
                                    <Avatar
                                        src={bat}
                                        // alt={Мозг}
                                        sx={{
                                            width: isMobile ? 42 : 58,
                                            height: isMobile ? 42 : 58,
                                        }}
                                    />
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'left', // Выравнивание по центру
                                        verticalAlign: 'middle', // Вертикальное выравнивание
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '1.5rem', // Размер шрифта
                                        color: '#ffff00', // Цвет текста
                                        // fontWeight: 'bold', // Жирный шрифт (опционально)
                                        // Переопределяем общие стили ячеек для конкретно этой ячейки
                                        borderRight:
                                            '1px solid rgba(255,255,255,0.2) !important',
                                        padding: isMobile ? '10px' : '16px',
                                    }}>
                                    Серая летучая мышь
                                </AdaptiveTableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Box>

            <Box sx={{ flex: 0 }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: {
                            xs: `0 ${theme.spacing(1)}`,
                            sm: `0 ${theme.spacing(3)}`,
                        },
                        width: {
                            xs: `calc(100% - ${theme.spacing(2)})`,
                            sm: `calc(100% - ${theme.spacing(6)})`,
                        },
                        background:
                            'linear-gradient(to right, rgb(96, 99, 119), rgb(59, 54, 70))',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.2)', // Добавляем общую границу
                        // '& table': {
                        //     minWidth: isMobile ? '100%' : '100%',
                        //     tableLayout: 'fixed',
                        //     borderCollapse: 'collapse', // Важно для единого стиля границ
                        // },
                        boxShadow: 'none',
                        overflow: 'auto',
                        maxWidth: '100vw',
                        transform: isMobile ? 'scale(1)' : 'none',
                        transformOrigin: 'top left',
                        // Убираем внутренние отступы для экономии места
                        padding: isMobile ? 0 : 'inherit',
                        // Компенсируем масштаб через расчет ширины
                        // width: isMobile ? '100%' : '100%',
                        '& table': {
                            minWidth: isMobile ? '100%' : '100%',
                            borderCollapse: 'collapse', // Важно для единого стиля границ
                        },
                    }}>
                    <Table
                        aria-label='First table'
                        size={isMobile ? 'small' : 'medium'}
                        sx={{
                            '& .MuiTableRow-root': {
                                // Границы для строк
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                            },
                            '& .MuiTableCell-root': {
                                fontSize: isMobile ? '0.4rem' : '1.5rem',
                                padding: isMobile ? '10px' : '16px',
                                lineHeight: 1.2,
                                borderRight: '1px solid rgba(255,255,255,0.2)',
                            },
                        }}>
                        <TableHead>
                            <TableRow>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '7%', // В процентах
                                    }}>
                                    Уровень
                                </AdaptiveTableCell>
                                <AdaptiveTableCell>1</AdaptiveTableCell>
                                {/* <TableCell>Age</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableBatData.map((row) => (
                                <TableRow key={row.id}>
                                    <AdaptiveTableCell>
                                        {row.parameter}
                                    </AdaptiveTableCell>
                                    <AdaptiveTableCell>
                                        {row.number}
                                    </AdaptiveTableCell>
                                    {/* <TableCell>{row.age}</TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            <Box sx={{ flex: 0 }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: {
                            xs: `0 ${theme.spacing(1)}`,
                            sm: `0 ${theme.spacing(3)}`,
                        },
                        width: {
                            xs: `calc(100% - ${theme.spacing(2)})`,
                            sm: `calc(100% - ${theme.spacing(6)})`,
                        },
                        background:
                            'linear-gradient(to right, rgb(96, 99, 119), rgb(59, 54, 70))',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.2)', // Добавляем общую границу
                        // '& table': {
                        //     minWidth: isMobile ? '100%' : '100%',
                        //     tableLayout: 'fixed',
                        //     borderCollapse: 'collapse', // Важно для единого стиля границ
                        // },
                        boxShadow: 'none',
                        overflow: 'auto',
                        maxWidth: '100vw',
                        transform: isMobile ? 'scale(1)' : 'none',
                        transformOrigin: 'top left',
                        // Убираем внутренние отступы для экономии места
                        padding: isMobile ? 0 : 'inherit',
                        // Компенсируем масштаб через расчет ширины
                        // width: isMobile ? '100%' : '100%',
                        '& table': {
                            minWidth: isMobile ? '100%' : '100%',
                            borderCollapse: 'collapse', // Важно для единого стиля границ
                        },
                    }}>
                    <Table
                        aria-label='Second table'
                        size={isMobile ? 'small' : 'medium'}
                        sx={{
                            '& .MuiTableRow-root': {
                                // Границы для строк
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                            },
                            '& .MuiTableCell-root': {
                                fontSize: isMobile ? '0.4rem' : '1.5rem',
                                padding: isMobile ? '10px' : '16px',
                                lineHeight: 1.2,
                                borderRight: '1px solid rgba(255,255,255,0.2)',
                            },
                        }}>
                        <TableHead>
                            <TableRow>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center', // Выравнивание по центру
                                        verticalAlign: 'middle', // Вертикальное выравнивание
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem', // Размер шрифта
                                        color: '#ffff00', // Цвет текста
                                        // fontWeight: 'bold', // Жирный шрифт (опционально)
                                        // Переопределяем общие стили ячеек для конкретно этой ячейки
                                        borderRight:
                                            '1px solid rgba(255,255,255,0.2) !important',
                                        padding: isMobile ? '10px' : '16px',
                                    }}>
                                    Локация (место обитания)
                                </AdaptiveTableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Box>

            <Box sx={{ flex: 0 }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: {
                            xs: `0 ${theme.spacing(1)}`,
                            sm: `0 ${theme.spacing(3)}`,
                        },
                        width: {
                            xs: `calc(100% - ${theme.spacing(2)})`,
                            sm: `calc(100% - ${theme.spacing(6)})`,
                        },
                        background:
                            'linear-gradient(to right, rgb(96, 99, 119), rgb(59, 54, 70))',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.2)', // Добавляем общую границу
                        // '& table': {
                        //     minWidth: isMobile ? '100%' : '100%',
                        //     tableLayout: 'fixed',
                        //     borderCollapse: 'collapse', // Важно для единого стиля границ
                        // },
                        boxShadow: 'none',
                        overflow: 'auto',
                        maxWidth: '100vw',
                        transform: isMobile ? 'scale(1)' : 'none',
                        transformOrigin: 'top left',
                        // Убираем внутренние отступы для экономии места
                        padding: isMobile ? 0 : 'inherit',
                        // Компенсируем масштаб через расчет ширины
                        // width: isMobile ? '100%' : '100%',
                        '& table': {
                            minWidth: isMobile ? '100%' : '100%',
                            borderCollapse: 'collapse', // Важно для единого стиля границ
                        },
                    }}>
                    <Table
                        aria-label='First table'
                        size={isMobile ? 'small' : 'medium'}
                        sx={{
                            '& .MuiTableRow-root': {
                                // Границы для строк
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                            },
                            '& .MuiTableCell-root': {
                                fontSize: isMobile ? '0.4rem' : '1.5rem',
                                padding: isMobile ? '10px' : '16px',
                                lineHeight: 1.2,
                                borderRight: '1px solid rgba(255,255,255,0.2)',
                            },
                            textAlign: 'center',
                        }}>
                        <TableHead>
                            <TableRow>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center', // Выравнивание по центру
                                        // verticalAlign: 'middle', // Вертикальное выравнивание
                                        // fontSize: isMobile ? '7rem' : '7.2rem', // Размер шрифта
                                        // color: '#ffff00', // Цвет текста
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem',
                                        // // fontWeight: 'bold', // Жирный шрифт (опционально)
                                        // // Переопределяем общие стили ячеек для конкретно этой ячейки
                                        // borderRight:
                                        //     '1px solid rgba(255,255,255,0.2) !important',
                                        // padding: isMobile ? '10px' : '16px',
                                    }}>
                                    Карта
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center', // Выравнивание по центру
                                        // verticalAlign: 'middle', // Вертикальное выравнивание
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem', // Размер шрифта
                                        // color: '#ffff00', // Цвет текста
                                        // // fontWeight: 'bold', // Жирный шрифт (опционально)
                                        // // Переопределяем общие стили ячеек для конкретно этой ячейки
                                        // borderRight:
                                        //     '1px solid rgba(255,255,255,0.2) !important',
                                        // padding: isMobile ? '10px' : '16px',
                                    }}>
                                    Количество
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center', // Выравнивание по центру
                                        // verticalAlign: 'middle', // Вертикальное выравнивание
                                        // fontSize: isMobile ? '7rem' : '7.2rem', // Размер шрифта
                                        // color: '#ffff00', // Цвет текста
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem',
                                        // // fontWeight: 'bold', // Жирный шрифт (опционально)
                                        // // Переопределяем общие стили ячеек для конкретно этой ячейки
                                        // borderRight:
                                        //     '1px solid rgba(255,255,255,0.2) !important',
                                        // padding: isMobile ? '10px' : '16px',
                                    }}>
                                    Восстановление
                                </AdaptiveTableCell>
                                {/* <TableCell>Age</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {table1Data.map((row) => (
                                <TableRow key={row.id}> */}
                            <TableRow>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center',
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem', // Выравнивание по центру
                                    }}>
                                    Шахты уровень 1
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center',
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem', // Выравнивание по центру
                                    }}>
                                    30
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center',
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem', // Выравнивание по центру
                                    }}>
                                    15 сек
                                </AdaptiveTableCell>
                                {/* <TableCell>{row.age}</TableCell> */}
                                {/* </TableRow>
                            ))} */}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ flex: 0 }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: {
                            xs: `0 ${theme.spacing(1)}`,
                            sm: `0 ${theme.spacing(3)}`,
                        },
                        width: {
                            xs: `calc(100% - ${theme.spacing(2)})`,
                            sm: `calc(100% - ${theme.spacing(6)})`,
                        },
                        background:
                            'linear-gradient(to right, rgb(96, 99, 119), rgb(59, 54, 70))',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.2)', // Добавляем общую границу
                        // '& table': {
                        //     minWidth: isMobile ? '100%' : '100%',
                        //     tableLayout: 'fixed',
                        //     borderCollapse: 'collapse', // Важно для единого стиля границ
                        // },
                        boxShadow: 'none',
                        overflow: 'auto',
                        maxWidth: '100vw',
                        transform: isMobile ? 'scale(1)' : 'none',
                        transformOrigin: 'top left',
                        // Убираем внутренние отступы для экономии места
                        padding: isMobile ? 0 : 'inherit',
                        // Компенсируем масштаб через расчет ширины
                        // width: isMobile ? '100%' : '100%',
                        '& table': {
                            minWidth: isMobile ? '100%' : '100%',
                            borderCollapse: 'collapse', // Важно для единого стиля границ
                        },
                    }}>
                    <Table
                        aria-label='Second table'
                        size={isMobile ? 'small' : 'medium'}
                        sx={{
                            '& .MuiTableRow-root': {
                                // Границы для строк
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                            },
                            '& .MuiTableCell-root': {
                                fontSize: isMobile ? '0.4rem' : '1.5rem',
                                padding: isMobile ? '10px' : '16px',
                                lineHeight: 1.2,
                                borderRight: '1px solid rgba(255,255,255,0.2)',
                            },
                        }}>
                        <TableHead>
                            <TableRow>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center', // Выравнивание по центру
                                        verticalAlign: 'middle', // Вертикальное выравнивание
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem', // Размер шрифта
                                        color: '#ffff00', // Цвет текста
                                        // fontWeight: 'bold', // Жирный шрифт (опционально)
                                        // Переопределяем общие стили ячеек для конкретно этой ячейки
                                        // borderRight:
                                        //     '1px solid rgba(255,255,255,0.2) !important',
                                        // padding: isMobile ? '10px' : '16px',
                                    }}>
                                    {/* поменять все TableCell на Adaptive Table Cell */}
                                    Дроп-лист
                                </AdaptiveTableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    overflowX: 'hidden', // Блокируем горизонтальный скролл
                    width: '100%', // Занимаем всю доступную ширину
                }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: {
                            xs: `0 ${theme.spacing(1)}`,
                            sm: `0 ${theme.spacing(3)}`,
                        },
                        width: {
                            xs: `calc(100% - ${theme.spacing(2)})`,
                            sm: `calc(100% - ${theme.spacing(6)})`,
                        },
                        background:
                            'linear-gradient(to right, rgb(96, 99, 119), rgb(59, 54, 70))',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.2)', // Добавляем общую границу
                        // '& table': {
                        //     minWidth: isMobile ? '100%' : '100%',
                        //     tableLayout: 'fixed',
                        //     borderCollapse: 'collapse', // Важно для единого стиля границ
                        // },
                        boxShadow: 'none',
                        overflow: 'auto',
                        maxWidth: '100vw',
                        transform: isMobile ? 'scale(1)' : 'none',
                        transformOrigin: 'top left',
                        // Убираем внутренние отступы для экономии места
                        padding: isMobile ? 0 : 'inherit',
                        // Компенсируем масштаб через расчет ширины
                        // width: isMobile ? '100%' : '100%',
                        '& table': {
                            minWidth: isMobile ? '100%' : '100%',
                            borderCollapse: 'collapse', // Важно для единого стиля границ
                        },
                    }}>
                    <Table
                        aria-label='Third table'
                        size={isMobile ? 'small' : 'medium'}
                        sx={{
                            '& .MuiTableRow-root': {
                                // Границы для строк
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                            },
                            '& .MuiTableCell-root': {
                                fontSize: isMobile ? '0.4rem' : '1.5rem',
                                padding: isMobile ? '10px' : '16px',
                                lineHeight: 1.2,
                                borderRight: '1px solid rgba(255,255,255,0.2)',
                            },
                            width: '100%',
                            minWidth: 'unset',
                            tableLayout: 'fixed',
                        }}>
                        <TableHead>
                            {/* <TableRow>
                        <AdaptiveTableCell>Дроп-лист</AdaptiveTableCell>
                    </TableRow> */}
                            <TableRow>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '13%',
                                        fontSize: isMobile
                                            ? '0.25rem'
                                            : '2.5rem', // В процентах
                                    }}>
                                    ID
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '19%',
                                        fontSize: isMobile
                                            ? '0.25rem'
                                            : '2.5rem', // В процентах
                                    }}>
                                    Изображение
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '20%',
                                        fontSize: isMobile
                                            ? '0.25rem'
                                            : '2.5rem', // В процентах
                                    }}>
                                    Название
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '24%',
                                        fontSize: isMobile
                                            ? '0.25rem'
                                            : '2.5rem', // В процентах
                                    }}>
                                    Описание
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '13%',
                                        fontSize: isMobile
                                            ? '0.25rem'
                                            : '2.5rem', // В процентах
                                    }}>
                                    Шанс
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '11%',
                                        fontSize: isMobile
                                            ? '0.25rem'
                                            : '2.5rem', // В процентах
                                    }}>
                                    Цена
                                </AdaptiveTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {batLoot.map((item) => (
                                <TableRow key={item.id}>
                                    <AdaptiveTableCell
                                        sx={{
                                            fontSize: isMobile
                                                ? '0.25rem'
                                                : '2.5rem', // В процентах
                                        }}>
                                        {item.id}
                                    </AdaptiveTableCell>
                                    <AdaptiveTableCell>
                                        <Avatar
                                            src={imageBatMap[item.image]}
                                            alt={item.drop}
                                            sx={{
                                                width: isMobile ? 32 : 48,
                                                height: isMobile ? 32 : 48,
                                            }}
                                        />
                                    </AdaptiveTableCell>
                                    <AdaptiveTableCell
                                        sx={{
                                            fontSize: isMobile
                                                ? '0.25rem'
                                                : '2.5rem', // В процентах
                                        }}>
                                        {item.drop}
                                    </AdaptiveTableCell>
                                    <AdaptiveTableCell
                                        sx={{
                                            fontSize: isMobile
                                                ? '0.25rem'
                                                : '2.5rem', // В процентах
                                        }}>
                                        {item.about}
                                    </AdaptiveTableCell>
                                    <AdaptiveTableCell
                                        sx={{
                                            fontSize: isMobile
                                                ? '0.25rem'
                                                : '2.5rem', // В процентах
                                        }}>
                                        {item.drop_chance}
                                    </AdaptiveTableCell>
                                    <AdaptiveTableCell
                                        sx={{
                                            fontSize: isMobile
                                                ? '0.25rem'
                                                : '2.5rem', // В процентах
                                        }}>
                                        {item.cost}
                                    </AdaptiveTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            {/* отсюда крот */}

            <Box sx={{ flex: 0 }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: {
                            xs: `0 ${theme.spacing(1)}`,
                            sm: `0 ${theme.spacing(3)}`,
                        },
                        width: {
                            xs: `calc(100% - ${theme.spacing(2)})`,
                            sm: `calc(100% - ${theme.spacing(6)})`,
                        },
                        background:
                            'linear-gradient(to right, rgb(96, 99, 119), rgb(59, 54, 70))',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.2)', // Добавляем общую границу
                        // '& table': {
                        //     minWidth: isMobile ? '100%' : '100%',
                        //     tableLayout: 'fixed',
                        //     borderCollapse: 'collapse', // Важно для единого стиля границ
                        // },
                        boxShadow: 'none',
                        overflow: 'auto',
                        maxWidth: '100vw',
                        transform: isMobile ? 'scale(1)' : 'none',
                        transformOrigin: 'top left',
                        // Убираем внутренние отступы для экономии места
                        padding: isMobile ? 0 : 'inherit',
                        // Компенсируем масштаб через расчет ширины
                        // width: isMobile ? '100%' : '100%',
                        '& table': {
                            minWidth: isMobile ? '100%' : '100%',
                            borderCollapse: 'collapse', // Важно для единого стиля границ
                        },
                    }}>
                    <Table
                        aria-label='Second table'
                        size={isMobile ? 'small' : 'medium'}
                        sx={{
                            '& .MuiTableRow-root': {
                                // Границы для строк
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                            },
                            '& .MuiTableCell-root': {
                                fontSize: isMobile ? '0.4rem' : '1.5rem',
                                padding: isMobile ? '10px' : '16px',
                                lineHeight: 1.2,
                                borderRight: '1px solid rgba(255,255,255,0.2)',
                            },
                        }}>
                        <TableHead>
                            <TableRow>
                                <AdaptiveTableCell sx={{ width: '7%' }}>
                                    <Avatar
                                        src={mole}
                                        // alt={Мозг}
                                        sx={{
                                            width: isMobile ? 42 : 58,
                                            height: isMobile ? 42 : 58,
                                        }}
                                    />
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'left', // Выравнивание по центру
                                        verticalAlign: 'middle', // Вертикальное выравнивание
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '1.5rem', // Размер шрифта
                                        color: '#ffff00', // Цвет текста
                                        // fontWeight: 'bold', // Жирный шрифт (опционально)
                                        // Переопределяем общие стили ячеек для конкретно этой ячейки
                                        borderRight:
                                            '1px solid rgba(255,255,255,0.2) !important',
                                        padding: isMobile ? '10px' : '16px',
                                    }}>
                                    Крот-рудокоп
                                </AdaptiveTableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Box>

            <Box sx={{ flex: 0 }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: {
                            xs: `0 ${theme.spacing(1)}`,
                            sm: `0 ${theme.spacing(3)}`,
                        },
                        width: {
                            xs: `calc(100% - ${theme.spacing(2)})`,
                            sm: `calc(100% - ${theme.spacing(6)})`,
                        },
                        background:
                            'linear-gradient(to right, rgb(96, 99, 119), rgb(59, 54, 70))',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.2)', // Добавляем общую границу
                        // '& table': {
                        //     minWidth: isMobile ? '100%' : '100%',
                        //     tableLayout: 'fixed',
                        //     borderCollapse: 'collapse', // Важно для единого стиля границ
                        // },
                        boxShadow: 'none',
                        overflow: 'auto',
                        maxWidth: '100vw',
                        transform: isMobile ? 'scale(1)' : 'none',
                        transformOrigin: 'top left',
                        // Убираем внутренние отступы для экономии места
                        padding: isMobile ? 0 : 'inherit',
                        // Компенсируем масштаб через расчет ширины
                        // width: isMobile ? '100%' : '100%',
                        '& table': {
                            minWidth: isMobile ? '100%' : '100%',
                            borderCollapse: 'collapse', // Важно для единого стиля границ
                        },
                    }}>
                    <Table
                        aria-label='First table'
                        size={isMobile ? 'small' : 'medium'}
                        sx={{
                            '& .MuiTableRow-root': {
                                // Границы для строк
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                            },
                            '& .MuiTableCell-root': {
                                fontSize: isMobile ? '0.4rem' : '1.5rem',
                                padding: isMobile ? '10px' : '16px',
                                lineHeight: 1.2,
                                borderRight: '1px solid rgba(255,255,255,0.2)',
                            },
                        }}>
                        <TableHead>
                            <TableRow>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '7%', // В процентах
                                    }}>
                                    Уровень
                                </AdaptiveTableCell>
                                <AdaptiveTableCell>2</AdaptiveTableCell>
                                {/* <TableCell>Age</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableMoleData.map((row) => (
                                <TableRow key={row.id}>
                                    <AdaptiveTableCell>
                                        {row.parameter}
                                    </AdaptiveTableCell>
                                    <AdaptiveTableCell>
                                        {row.number}
                                    </AdaptiveTableCell>
                                    {/* <TableCell>{row.age}</TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            <Box sx={{ flex: 0 }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: {
                            xs: `0 ${theme.spacing(1)}`,
                            sm: `0 ${theme.spacing(3)}`,
                        },
                        width: {
                            xs: `calc(100% - ${theme.spacing(2)})`,
                            sm: `calc(100% - ${theme.spacing(6)})`,
                        },
                        background:
                            'linear-gradient(to right, rgb(96, 99, 119), rgb(59, 54, 70))',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.2)', // Добавляем общую границу
                        // '& table': {
                        //     minWidth: isMobile ? '100%' : '100%',
                        //     tableLayout: 'fixed',
                        //     borderCollapse: 'collapse', // Важно для единого стиля границ
                        // },
                        boxShadow: 'none',
                        overflow: 'auto',
                        maxWidth: '100vw',
                        transform: isMobile ? 'scale(1)' : 'none',
                        transformOrigin: 'top left',
                        // Убираем внутренние отступы для экономии места
                        padding: isMobile ? 0 : 'inherit',
                        // Компенсируем масштаб через расчет ширины
                        // width: isMobile ? '100%' : '100%',
                        '& table': {
                            minWidth: isMobile ? '100%' : '100%',
                            borderCollapse: 'collapse', // Важно для единого стиля границ
                        },
                    }}>
                    <Table
                        aria-label='Second table'
                        size={isMobile ? 'small' : 'medium'}
                        sx={{
                            '& .MuiTableRow-root': {
                                // Границы для строк
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                            },
                            '& .MuiTableCell-root': {
                                fontSize: isMobile ? '0.4rem' : '1.5rem',
                                padding: isMobile ? '10px' : '16px',
                                lineHeight: 1.2,
                                borderRight: '1px solid rgba(255,255,255,0.2)',
                            },
                        }}>
                        <TableHead>
                            <TableRow>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center', // Выравнивание по центру
                                        verticalAlign: 'middle', // Вертикальное выравнивание
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem', // Размер шрифта
                                        color: '#ffff00', // Цвет текста
                                        // fontWeight: 'bold', // Жирный шрифт (опционально)
                                        // Переопределяем общие стили ячеек для конкретно этой ячейки
                                        borderRight:
                                            '1px solid rgba(255,255,255,0.2) !important',
                                        padding: isMobile ? '10px' : '16px',
                                    }}>
                                    Локация (место обитания)
                                </AdaptiveTableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Box>

            <Box sx={{ flex: 0 }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: {
                            xs: `0 ${theme.spacing(1)}`,
                            sm: `0 ${theme.spacing(3)}`,
                        },
                        width: {
                            xs: `calc(100% - ${theme.spacing(2)})`,
                            sm: `calc(100% - ${theme.spacing(6)})`,
                        },
                        background:
                            'linear-gradient(to right, rgb(96, 99, 119), rgb(59, 54, 70))',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.2)', // Добавляем общую границу
                        // '& table': {
                        //     minWidth: isMobile ? '100%' : '100%',
                        //     tableLayout: 'fixed',
                        //     borderCollapse: 'collapse', // Важно для единого стиля границ
                        // },
                        boxShadow: 'none',
                        overflow: 'auto',
                        maxWidth: '100vw',
                        transform: isMobile ? 'scale(1)' : 'none',
                        transformOrigin: 'top left',
                        // Убираем внутренние отступы для экономии места
                        padding: isMobile ? 0 : 'inherit',
                        // Компенсируем масштаб через расчет ширины
                        // width: isMobile ? '100%' : '100%',
                        '& table': {
                            minWidth: isMobile ? '100%' : '100%',
                            borderCollapse: 'collapse', // Важно для единого стиля границ
                        },
                    }}>
                    <Table
                        aria-label='First table'
                        size={isMobile ? 'small' : 'medium'}
                        sx={{
                            '& .MuiTableRow-root': {
                                // Границы для строк
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                            },
                            '& .MuiTableCell-root': {
                                fontSize: isMobile ? '0.4rem' : '1.5rem',
                                padding: isMobile ? '10px' : '16px',
                                lineHeight: 1.2,
                                borderRight: '1px solid rgba(255,255,255,0.2)',
                            },
                            textAlign: 'center',
                        }}>
                        <TableHead>
                            <TableRow>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center', // Выравнивание по центру
                                        // verticalAlign: 'middle', // Вертикальное выравнивание
                                        // fontSize: isMobile ? '7rem' : '7.2rem', // Размер шрифта
                                        // color: '#ffff00', // Цвет текста
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem',
                                        // // fontWeight: 'bold', // Жирный шрифт (опционально)
                                        // // Переопределяем общие стили ячеек для конкретно этой ячейки
                                        // borderRight:
                                        //     '1px solid rgba(255,255,255,0.2) !important',
                                        // padding: isMobile ? '10px' : '16px',
                                    }}>
                                    Карта
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center', // Выравнивание по центру
                                        // verticalAlign: 'middle', // Вертикальное выравнивание
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem', // Размер шрифта
                                        // color: '#ffff00', // Цвет текста
                                        // // fontWeight: 'bold', // Жирный шрифт (опционально)
                                        // // Переопределяем общие стили ячеек для конкретно этой ячейки
                                        // borderRight:
                                        //     '1px solid rgba(255,255,255,0.2) !important',
                                        // padding: isMobile ? '10px' : '16px',
                                    }}>
                                    Количество
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center', // Выравнивание по центру
                                        // verticalAlign: 'middle', // Вертикальное выравнивание
                                        // fontSize: isMobile ? '7rem' : '7.2rem', // Размер шрифта
                                        // color: '#ffff00', // Цвет текста
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem',
                                        // // fontWeight: 'bold', // Жирный шрифт (опционально)
                                        // // Переопределяем общие стили ячеек для конкретно этой ячейки
                                        // borderRight:
                                        //     '1px solid rgba(255,255,255,0.2) !important',
                                        // padding: isMobile ? '10px' : '16px',
                                    }}>
                                    Восстановление
                                </AdaptiveTableCell>
                                {/* <TableCell>Age</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {table1Data.map((row) => (
                                <TableRow key={row.id}> */}
                            <TableRow>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center',
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem', // Выравнивание по центру
                                    }}>
                                    Шахты уровень 2
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center',
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem', // Выравнивание по центру
                                    }}>
                                    20
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center',
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem', // Выравнивание по центру
                                    }}>
                                    30 сек
                                </AdaptiveTableCell>
                                {/* <TableCell>{row.age}</TableCell> */}
                                {/* </TableRow>
                            ))} */}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ flex: 0 }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: {
                            xs: `0 ${theme.spacing(1)}`,
                            sm: `0 ${theme.spacing(3)}`,
                        },
                        width: {
                            xs: `calc(100% - ${theme.spacing(2)})`,
                            sm: `calc(100% - ${theme.spacing(6)})`,
                        },
                        background:
                            'linear-gradient(to right, rgb(96, 99, 119), rgb(59, 54, 70))',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.2)', // Добавляем общую границу
                        // '& table': {
                        //     minWidth: isMobile ? '100%' : '100%',
                        //     tableLayout: 'fixed',
                        //     borderCollapse: 'collapse', // Важно для единого стиля границ
                        // },
                        boxShadow: 'none',
                        overflow: 'auto',
                        maxWidth: '100vw',
                        transform: isMobile ? 'scale(1)' : 'none',
                        transformOrigin: 'top left',
                        // Убираем внутренние отступы для экономии места
                        padding: isMobile ? 0 : 'inherit',
                        // Компенсируем масштаб через расчет ширины
                        // width: isMobile ? '100%' : '100%',
                        '& table': {
                            minWidth: isMobile ? '100%' : '100%',
                            borderCollapse: 'collapse', // Важно для единого стиля границ
                        },
                    }}>
                    <Table
                        aria-label='Second table'
                        size={isMobile ? 'small' : 'medium'}
                        sx={{
                            '& .MuiTableRow-root': {
                                // Границы для строк
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                            },
                            '& .MuiTableCell-root': {
                                fontSize: isMobile ? '0.4rem' : '1.5rem',
                                padding: isMobile ? '10px' : '16px',
                                lineHeight: 1.2,
                                borderRight: '1px solid rgba(255,255,255,0.2)',
                            },
                        }}>
                        <TableHead>
                            <TableRow>
                                <AdaptiveTableCell
                                    sx={{
                                        textAlign: 'center', // Выравнивание по центру
                                        verticalAlign: 'middle', // Вертикальное выравнивание
                                        fontSize: isMobile
                                            ? '0.4rem'
                                            : '2.5rem', // Размер шрифта
                                        color: '#ffff00', // Цвет текста
                                        // fontWeight: 'bold', // Жирный шрифт (опционально)
                                        // Переопределяем общие стили ячеек для конкретно этой ячейки
                                        // borderRight:
                                        //     '1px solid rgba(255,255,255,0.2) !important',
                                        // padding: isMobile ? '10px' : '16px',
                                    }}>
                                    {/* поменять все TableCell на Adaptive Table Cell */}
                                    Дроп-лист
                                </AdaptiveTableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    overflowX: 'hidden', // Блокируем горизонтальный скролл
                    width: '100%', // Занимаем всю доступную ширину
                }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: {
                            xs: `0 ${theme.spacing(1)}`,
                            sm: `0 ${theme.spacing(3)}`,
                        },
                        width: {
                            xs: `calc(100% - ${theme.spacing(2)})`,
                            sm: `calc(100% - ${theme.spacing(6)})`,
                        },
                        background:
                            'linear-gradient(to right, rgb(96, 99, 119), rgb(59, 54, 70))',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.2)', // Добавляем общую границу
                        // '& table': {
                        //     minWidth: isMobile ? '100%' : '100%',
                        //     tableLayout: 'fixed',
                        //     borderCollapse: 'collapse', // Важно для единого стиля границ
                        // },
                        boxShadow: 'none',
                        overflow: 'auto',
                        maxWidth: '100vw',
                        transform: isMobile ? 'scale(1)' : 'none',
                        transformOrigin: 'top left',
                        // Убираем внутренние отступы для экономии места
                        padding: isMobile ? 0 : 'inherit',
                        // Компенсируем масштаб через расчет ширины
                        // width: isMobile ? '100%' : '100%',
                        '& table': {
                            minWidth: isMobile ? '100%' : '100%',
                            borderCollapse: 'collapse', // Важно для единого стиля границ
                        },
                    }}>
                    <Table
                        aria-label='Third table'
                        size={isMobile ? 'small' : 'medium'}
                        sx={{
                            '& .MuiTableRow-root': {
                                // Границы для строк
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                            },
                            '& .MuiTableCell-root': {
                                fontSize: isMobile ? '0.4rem' : '1.5rem',
                                padding: isMobile ? '10px' : '16px',
                                lineHeight: 1.2,
                                borderRight: '1px solid rgba(255,255,255,0.2)',
                            },
                            width: '100%',
                            minWidth: 'unset',
                            tableLayout: 'fixed',
                        }}>
                        <TableHead>
                            {/* <TableRow>
                        <AdaptiveTableCell>Дроп-лист</AdaptiveTableCell>
                    </TableRow> */}
                            <TableRow>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '13%',
                                        fontSize: isMobile
                                            ? '0.25rem'
                                            : '2.5rem', // В процентах
                                    }}>
                                    ID
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '19%',
                                        fontSize: isMobile
                                            ? '0.25rem'
                                            : '2.5rem', // В процентах
                                    }}>
                                    Изображение
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '20%',
                                        fontSize: isMobile
                                            ? '0.25rem'
                                            : '2.5rem', // В процентах
                                    }}>
                                    Название
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '24%',
                                        fontSize: isMobile
                                            ? '0.25rem'
                                            : '2.5rem', // В процентах
                                    }}>
                                    Описание
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '13%',
                                        fontSize: isMobile
                                            ? '0.25rem'
                                            : '2.5rem', // В процентах
                                    }}>
                                    Шанс
                                </AdaptiveTableCell>
                                <AdaptiveTableCell
                                    sx={{
                                        width: '11%',
                                        fontSize: isMobile
                                            ? '0.25rem'
                                            : '2.5rem', // В процентах
                                    }}>
                                    Цена
                                </AdaptiveTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {moleLoot.map((item) => (
                                <TableRow key={item.id}>
                                    <AdaptiveTableCell
                                        sx={{
                                            fontSize: isMobile
                                                ? '0.25rem'
                                                : '2.5rem', // В процентах
                                        }}>
                                        {item.id}
                                    </AdaptiveTableCell>
                                    <AdaptiveTableCell>
                                        <Avatar
                                            src={imageMoleMap[item.image]}
                                            alt={item.drop}
                                            sx={{
                                                width: isMobile ? 32 : 48,
                                                height: isMobile ? 32 : 48,
                                            }}
                                        />
                                    </AdaptiveTableCell>
                                    <AdaptiveTableCell
                                        sx={{
                                            fontSize: isMobile
                                                ? '0.25rem'
                                                : '2.5rem', // В процентах
                                        }}>
                                        {item.drop}
                                    </AdaptiveTableCell>
                                    <AdaptiveTableCell
                                        sx={{
                                            fontSize: isMobile
                                                ? '0.25rem'
                                                : '2.5rem', // В процентах
                                        }}>
                                        {item.about}
                                    </AdaptiveTableCell>
                                    <AdaptiveTableCell
                                        sx={{
                                            fontSize: isMobile
                                                ? '0.25rem'
                                                : '2.5rem', // В процентах
                                        }}>
                                        {item.drop_chance}
                                    </AdaptiveTableCell>
                                    <AdaptiveTableCell
                                        sx={{
                                            fontSize: isMobile
                                                ? '0.25rem'
                                                : '2.5rem', // В процентах
                                        }}>
                                        {item.cost}
                                    </AdaptiveTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}
