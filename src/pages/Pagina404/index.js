import PageDefault from "../../components/PageDefault";

function Pagina404() {
  return (
    <PageDefault>
      <div style={{ textAlign: "center" }}>
        <h1>404 - Página não encontrada</h1>
        <iframe
          title="Jogo da Hipstar"
          style={{ width: "80vw", height: "80vh" }}
          src="https://editor.p5js.org/alanabacco/embed/giJNx5K3w"
        />
        <p>Jogo criado na #ImersãoGameDev #Alura</p>
      </div>
    </PageDefault>
  );
}

export default Pagina404;
