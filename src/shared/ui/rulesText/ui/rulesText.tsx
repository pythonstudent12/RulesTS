// import { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import clsx from 'clsx'
// import { Author } from 'entities/author'
// import { selectBookDescriptionBook } from 'entities/book/bookDescripton'
// import { AddToCart } from 'features/cart'
// import defaultImageBook from 'shared/assets/images/defaultImage.png'
// import { PRICE_OF_FREE_BOOK } from 'shared/consts'
// import { useAppSelector } from 'shared/lib/store'
// import { LoaderImage } from 'shared/ui/loaders/loaderImage'
// import { Price } from 'shared/ui/price'
// import { Rating } from 'shared/ui/rating'
// import { Title } from 'shared/ui/title'

import './rulesText.scss'

export const RulesText = () => {
    //  тут надо поработать над оформлением, в том числе и для мобилы!
    // при загрузке надо вывести другой лоадер, а не скелетон от галереи!!!
    // поменять в футере значок гита на логотип point.js (сделано!!!)
    // локализацию сделать!

    // const location = useLocation()
    // const [loadingImage, setLoadingImage] = useState(true)

    // const book = useAppSelector(selectBookDescriptionBook)

    // const onLoadedImage = (): void => {
    //     setLoadingImage(false)
    // }

    // const {
    //     image = defaultImageBook,
    //     title,
    //     subtitle,
    //     authors,
    //     publisher,
    //     isbn10,
    //     isbn13,
    //     pages,
    //     year,
    //     rating,
    //     desc,
    //     url,
    //     price,
    // } = book

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
                {/* {loadingImage && <LoaderImage height={400} width={300} />} */}
                {/* <div className='book-details__wrapper-image'>
                    // {price === PRICE_OF_FREE_BOOK && (
                    //     <div className='book-details__label-info'>FREE</div>
                    // )}

                    {loadingImage && <LoaderImage height={400} width={300} />}
                    // <img
                    //     src={image}
                    //     loading='lazy'
                    //     className={clsx(
                    //         'book-details__image',
                    //         loadingImage && 'book-details__image_hidden'
                    //     )}
                    //     alt='Book cover.'
                    //     onLoad={onLoadedImage}
                    // />
                </div> */}

                {/* <div className='book-details__info'>
                    <Rating
                        value={Number(rating)}
                        className='book-details__rating'
                    />
                    <h1 className='book-details__title'>{title}</h1>
                    {subtitle && (
                        <h2 className='book-details__subtitle'>{subtitle}</h2>
                    )}
                    <h3 className='book-details__authors'>{linksToAuthors}</h3>

                    <ul className='book-details__info-list'>
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
                    </ul>

                    <div className='book-details__price'>
                        Price: <Price>{price}</Price>
                    </div>

                    {actionButtons}
                </div> */}

                {/* <div className='book-details__wrapper-authors'>
                    <Author authors={authorsArr} />
                </div> */}
            </div>

            <div className='book-details__desc'>
                {/* <Title className='book-details__desc-title'>Description</Title> */}

                {/* {desc} */}
                <div className='book-details__desc-link'>
                    🧟 Zombie Tap Это увлекательная MMORPG play to earn игра с
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
                    лайфхаки, знакомства, боты). 📖 База данных
                    (https://miner.pointjs.ru/db/index.html) Информация о мобах,
                    луте и проценте дропа. 💰 Токен игры $ZMBT уже торгуется на
                    бирже Coub. Общайтесь, знакомьтесь, ебитес, прокачивайте и
                    продавайте вещи, объединитесь в кланы и т.д 🎮 Как играть 🎮
                    Когда вы тапаете по мозгу, зомби может попасть по нему
                    (персонаж делает анимацию удара и вы видите урон в
                    соответствии вашей силе, оружия, феи, волка и других
                    усилителей) или может промахнуться (Miss). Чем лучше оружие,
                    тем чаще вы попадаете и тем больше шанс что выпадет редкая
                    вещь. В момент удара зомби происходит критический удар и вам
                    может выпасть редкая вещь. Шанс крит. удара можно увеличить
                    купив зелье в магазине. Подробнее о шансе дропа предметов вы
                    можете узнать в базе данных игры
                    (https://miner.pointjs.ru/db/index.html). Зомби, как и любой
                    ребенок, не может долго стоять на месте и иногда совершает
                    смешную анимацию, часто сбивая крит. удар. Это нормально. По
                    мере того как зомби учится, он будет делать это реже 😊 ❗️Не
                    забудьте нажать на выбитую вами вещь чтобы ее подобрать. На
                    это у вас есть 3 секунды. Да - это не НОТКОИН и не Хомяк.
                    Тут придется думать. ❗️Зомби голодает. Полное восстановление
                    энергии 16 минут. Чтобы покормить зомби, перетащите на него
                    из инвентаря еду (из первых пяти ячеек что дублируются на
                    главном экране). Кормите его выбитым или произведённым мясом
                    и другими вкусняшками. Зомби ест все... Так что внимательно,
                    не скормите ему квестовую вещь. 🏪 Ежедневные задания (сброс
                    в 03:00 по МСК) 🏪 - Призови 🪱 50 раз. Тут все понятно.
                    Кликни на червя 50 раз. - Призови 🐺 4 раза. Подсказка. Респ
                    не прокаченного волка 2 часа. Учтите это, чтобы правильно
                    рассчитать время вызова и уложиться за день. - Пригласи 👫 .
                    Если за день по вашей ссылке присоединиться хотя бы один
                    друг вы получите бонус. ❗️Задания и другие вещи будут
                    зачтены только тогда когда вы ударите по мозгу. Тоесть
                    стоять АФК не получиться. Удар (попадание) по мозгу является
                    подтверждением вашей игры и борьбы с ботами . 🧠 Мирные
                    умения 🧠 Очки мирных умений даются за активность ваших
                    рефералов. Поэтому смысла заводить ботов для этого дела нет.
                    Если только вы за них играть не собираетесь тоже... Эти очки
                    нужны, чтобы заниматься мирными умениями в игре такими как:
                    кулинария, производство, траление, изучать навыки, а также
                    прокачивать персонажу ловкость, выносливость, точность и
                    т.д. лишний опыт мирных умений можно обменять на игровые
                    деньги у призрачного торговца. ❗️ Блокировка и правила ❗️ В
                    отличии от $NOT Coin, Хомяков и других монет, которые ни чем
                    кроме игры (если это можно было назвать игрой) не
                    обусловлены и не имеют ценности, тут вы зарабатываете
                    реальную монету $PJS, которая обусловлена игровым движком
                    PointJS, средой разработки 2D игр PointJS IDE,
                    образовательным проектом Mult-uroki и инфраструктурой,
                    созданной мной за 12 лет. Поэтому давайте не нарушать
                    правила и относиться друг к другу честно. Боты, автокликеры,
                    игра через эмуляторы (браузеры) МЫШКОЙ, взлом исходного кода
                    игры запрещены. Сразу Бан. Первая разблокировка платная.
                    Вторая - пожизненно. Обратите внимание, мы говорим про это
                    заранее и открыто, в отличии от NOT Coin, которые уже по
                    факту прохождения игры списали доход от двойных кликов игре,
                    про которые не было сказано ни слова! В Zombie TAP вы можете
                    жать как угодно. Двойные клики в игре отключены технически!
                    По вопросам разблокировки @multuroki 💲 Реклама: 💲 В нашей
                    игре нет рекламы и тут вы её не увидите. Заказать рекламу
                    также не получится. Но у нас есть интернет-магазин предметов
                    игры. ❗️Если в течении полу года вы не заходите в игру, ваш
                    аккаунт будет удален ❗️ Если игра не запускается, значит
                    время прошлой игровой сессии истекло. Вызовите из меню бота
                    команду старт заново
                </div>
                {/* <a
                        href={url}
                        target='_blank'
                        className='book-details__desc-link'
                        rel='noreferrer'>
                        Read more
                    </a> */}
            </div>
        </div>
    )
}
