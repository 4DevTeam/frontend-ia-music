import { uploadMusic } from "~/api/music"

export const actions = {
    async uploadSong ({ commit }, payload) {
        const formData = new FormData()
        formData.append('music', payload.data)
        const res = await uploadMusic(formData)
        return res
    }
}