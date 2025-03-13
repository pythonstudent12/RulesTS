import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { IMerchPlayerPreview } from 'shared/api/book/types'
import defaultImage from 'shared/assets/images/defaultImage.png'
import { MAX_WIDTH__MD } from 'shared/consts'
import { useMediaQuery } from 'shared/lib/media/useMediaQuery'
import { LoaderImage } from 'shared/ui/loaders/loaderImage'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveGallery } from 'features/config/configSlice'

import './MerchPlayer.scss'

// interface IBookPreviewProps extends IBookPreview {
//     /** Slot for adding an action button. */
//     readonly actionSlot: JSX.Element
// }

export const MerchPlayerPreview: FC<IMerchPlayerPreview> = (props) => {
    const { image = defaultImage, title, subtitle, id, className } = props

    const [loadingImage, setLoadingImage] = useState(true)
    const matches = useMediaQuery(MAX_WIDTH__MD)

    let activeGalleryId = useSelector(
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
    console.log(flag)
    const LinkToBookDescription = flag
        ? `/gallery/merch/description/${id}`
        : `/players/players/description/${id}`
    console.log(LinkToBookDescription)

    const ImageLoaderWidth = matches ? 160 : 250
    const ImageLoaderHeight = matches ? 210 : 290

    const onLoadedImage = (): void => {
        setLoadingImage(false)
    }

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
                {loadingImage && (
                    <LoaderImage
                        width={ImageLoaderWidth}
                        height={ImageLoaderHeight}
                        className='book-preview__image-loader'
                    />
                )}
                <img
                    src={image}
                    loading='lazy'
                    className={clsx(
                        'book-preview__image',
                        loadingImage && 'book-preview__image_hidden'
                    )}
                    alt='Book cover.'
                    onLoad={onLoadedImage}
                />
            </Link>

            <h4 className='book-preview__title'>{title}</h4>
            <span className='book-preview__author'>{subtitle}</span>
            {/* <Price>{price}</Price> */}

            {renderOverlay()}
        </div>
    )
}
