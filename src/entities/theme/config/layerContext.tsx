import {
    createContext,
    useContext,
    useState,
    useCallback,
    ReactNode,
} from 'react'

export type Layer = {
    id: string
    priority: number
}

export type LayerContextType = {
    registerLayer: (id: string, priority: number) => void
    activeLayers: Layer[]
}

export const LayerContext = createContext<LayerContextType>({
    registerLayer: () => {},
    activeLayers: [],
})

// Добавляем тип для пропсов
type LayerProviderProps = {
    children: ReactNode
}

export const LayerProvider = ({ children }: LayerProviderProps) => {
    const [activeLayers, setActiveLayers] = useState<Layer[]>([])

    // Мемоизируем функцию регистрации
    const registerLayer = useCallback((id: string, priority: number) => {
        setActiveLayers((prev) => {
            const existing = prev.find((l) => l.id === id)
            if (existing?.priority === priority) return prev

            const newLayers = prev.filter((l) => l.id !== id)
            if (priority > 0) {
                newLayers.push({ id, priority })
            }
            return newLayers
        })
    }, [])

    return (
        <LayerContext.Provider
            value={{
                registerLayer,
                activeLayers,
            }}>
            {children}
        </LayerContext.Provider>
    )
}

export const useLayers = () => useContext(LayerContext)
