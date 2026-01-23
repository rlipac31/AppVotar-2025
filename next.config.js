module.exports = {
  reactStrictMode: true,
  images: {
   // domains: ['res.cloudinary.com'], // Solución más directa
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // Permite cualquier path de Cloudinary
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      }
    ],
  },
  devIndicators: {
    appIsrStatus: false, // Quita el indicador de regeneración estática
  },
};
