import config from "../config";

// const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

// const URL_VIDEOS = window.location.hostname.includes("localhost")
//   ? `${config.URL_BACKEND}/videos`
//   : `${config.URL_BACKEND}/videos.json`;

const URL_VIDEOS = `${config.URL_BACKEND}/videos.json`;

async function create(objetoDoVideo) {
  const respostaDoServidor = await fetch(`${URL_VIDEOS}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objetoDoVideo),
  });
  if (respostaDoServidor.ok) {
    const resposta = await respostaDoServidor.json();
    return resposta;
  }
  throw new Error("Não foi possível cadastrar os dados.");
}

async function getAll() {
  const respostaDoServidor = await fetch(`${URL_VIDEOS}`);
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
