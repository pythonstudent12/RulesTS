// import { RulesText } from 'shared/ui/rulesText'
import { LootAndMobsBase } from 'entities/lootAndMobsBase'
import { Breadcrumbs } from 'shared/ui/breadcrumbs'
import { ProductСategory } from 'widgets/productСategory'

import './lootAndMobs.scss'

export const LootAndMobs = () => {
    const renderCategories = () => {
        return ['База данных игры'].map((titleCategory) => (
            <ProductСategory
                key={titleCategory}
                title={titleCategory}
                className='home-page__category'>
                <LootAndMobsBase />
            </ProductСategory>
        ))
    }

    // весь компонент в плане css разобрать по косточкам!
    // посмотреть как сделано в компонентах gallery и galleryPlayers!
    return (
        <div className='book-description _container'>
            <Breadcrumbs />
            {renderCategories()}
        </div>
    )
}
