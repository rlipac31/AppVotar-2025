import Image from 'next/image';

const SafeImage = ({ src, alt, ...props }) => {
  // Normaliza la URL
  const normalizedSrc = src
    ? src.replace('http://', 'https://').replace('.jpg.jpg', '.jpg')
    : '/placeholder.jpg';

  return (
    <Image
      src={normalizedSrc}
      alt={alt}
      {...props}
      onError={(e) => {
        e.target.src = '/placeholder.jpg'; // Fallback para imágenes rotas
      }}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};

export default SafeImage
//