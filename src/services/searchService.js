import { movieUrl } from '../constants'

export const getMovie = async (title) => {
    let url = `${movieUrl}?s=${title}*&apikey=36aa6321`
    const response = await fetch(url)
    let data = await response.json();
    return data
}