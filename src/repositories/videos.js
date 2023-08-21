import config from "../config";

// const URL_VIDEOS = window.location.hostname.includes("localhost")
//   ? `${config.URL_BACKEND}/videos`
//   : `${config.URL_BACKEND}/videos.json`;

const URL_VIDEOS = `${config.URL_BACKEND}/videos.json`;

async function create(objetoDoVideo) {
  try {
    const respostaDoServidor = await fetch(`${URL_VIDEOS}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(objetoDoVideo),
    });

    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      console.log("dados cadastrados com susesso", resposta);
      return resposta;
    }

    if (respostaDoServidor.status == 401) {
      console.log("Desculpe, mas você não tem acesso para cadastrar novos vídeos.");
    }
  } catch (error) {
    console.log(error);
    alert("Não foi possível cadastrar os dados.");
    throw new Error(error);
  }
}

async function getAll() {
  try {
    const respostaDoServidor = await fetch(`${URL_VIDEOS}`);
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }
  } catch (error) {
    throw new Error("Não foi possível pegar os dados.", error);
  }
}

export default {
  create,
  getAll,
};
