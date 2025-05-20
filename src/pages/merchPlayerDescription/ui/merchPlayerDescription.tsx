import { Breadcrumbs } from 'shared/ui/breadcrumbs'
import { MerchPlayerDetails } from 'widgets/merchPlayerDetails'

import './merchPlayerDescription.scss'

export const MerchPlayerDescription = () => {
    return (
        <div className='book-description _container'>
            <Breadcrumbs />
            {/* <div> Тут описание мерча или игрока</div> */}
            <MerchPlayerDetails />
        </div>
    )
}
