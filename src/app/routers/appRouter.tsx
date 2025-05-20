import {
    createHashRouter,
    createRoutesFromElements,
    Link,
    Route,
    RouterProvider,
} from 'react-router-dom'
import { Layout } from 'app/layout'
import clsx from 'clsx'
import { useTheme } from 'entities/theme'
// import { GalleryMerch } from 'pages/gallery'
import { GalleryPlayers } from 'pages/galleryPlayers'
import { GameMechanics } from 'pages/gameMechanics'
// import { LootAndMobs } from 'shared/ui/lootAndMobs'
import { LootAndMobs } from 'pages/lootAndMobs'
// import { RulesText } from 'shared/ui/rulesText'
// import { VideoPlayer } from 'widgets/videoPlayer'
import { MainPage } from 'pages/mainPage'
import { MerchPlayerDescription } from 'pages/merchPlayerDescription'
import { Fallback } from 'shared/ui/fallback'

import { GalleryMerch } from '../../pages/galleryMerch/ui/galleryMerch'

import '../styles/index.scss'

export const AppRouter = () => {
    const { theme } = useTheme()

    const routers = createRoutesFromElements(
        <Route
            path='/'
            element={<Layout />}
            handle={{ crumb: <Link to='/'>Home</Link> }}
            errorElement={<Fallback />}>
            <Route index element={<MainPage />} />
            <Route
                path='books'
                handle={{
                    crumb: <Link to='/books'>Books</Link>,
                }}>
                <Route index element={<GalleryMerch />} />

                <Route
                    path='rules'
                    element={<LootAndMobs />}
                    handle={{
                        crumb: <Link to='/rules'>Loot and Mobs</Link>,
                    }}
                />
            </Route>

            <Route
                path='game'
                element={<GameMechanics />}
                handle={{
                    crumb: <Link to='/game'>Game</Link>,
                }}
            />

            <Route
                path='rules'
                element={<LootAndMobs />}
                handle={{
                    crumb: <Link to='/rules'>Loot and Mobs</Link>,
                }}
            />

            <Route
                path='merch'
                handle={{
                    crumb: <Link to='/merch'>Merch</Link>,
                }}>
                <Route index element={<GalleryMerch />} />

                <Route
                    path='description/:Id'
                    element={<MerchPlayerDescription />}
                    // // loader={() => book.title}
                    // handle={{
                    //     crumb: getDynamicPathForBook,
                    // }}
                />
            </Route>
            <Route
                path='players'
                handle={{
                    crumb: <Link to='/players'>Players</Link>,
                }}>
                <Route index element={<GalleryPlayers />} />
                <Route
                    path='description/:Id'
                    element={<MerchPlayerDescription />}
                    // // loader={() => book.title}
                    // handle={{
                    //     crumb: getDynamicPathForBook,
                    // }}
                />
            </Route>
        </Route>
    )

    const router = createHashRouter(routers, {})

    return (
        <div className={clsx('app', theme)}>
            <RouterProvider router={router} />
        </div>
    )
}
