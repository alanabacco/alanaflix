import React, { useLayoutEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useLayoutEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
        console.log(categoriasComVideos[0].videos[0]);
        setDadosIniciais(categoriasComVideos);
      });
    // .catch((err) => {
    //  console.log(err.message);
    // });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Carregando...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;


// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0
// : 
// {cor: 'red', id: 1, link_extra: {…}, titulo: 'Estudos'}
// 1
// : 
// {cor: 'orange', id: 2, titulo: 'Séries para assistir'}
// 2
// : 
// {cor: 'yellow', id: 3, titulo: 'Filmes para assistir'}
// 3
// : 
// {cor: 'green', id: 4, titulo: 'Jogos'}
// 4
// : 
// {cor: 'blue', id: 5, titulo: 'Músicas'}
// 5
// : 
// {cor: 'purple', id: 6, link_extra: {…}, titulo: 'DREAMCATCHER'}


//---------------


// (5) [{…}, {…}, {…}, {…}, {…}]
// 0
// : 
// {titulo: 'Front End', link: 'https://www.alura.com.br/formacao-front-end', cor: '#6BD1FF', link_extra: {…}, videos: Array(7)}
// 1
// : 
// {titulo: 'Back End', cor: '#00C86F', link_extra: {…}, videos: Array(5)}
// 2
// : 
// {titulo: 'Data Science e Inteligência Artificial', cor: '#9cd33b', link_extra: {…}, videos: Array(4)}
// 3
// : 
// {titulo: 'Filmes', cor: 'orange', videos: Array(4)}
// 4
// : 
// {titulo: 'Games', cor: 'red', link_extra: {…}, videos: Array(4)}