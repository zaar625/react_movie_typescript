const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "af43ac72d70dd07b3747f0dc7b4a2680",
  language: "ko",
  originalImage: (imgPath: any) =>
    `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: any) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

//https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
//https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
export default apiConfig;
