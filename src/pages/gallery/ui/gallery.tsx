import { useEffect } from 'react'
import { Responsive } from 'react-alice-carousel'
import { useErrorBoundary } from 'react-error-boundary'
import { BookPreview } from 'entities/book/bookPreview'
import {
    fetchCategoryPreview,
    selectCategoryPreviewBooks,
    selectCategoryPreviewError,
    selectCategoryPreviewLoading,
} from 'entities/categoryPreview'
import { AddToCart } from 'features/cart'
import { IBookPreview } from 'shared/api/book'
import { IMerchPlayerPreview } from 'shared/api/book/types'
import { MAX_WIDTH_SM, SLIDES } from 'shared/consts'
import { useMediaQuery } from 'shared/lib/media/useMediaQuery'
import { useAppDispatch, useAppSelector } from 'shared/lib/store'
import { Carousel } from 'shared/ui/carousel'
import { LoaderCarousel } from 'shared/ui/loaders/loaderСarousel'
import { ProductСategory } from 'widgets/productСategory'
import { Slider } from 'widgets/slider'

import Image1 from '../ui/collection/CRAN7429.jpg'
import Image2 from '../ui/collection/CRAN7456.jpg'
import Image3 from '../ui/collection/CRAN7486.jpg'
import Image4 from '../ui/collection/CRAN7577.jpg'
import Image5 from '../ui/collection/CRAN7791.jpg'
import Image6 from '../ui/collection/CRAN7804.jpg'
import Image7 from '../ui/collection/CRAN7837.jpg'

import './gallery.scss'
import { MerchPlayerPreview } from 'entities/merchPlayerPreview'
import { MerchPlayerDetails } from 'widgets/merchPlayerDetails'

import { useDispatch, useSelector } from 'react-redux'
import { setActiveGallery } from 'features/config/configSlice'
import { useParams, useLocation } from 'react-router-dom'

const responsive: Responsive = {
    1024: { items: 5 },
    768: { items: 4 },
    576: { items: 1 },
}

export const Gallery = () => {
    const location = useLocation()
    console.log(location.pathname)
    // TODO: Добавить получение категорий не через названия, а через массив с ссылками.
    const TITLE_OF_BOOK_CATEGOTIES = ['JavaScript']

    const books = useAppSelector(selectCategoryPreviewBooks)

    const loading = useAppSelector(selectCategoryPreviewLoading)
    const error = useAppSelector(selectCategoryPreviewError)
    const dispatch = useAppDispatch()

    const { showBoundary } = useErrorBoundary()
    const matches = useMediaQuery(MAX_WIDTH_SM)

    useEffect(() => {
        TITLE_OF_BOOK_CATEGOTIES.forEach((title) =>
            dispatch(fetchCategoryPreview(title))
        )
    }, [])

    const dispatch1 = useDispatch()

    useEffect(() => {
        dispatch1(setActiveGallery('Merch'))
    }, [])

    //   переписать на экспорт из того массива или на стор!

    const arrMerch = [
        {
            image: Image1,
            title: 'Футболка большая',
            subtitle: 'Футболка большая хлопчатобумажная',
            id: '1',
        },
        {
            image: Image2,
            title: 'Футболка средняя',
            subtitle: 'Футболка средняя хлопчатобумажная',
            id: '2',
        },
        {
            image: Image3,
            title: 'Футболка малая',
            subtitle: 'Футболка малая хлопчатобумажная',
            id: '3',
        },
        {
            image: Image4,
            title: 'Футболка молодежная',
            subtitle: 'Футболка малая хлопчатобумажная',
            id: '4',
        },
        {
            image: Image5,
            title: 'Футболка клевая',
            subtitle: 'Футболка малая хлопчатобумажная',
            id: '5',
        },
        {
            image: Image6,
            title: 'Футболка модная',
            subtitle: 'Футболка малая хлопчатобумажная',
            id: '6',
        },
        {
            image: Image7,
            title: 'Футболка серая',
            subtitle: 'Футболка малая хлопчатобумажная',
            id: '7',
        },
    ]

    const renderMerchPlayer = (
        items: IMerchPlayerPreview[]
        // categoryId: string
    ) => {
        return items?.map((item) => (
            <MerchPlayerPreview
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                id={item.id}
                key={item.id}
                className='home-page__item'
            />
        ))
    }
    // const Merch = 'merch'

    // const renderMerchPlayerCategories = () => {
    //     return (
    //         <ProductСategory
    //             key={Merch}
    //             title={Merch}
    //             className='home-page__category'>
    //             <Carousel
    //                 autoWidth
    //                 disableDotsControls
    //                 responsive={responsive}
    //                 countVisibleElements={5}
    //                 className='home-page__carousel'>
    //                 {renderMerchPlayer(arrMerch)}
    //             </Carousel>
    //         </ProductСategory>
    //     )
    // }

    // разобрать эти два метода и переписать под свой, применить компонент <Carousel>

    // const renderBooks = (items: IBookPreview[], categoryId: string) => {
    //     return items?.map((item) => (
    //         <BookPreview
    //             key={item.isbn13}
    //             isbn13={item.isbn13}
    //             image={item.image}
    //             title={item.title}
    //             subtitle={item.subtitle}
    //             price={item.price}
    //             categoryId={categoryId}
    //             className='home-page__item'
    //             actionSlot={
    //                 <AddToCart
    //                     bookInfo={{
    //                         isbn13: item.isbn13,
    //                         image: item.image,
    //                         title: item.title,
    //                         quantity: 1,
    //                         price: item.price,
    //                         url: `/books/description/${item.isbn13}`,
    //                     }}
    //                     className='home-page__button-add'
    //                 />
    //             }
    //         />
    //     ))
    // }

    // тут заменить в массиве категорию на [Merch]
    const renderCategories = () => {
        return ['Мерч'].map((titleCategory) => (
            <ProductСategory
                key={titleCategory}
                title={titleCategory}
                className='home-page__category'>
                <Carousel
                    autoWidth
                    disableDotsControls
                    responsive={responsive}
                    countVisibleElements={5}
                    className='home-page__carousel'>
                    {renderMerchPlayer(arrMerch)}
                </Carousel>
            </ProductСategory>
        ))
    }

    const loaderCategories = ['Мерч'].map((titleCategory) => (
        <ProductСategory
            key={titleCategory}
            title={titleCategory}
            className='home-page__category'>
            <LoaderCarousel />
        </ProductСategory>
    ))

    if (error) showBoundary(error)
    if (loading)
        return (
            <>
                {!matches && <LoaderCarousel />}
                {loaderCategories}
            </>
        )

    return (
        <>
            {/* <Slider slides={SLIDES} /> */}
            {renderCategories()}
            {/* <MerchPlayerDetails /> */}
            {/* {renderMerchPlayerCategories} */}
        </>
    )
}
