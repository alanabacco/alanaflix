import config from "../config";

export const URL_CATEGORIES = window.location.hostname.includes("localhost")
  ? `${config.URL_BACKEND}/categorias`
  : `${config.URL_BACKEND}/categorias.json`;

function create(objetoDaCategoria) {
  return fetch(`${URL_CATEGORIES}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objetoDaCategoria),
  }).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }
    throw new Error("Não foi possível cadastrar os dados.");
  });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error("Não foi possível pegar os dados.");
  });
}

export default {
  create,
  getAll,
};
