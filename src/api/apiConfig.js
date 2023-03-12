const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '55613b662d1a51c5cdb606313b3ad0c3',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;