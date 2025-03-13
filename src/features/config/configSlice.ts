import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface GalleryState {
    activeGalleryId: string | null
    // Можно добавить другие данные: список галерей, настройки и т.д.
}

const initialState: GalleryState = {
    activeGalleryId: 'Aliens',
}

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        setActiveGallery: (state, action: PayloadAction<string>) => {
            state.activeGalleryId = action.payload
        },
    },
})

export const { setActiveGallery } = gallerySlice.actions
export default gallerySlice.reducer

export const selectActiveGalleryId = (state: RootState) =>
    state.gallery.activeGalleryId
export const selectGalleries = (state: RootState) => state.gallery.galleries
