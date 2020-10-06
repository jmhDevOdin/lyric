// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'https://lyric-2d774.web.app/';
const clientId = '85162edba7ba4546a05a1fa4ea168f40';

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
];

export const getTokenFromUrl = () => {
    // Parse url to get Spotify access token
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;