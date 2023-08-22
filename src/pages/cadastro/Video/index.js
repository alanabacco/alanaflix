import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import useForm from "../../../hooks/useForm";
import { FormFooter } from "../../../components/FormField/styles";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import videosRepository from "../../../repositories/videos";
import categoriasRepository from "../../../repositories/categorias";

function CadastroVideo() {
  const [categorias, setCategorias] = useState([]);
  const [categoryTitles, setCategoryTitles] = useState([]);

  const { handleChange, values } = useForm({
    titulo: "",
    url: "",
    categoria: "",
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(
        Object.entries(categoriasFromServer).map((categoria) => categoria[1])
      );
      setCategoryTitles(
        Object.entries(categoriasFromServer).map((categoria) => categoria[1]?.titulo)
      );
    });
  }, []);

  const navigate = useNavigate();

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const categoriaEscolhida = categorias.find(
            (categoria) => categoria.titulo === values.categoria
          );

          videosRepository
            .create({
              titulo: values.titulo,
              url: values.url,
              categoriaTitulo: categoriaEscolhida.titulo,
            })
            .then(() => {
              // console.log("Video Cadastrado com sucesso");
              navigate("/");
            });
        }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
          required
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
          required
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
          required
        />

        <FormFooter>
          <Button type="submit">Cadastrar</Button>
          <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
        </FormFooter>
      </form>
    </PageDefault>
  );
}

export default CadastroVideo;
