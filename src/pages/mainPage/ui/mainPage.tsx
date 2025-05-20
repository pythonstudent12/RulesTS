// import vid1 from 'pages/mainPage/model/vid1.webm'
import top from 'pages/mainPage/model/top.webm'
// import vid2 from 'pages/mainPage/model/vid2.webm'
import { Breadcrumbs } from 'shared/ui/breadcrumbs'
import { PictureRulesText } from 'shared/ui/pictureRulesText'
import { RulesText } from 'shared/ui/rulesText'
import { ProductСategory } from 'widgets/productСategory'
import { VideoModule } from 'widgets/videoPlayer/ui/videoModule'

// import { VideoPlayer } from 'widgets/videoPlayer'
import './mainPage.scss'

export const MainPage = () => {
    const renderCategories = () => {
        return ['Главная'].map((titleCategory) => (
            <ProductСategory
                key={titleCategory}
                title={titleCategory}
                className='home-page__category'>
                <>
                    <RulesText
                        text='🧟 Zombie Tap Это увлекательная MMORPG play to earn игра с
                    возможностью заработка монеты $ZMBT без вложений. Играй не
                    выходя из Telegram. Идея игры Улучшай своего зомби, чтобы
                    зарабатывать больше и быстрее остальных участников. Покупай
                    скины, прокачивай вещи, изучай мирные умения, фарми,
                    продавай редкие вещи, вари зелья, заводи питомцев и
                    объединяйся в гильдии. С чего начать? Когда вы тапаете по
                    мозгу, зомби может попасть (персонаж делает анимацию удара)
                    или промахнуться (Miss). Чем лучше оружие, тем чаще вы
                    попадаете. В момент крит. удара вам может выпасть редкая
                    вещь. Зомби не может долго стоять на месте и иногда
                    совершает смешную анимацию, часто сбивая удар. 💬 Оф. чат
                    игры. (https://t.me/ZombieTap) (прохождение, правила,
                    лайфхаки, знакомства, боты).'
                    />

                    <VideoModule text='8-8-8 На этом видео наши игроки набивают редкие артефакты и всякий лут на четырех телефонах, но в две руки (никакого читерства!)' />
                    <PictureRulesText
                        text='🎮 Как играть 🎮
                    Когда вы тапаете по мозгу, зомби может попасть по нему
                    (персонаж делает анимацию удара и вы видите урон в
                    соответствии вашей силе, оружия, феи, волка и других
                    усилителей) или может промахнуться (Miss). Чем лучше оружие,
                    тем чаще вы попадаете и тем больше шанс что выпадет редкая
                    вещь. В момент удара зомби происходит критический удар и вам
                    может выпасть редкая вещь. Шанс крит. удара можно увеличить
                    купив зелье в магазине. Подробнее о шансе дропа предметов вы
                    можете узнать в базе данных игры'
                        video={top}
                        picture=''
                    />
                    <PictureRulesText text='Просто котик на главной странице' />
                </>
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
