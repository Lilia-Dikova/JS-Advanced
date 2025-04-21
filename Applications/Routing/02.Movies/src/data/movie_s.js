import { get } from './api.js'

export async function getMovies () {
    return get ('/data/movies')
}

export async function getMoviesById (id) {
    return get ('/data/movies/' + id);
}