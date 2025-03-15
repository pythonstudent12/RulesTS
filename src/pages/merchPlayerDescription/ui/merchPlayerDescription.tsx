import { Breadcrumbs } from 'shared/ui/breadcrumbs'
import { MerchPlayerDetails } from 'widgets/merchPlayerDetails'

import './merchPlayerDescription.scss'

export const MerchPlayerDescription = () => {
    // console.log('Привет!')
    // console.log('Параметры' + Id)
    // let idd =  Number(Id ?? 0) + 1
    // const loading = useAppSelector(selectBookDescriptionLoading)
    // const error = useAppSelector(selectBookDescriptionError)
    // const dispatch = useAppDispatch()
    // const { showBoundary } = useErrorBoundary()

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
