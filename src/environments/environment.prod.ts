export const environment = {
  production: true
};


export const SpotifyConfiguration = {
  clientId: 'a9764733eb644856bca9906179c44358',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'https://angular-demo-lie1cnd17.vercel.app/login/',
  scopes: [
    "user-read-currently-playing", 
    "user-read-recently-played", 
    "user-read-playback-state", 
    "user-top-read", 
    "user-modify-playback-state", 
    "user-library-read", 
    "playlist-read-private", 
    "playlist-read-collaborative" 
  ]
}