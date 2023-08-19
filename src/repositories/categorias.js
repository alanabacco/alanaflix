import config from "../config";

// export const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

// export const URL_CATEGORIES = window.location.hostname.includes("localhost")
//   ? `${config.URL_BACKEND}/categorias`
//   : `${config.URL_BACKEND}/categorias.json`;

export const URL_CATEGORIES = `${config.URL_BACKEND}/categorias.json`;

async function create(objetoDaCategoria) {
  const respostaDoServidor = await fetch(`${URL_CATEGORIES}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objetoDaCategoria),
  });
  if (respostaDoServidor.ok) {
    const resposta = await respostaDoServidor.json();
    return resposta;
  }
  throw new Error("Não foi possível cadastrar os dados.");
}

async function getAll() {
  const respostaDoServidor = await fetch(`${URL_CATEGORIES}`);
  if (respostaDoServidor.ok) {
    const resposta = await respostaDoServidor.json();
    return resposta;
  }
  throw new Error("Não foi possível pegar os dados.");
}

export default {
  create,
  getAll,
};
