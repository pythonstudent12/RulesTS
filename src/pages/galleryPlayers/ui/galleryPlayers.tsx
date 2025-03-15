import { useEffect } from 'react'
import { Responsive } from 'react-alice-carousel'
import { useErrorBoundary } from 'react-error-boundary'
import { Players } from 'app/players/players'
import {
    selectCategoryPreviewError,
    selectCategoryPreviewLoading,
} from 'entities/categoryPreview'
import { MerchPlayerPreview } from 'entities/merchPlayerPreview'
import { IMerchPlayerPreview } from 'shared/api/book/types'
import { MAX_WIDTH_SM } from 'shared/consts'
import { useMediaQuery } from 'shared/lib/media/useMediaQuery'
import { useAppSelector } from 'shared/lib/store'
import { Carousel } from 'shared/ui/carousel'
import { LoaderCarousel } from 'shared/ui/loaders/loaderСarousel'
import { ProductСategory } from 'widgets/productСategory'
import { useDispatch } from 'react-redux'
import { setActiveGallery } from 'features/config/configSlice'

import { useLocation } from 'react-router-dom'

import './galleryPlayers.scss'

const responsive: Responsive = {
    1024: { items: 5 },
    768: { items: 4 },
    576: { items: 1 },
}

export const GalleryPlayers = () => {
    //    const { Id } = useParams()
    const location = useLocation()
    console.log(location.pathname)
    // исходя из пути диспатчится в стор и импортируется массив Players или Merch!
    // соответственно надо это сделать через хук useEffect или useLayoutEffect еще до рендеринга самого комнпонента!

    // TODO: Добавить получение категорий не через названия, а через массив с ссылками.
    // const TITLE_OF_BOOK_CATEGOTIES = ['JavaScript']

    // const books = useAppSelector(selectCategoryPreviewBooks)

    // надо убрать все выводы в консоль тут и еще в компоненте gallery

    const loading = useAppSelector(selectCategoryPreviewLoading)
    const error = useAppSelector(selectCategoryPreviewError)
    // const dispatch = useAppDispatch()

    const { showBoundary } = useErrorBoundary()
    const matches = useMediaQuery(MAX_WIDTH_SM)

    // useEffect(() => {
    //     TITLE_OF_BOOK_CATEGOTIES.forEach((title) =>
    //         dispatch(fetchCategoryPreview(title))
    //     )
    // }, [])

    // useEffect(() => {
    //     TITLE_OF_BOOK_CATEGOTIES.forEach((title) =>
    //         dispatch(fetchCategoryPreview(title))
    //     )
    // }, [])

    const dispatch1 = useDispatch()

    useEffect(() => {
        dispatch1(setActiveGallery('Players'))
    }, [])

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
        return ['Игроки'].map((titleCategory) => (
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
                    {renderMerchPlayer(Players)}
                </Carousel>
            </ProductСategory>
        ))
    }

    const loaderCategories = ['Игроки'].map((titleCategory) => (
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
