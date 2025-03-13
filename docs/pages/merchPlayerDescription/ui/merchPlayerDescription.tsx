import { useEffect, useState } from 'react'
import { useErrorBoundary } from 'react-error-boundary'
import { useParams } from 'react-router-dom'
import {
    fetchBookDescription,
    selectBookDescriptionError,
    selectBookDescriptionLoading,
} from 'entities/book/bookDescripton'
import { usePrevious } from 'shared/lib/state'
import { useAppDispatch, useAppSelector } from 'shared/lib/store'
import { Breadcrumbs } from 'shared/ui/breadcrumbs'
import { LoaderBookDescription } from 'shared/ui/loaders/loaderBookDescription'
import { BookDetails } from 'widgets/bookDetails'
import { RulesText } from 'shared/ui/rulesText'
import { MerchPlayerDetails } from 'widgets/merchPlayerDetails'

import './merchPlayerDescription.scss'

export const MerchPlayerDescription = () => {
    const Id = useParams()
    // console.log('Привет!')
    // console.log('Параметры' + Id)
    // let idd =  Number(Id ?? 0) + 1
    // const loading = useAppSelector(selectBookDescriptionLoading)
    // const error = useAppSelector(selectBookDescriptionError)
    // const dispatch = useAppDispatch()
    const { showBoundary } = useErrorBoundary()

    // const [isFirstLoad, setIsFirstLoad] = useState(true)
    // const prevLoading = usePrevious(loading)

    // useEffect(() => {
    //     if (bookId) dispatch(fetchBookDescription(bookId))
    // }, [bookId])

    // if (prevLoading === true && loading === false && isFirstLoad) {
    //     setIsFirstLoad(false)
    // }

    // if (loading) return <LoaderBookDescription />
    // if (error && !isFirstLoad) {
    //     showBoundary(error)
    // }

    return (
        <div className='book-description _container'>
            <Breadcrumbs />
            <div> Тут описание мерча или игрока</div>
            <MerchPlayerDetails />
        </div>
    )
}
