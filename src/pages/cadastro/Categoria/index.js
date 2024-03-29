import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import { FormFooter } from "../../../components/FormField/styles";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import { Loader } from "../../../components/Loader";
import useForm from "../../../hooks/useForm";
import { URL_CATEGORIES } from "../../../repositories/categorias";
import categoriasRepository from "../../../repositories/categorias";
import { Categories } from "./styles";

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: "",
    cor: "",
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch(URL_CATEGORIES).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([...Object.entries(resposta).map((categoria) => categoria[1])]);
      console.log(categorias);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.titulo}</h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([...categorias, values]);

          clearForm();

          categoriasRepository
            .create({
              titulo: values.titulo,
              cor: values.cor,
            })
            .then(() => {
              // console.log("Categoria cadastrada com sucesso");
              navigate("/cadastro/video");
            });
        }}
      >
        <FormField
          label="Título da Categoria"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
          required
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <FormFooter>
          <Button type="submit">Cadastrar</Button>
          <Link to="/">Ir para home</Link>
        </FormFooter>
      </form>

      {categorias.length === 0 && <Loader />}

      <Categories>
        <h2>Categorias Cadastradas</h2>
        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.titulo}`}>{categoria.titulo}</li>
          ))}
        </ul>
      </Categories>
    </PageDefault>
  );
}

export default CadastroCategoria;
