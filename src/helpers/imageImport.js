// Importa todas as imagens no diretório assets/images
const images = import.meta.glob('../assets/img-carrossel/*.{heic,jpg}');

// Resolve os módulos (de forma assíncrona) para obter os URLs
const loadImagePaths = async () => {
  const imageUrls = await Promise.all(
    Object.values(images).map((loader) => loader()) // Carrega os módulos
  );
  return imageUrls;
};

export default loadImagePaths;
