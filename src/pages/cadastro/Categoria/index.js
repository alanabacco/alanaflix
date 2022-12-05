import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField, { FormFooter } from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";
import { URL_CATEGORIES } from "../../../repositories/categorias";
import styled from "styled-components";
import categoriasRepository from "../../../repositories/categorias";

const Categories = styled.div`
  line-height: 1.7em;
  text-align: center;

  ul {
    list-style-type: none;
  }
`;

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: "",
    descricao: "",
    cor: "",
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch(URL_CATEGORIES).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([...resposta]);
    });
  }, []);

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
              descricao: values.descricao,
              cor: values.cor,
            })
            .then(() => {
              // console.log("Categoria cadastrada com sucesso");
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
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
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

      {categorias.length === 0 && <div>Carregando...</div>}

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
