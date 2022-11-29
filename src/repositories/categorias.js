import config from '../config';

export const URL_CATEGORIES = window.location.hostname.includes("localhost")
  ? `${config.URL_BACKEND}/categorias`
  : `${config.URL_BACKEND}/categorias.json`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados.');
    });
}

// function getAllWithVideos() {
//   return fetch(`${URL_CATEGORIES}?_embed=videos`)
//     .then(async (respostaDoServidor) => {
//       if (respostaDoServidor.ok) {
//         const resposta = await respostaDoServidor.json();
//         return resposta;
//       }

//       throw new Error('Não foi possível pegar os dados.');
//     });
// }

export default {
  getAll,
};
