import { useState } from 'react'
import clsx from 'clsx'
import { LoaderImage } from 'shared/ui/loaders/loaderImage'
import { Title } from 'shared/ui/title'
import { useParams } from 'react-router-dom'
import { Merch } from 'app/merch/merch'
import { Players } from 'app/players/players'
import { useSelector } from 'react-redux'

import './merchPlayerDetails.scss'

export const MerchPlayerDetails = () => {
    const { Id } = useParams()
    const obj = useParams()
    console.log('Привет!')
    console.log(obj)
    const idd = Number(Id ?? 0) - 1
    console.log(typeof idd + ' ' + idd)

    let activeGalleryId = useSelector(
        (state: RootState) => state.gallery.activeGalleryId
    )
    console.log('Вон оно чо в сторе ' + activeGalleryId)

    const [loadingImage, setLoadingImage] = useState(true)

    // const book = useAppSelector(selectBookDescriptionBook)

    // const merch = Merch[props - 1]

    const onLoadedImage = (): void => {
        setLoadingImage(false)
    }

    console.log(activeGalleryId)

    // тут надо переключать массивы, тогда будет выводить разные фотки!
    // массивы не переключаются!!!
    let flag = true

    // eslint-disable-next-line no-constant-condition, no-cond-assign
    if (activeGalleryId === 'Players') flag = false
    console.log(flag)
    // eslint-disable-next-line no-multi-assign

    const { image, title, subtitle } = flag ? Merch[idd] : Players[idd]

    // const { image, title, subtitle, id } = Players[idd]

    // const price = 5000

    // const authorsArr = authors.split(', ')

    // const linksToAuthors = authorsArr.map((item, index) => (
    //     <Link
    //         key={index}
    //         className='book-details__author'
    //         to={`/search/${item}`}>
    //         {item}
    //     </Link>
    // ))

    // const actionButtons = (
    //     <div>
    //         {price === PRICE_OF_FREE_BOOK ? (
    //             <a
    //                 href={url}
    //                 target='__blank'
    //                 className='book-details__link-action'>
    //                 Read a book
    //             </a>
    //         ) : (
    //             <AddToCart
    //                 bookInfo={{
    //                     isbn13,
    //                     image,
    //                     title,
    //                     quantity: 1,
    //                     price,
    //                     url: location.pathname,
    //                 }}
    //             />
    //         )}
    //     </div>
    // )

    return (
        <div className='book-details'>
            <div className='book-details__content'>
                <div className='book-details__wrapper-image'>
                    {/* {price === PRICE_OF_FREE_BOOK && ( */}
                    <div className='book-details__label-info'>{title}</div>
                    {/* )} */}
                    {loadingImage && <LoaderImage height={400} width={300} />}
                    <img
                        src={image}
                        loading='lazy'
                        className={clsx(
                            'book-details__image',
                            loadingImage && 'book-details__image_hidden'
                        )}
                        alt='Book cover.'
                        onLoad={onLoadedImage}
                    />
                    {/* <button
                        type='button'
                        // конкретно провисает все на диспатче!
                        onClick={() => dispatch(setActiveGallery('Players'))}
                        className='cart__button button_theme_change'>
                        -
                    </button> */}
                </div>

                {/* <button
                    onClick={() =>
                        dispatch(setActiveGallery('Terminators'))
                    }></button> */}

                {/* 
                <div className='book-details__info'> */}
                {/* <Rating
                        value={Number(rating)}
                        className='book-details__rating'
                    /> */}
                {/* <h1 className='book-details__title'>{title}</h1>
                    {subtitle && (
                        <h2 className='book-details__subtitle'>{subtitle}</h2>
                    )} */}
                {/* <h3 className='book-details__authors'>{linksToAuthors}</h3> */}

                {/* <ul className='book-details__info-list'>
                        <li className='book-details__info-item'>
                            Publisher: {publisher}
                        </li>
                        <li className='book-details__info-item'>
                            Published: {year}
                        </li>
                        <li className='book-details__info-item'>
                            Pages: {pages}
                        </li>
                        <li className='book-details__info-item'>
                            ISBN-10: {isbn10}
                        </li>
                        <li className='book-details__info-item'>
                            ISBN-13: {isbn13}
                        </li>
                    </ul> */}

                {/* <div className='book-details__price'>
                        Price: <Price>{price}</Price>
                    </div> */}

                {/* {actionButtons} */}
                {/* </div> */}

                {/* <div className='book-details__wrapper-authors'>
                    <Author authors={authorsArr} />
                </div> */}
            </div>

            <div className='book-details__desc'>
                <Title className='book-details__desc-title'>Описание</Title>

                <p>
                    {subtitle}
                    {/* <a
                        href={url}
                        target='_blank'
                        className='book-details__desc-link'
                        rel='noreferrer'>
                        Read more
                    </a> */}
                </p>
            </div>
        </div>
    )
}
