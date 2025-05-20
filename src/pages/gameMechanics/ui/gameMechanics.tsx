import { ProductСategory } from 'widgets/productСategory'
import { GameMechanicsDetails } from 'widgets/gameMechanicsDetails'
import { Breadcrumbs } from 'shared/ui/breadcrumbs'
import './gameMechanics.scss'

export const GameMechanics = () => {
    const renderCategories = () => {
        return ['Игровые механики'].map((titleCategory) => (
            <ProductСategory
                key={titleCategory}
                title={titleCategory}
                className='home-page__category'>
                <GameMechanicsDetails />
            </ProductСategory>
        ))
    }

    return (
        <div className='book-description _container'>
            <Breadcrumbs />
            {renderCategories()}
        </div>
    )
}
