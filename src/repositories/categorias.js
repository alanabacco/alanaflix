import config from "../config";

// export const URL_CATEGORIES = window.location.hostname.includes("localhost")
//   ? `${config.URL_BACKEND}/categorias`
//   : `${config.URL_BACKEND}/categorias.json`;

export const URL_CATEGORIES = `${config.URL_BACKEND}/categorias.json`;

async function create(objetoDaCategoria) {
  try {
    const respostaDoServidor = await fetch(`${URL_CATEGORIES}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(objetoDaCategoria),
    });

    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      console.log("dados cadastrados com susesso", resposta);
      return resposta;
    }

    if (respostaDoServidor.status == 401) {
      console.log("Desculpe, mas você não tem acesso para cadastrar novas categorias.");
    }
  } catch (error) {
    console.log(error);
    alert("Não foi possível cadastrar os dados.");
    throw new Error(error);
  }
}

async function getAll() {
  try {
    const respostaDoServidor = await fetch(`${URL_CATEGORIES}`);
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
