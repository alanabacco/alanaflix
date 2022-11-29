import React, { useEffect, useState } from "react";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import PageDefault from "../../components/PageDefault";
import videosRepository from "../../repositories/videos";
import categoriasRepository from "../../repositories/categorias";

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
      {categorias.length === 0 && <div>Carregando...</div>}

      {categorias.map((categoria, indice) => {
        if (indice === 0) {
          const firstCategory = 1;
          const bannerVideo = videos?.filter(
            (video) => video.categoriaId === firstCategory
          )[indice];
          return (
            <div key={categoria.id}>
              <BannerMain videoTitle={bannerVideo?.titulo} url={bannerVideo?.url} />
              <Carousel
                ignoreFirstVideo
                category={categorias[indice]}
                categoryVideos={videos.filter(
                  (video) => video.categoriaId === firstCategory
                )}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categorias[indice].id}
            category={categorias[indice]}
            categoryVideos={videos.filter((video) => video.categoriaId === indice + 1)}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
