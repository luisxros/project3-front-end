const BASE_URL = 'https://api.themoviedb.org/3/trending';

export function getMovieDay() {
    return fetch(BASE_URL + '/movie/day?api_key=1066af0eb8a5037cd726e43f44eb6528').then(res => res.json());
}

export function getTvDay() {
    return fetch(BASE_URL + '/tv/day?api_key=1066af0eb8a5037cd726e43f44eb6528').then(res => res.json());
}