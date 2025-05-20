import { FC } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { IMerchPlayerPreview } from 'shared/api/book/types'
import defaultImage from 'shared/assets/images/defaultImage.png'
// import { MAX_WIDTH__MD } from 'shared/consts'
// import { useMediaQuery } from 'shared/lib/media/useMediaQuery'
// import { LoaderImage } from 'shared/ui/loaders/loaderImage'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material'

import './MerchPlayerPreview.scss'

export const MerchPlayerPreview: FC<IMerchPlayerPreview> = (props) => {
    const { image = defaultImage, title, subtitle, id, className } = props

    const activeGalleryId = useSelector(
        (state: RootState) => state.gallery.activeGalleryId
    )
    //   тут тоже не реагирует на условие
    // activeGalleryId = 'Merch' ? console.log('Мерч') : console.log('Игроки')
    //  тут не реагирует на условие
    // const LinkToBookDescription = (activeGalleryId = 'Merch'
    //     ? `/gallery/merch/description/${id}`
    //     : `/gallery/players/description/${id}`)

    // //  тут не реагирует на условие
    let flag = true

    // // вот тут проблема со ссылками!
    if (activeGalleryId === 'Players') flag = false
    // console.log(flag)
    const LinkToBookDescription = flag
        ? `/merch/description/${id}`
        : `/players/description/${id}`
    // console.log(LinkToBookDescription)

    const renderOverlay = (): JSX.Element => (
        <div className='book-preview__overlay'>
            {/* <Price className='book-preview__price'>{price}</Price> */}
            <Link to={LinkToBookDescription}>
                <h4 className='book-preview__title'>{title}</h4>
                <span className='book-preview__author'>{subtitle}</span>
            </Link>

            {/* {actionSlot} */}
        </div>
    )

    return (
        <div className={clsx('book-preview', className)}>
            <div className='book-preview__panel'>
                {/* {price === PRICE_OF_FREE_BOOK && (
                    <div className='book-preview__label-info'>FREE</div>
                )} */}
            </div>

            <Link to={LinkToBookDescription}>
                {/* {loadingImage && (
                    <LoaderImage
                        width={ImageLoaderWidth}
                        height={ImageLoaderHeight}
                        className='book-preview__image-loader'
                    />
                )} */}
                <Box
                    sx={{
                        width: { xs: '100%', sm: '100%', md: '100%' },
                        maxWidth: { xs: '100%', sm: 800, md: 800 }, // Адаптивный максимум
                        height: 'auto',
                        mx: 'auto',
                        position: 'relative',
                        // p: { xs: 1, sm: 1 }, // Адаптивные отступы
                        // // Фон для области за изображением
                        // bgcolor: 'background.paper',
                        borderRadius: { xs: 1, sm: 1 }, // На мобильных без скругления
                        overflow: 'hidden',
                        boxShadow: { xs: 3, sm: 3 }, // Тень только на десктопе
                    }}>
                    <Box
                        component='img'
                        src={image}
                        loading='lazy' // Ленивая загрузка
                        sx={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: {
                                xs: '50vh', // Меньшая высота на мобильных
                                sm: '70vh',
                            },
                            display: 'block',
                            objectFit: {
                                xs: 'cover', // Обрезка на мобильных
                                sm: 'contain', // Полное отображение на десктопе
                            },
                            objectPosition: {
                                xs: 'center center', // Центрирование для обрезанных мобильных
                                sm: 'center top', // Позиция для десктопа
                            },
                            // Анимация при наведении (только на десктопе)
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: {
                                    xs: 'none', // На мобильных отключаем
                                    sm: 'scale(1.02)',
                                },
                            },
                        }}
                    />
                </Box>
            </Link>

            <h4 className='book-preview__title'>{title}</h4>
            <span className='book-preview__author'>{subtitle}</span>
            {/* <Price>{price}</Price> */}

            {renderOverlay()}
        </div>
    )
}
