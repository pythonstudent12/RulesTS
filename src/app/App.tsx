import { Providers } from './providers'
// import { LayerProvider } from 'entities/theme/config/layerContext'
import { AppRouter } from './routers'

function App() {
    return (
        <Providers>
            <AppRouter />
        </Providers>
    )
}

export default App
