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

  useEffect(() => {
    videosRepository.getAll().then((videos) => {
      // console.log("videos:", videos);
      setVideos(videos);
    });

    categoriasRepository.getAll().then((categorias) => {
      // console.log("categorias:", categorias);
      setCategorias(categorias);
    });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {categorias.length === 0 && <Loader />}

      {categorias.map((categoria, indice) => {
        if (indice === 0) {
          const bannerVideo = videos?.filter(
            (video) => video.categoriaId === categorias[indice].id
          )[indice];
          return (
            <div key={categoria.id}>
              <BannerMain videoTitle={bannerVideo?.titulo} url={bannerVideo?.url} />
              <Carousel
                ignoreFirstVideo
                category={categorias[indice]}
                categoryVideos={videos.filter(
                  (video) => video.categoriaId === categorias[indice].id
                )}
              />
            </div>
          );
        }

        return (
          <div key={categorias[indice].id}>
            <Carousel
              category={categorias[indice]}
              categoryVideos={videos.filter(
                (video) => video.categoriaId === categorias[indice].id
              )}
            />
          </div>
        );
      })}
    </PageDefault>
  );
}

export default Home;
