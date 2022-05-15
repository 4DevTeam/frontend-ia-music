import request from './api'

export const uploadMusic = data => {
    return request({
        url: '/music/song',
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        data
    })
}