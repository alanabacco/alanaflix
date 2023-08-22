import { useEffect, useState } from "react";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import PageDefault from "../../components/PageDefault";
import videosRepository from "../../repositories/videos";
import categoriasRepository from "../../repositories/categorias";
import { Loader } from "../../components/Loader";

function Home() {
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [firstCategoriaRef, setFirstCategoriaRef] = useState("");

  useEffect(() => {
    videosRepository.getAll().then((videos) => {
      setVideos(videos);
    });

    categoriasRepository.getAll().then((categorias) => {
      setCategorias(categorias);
      setFirstCategoriaRef(Object.entries(categorias)[0]?.[0]);
    });
  }, []);

  function videosPorCategoria(videosArr, categoriaRef, categor) {
    const videos = videosArr.filter(
      (video) => video[1]?.categoriaTitulo === categor[categoriaRef]?.titulo
    );
    const arrayVideos = videos.map((video) => video[1]);
    return arrayVideos;
  }

  return (
    <PageDefault paddingAll={0}>
      {categorias.length === 0 && <Loader />}

      {Object.entries(categorias).map((categoria, indice) => {
        const categoriaRef = categoria[0];
        if (categoriaRef === firstCategoriaRef) {
          const videosPrimeiraCategoria = videosPorCategoria(
            Object.entries(videos),
            categoriaRef,
            categorias
          );
          const bannerVideo = videosPrimeiraCategoria[0];

          return (
            <div key={categoria.titulo}>
              <BannerMain videoTitle={bannerVideo?.titulo} url={bannerVideo?.url} />
              <Carousel
                ignoreFirstVideo
                category={categorias[categoriaRef]}
                categoryVideos={videosPrimeiraCategoria}
              />
            </div>
          );
        }

        return (
          <div key={categorias[categoriaRef]?.titulo}>
            <Carousel
              category={categorias[categoriaRef]}
              categoryVideos={videosPorCategoria(
                Object.entries(videos),
                categoriaRef,
                categorias
              )}
            />
          </div>
        );
      })}
    </PageDefault>
  );
}

export default Home;
