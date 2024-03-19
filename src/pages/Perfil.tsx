import { Layout } from "../components/Layout/Layout";
import { Table } from "../components/Table/Table";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import gitApi from "../api/github";
import languagenDetactionApi from "../api/languagenDetaction";

interface Curso {
  tech: string;
  tipo: string;
}

const Perfil: React.FC = () => {
  const navigate = useNavigate();
  const logation = useLocation();
  const { user } = useParams<{ user: string }>();
  const [cursos, setCursos] = useState<Curso[]>([]);
  useEffect(() => {
    gitApi
      .getUser(user)
      .then(async (response) => {
        const bioData = response.bio;
        const cursosFinais: Curso[] = detectarCursos(bioData);
        setCursos(cursosFinais);
      })
      .catch((error) => {
        console.log(error);
        navigate("/");
      });
  }, [user, navigate]);

  const detectarCursos = (bioData: string): Curso[] => {
    const frontendLanguages = [
      "JavaScript",
      "CSS",
      "HTML5",
      "Bootstrap",
      "React",
      "Angular",
      "Vue.js",
      "Sass",
      "Less",
      "TypeScript",
      "jQuery",
      "Ember.js",
      "Backbone.js",
      "Handlebars",
      "GraphQL",
    ];

    const backendLanguages = [
      "Java",
      "Spring Boot",
      "NodeJS",
      "SQL",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Express.js",
      "Django",
      "Flask",
      "Ruby on Rails",
      "ASP.NET",
      "PHP",
      "Symfony",
      "Laravel",
      "Python",
      "Go",
      "C#",
      "REST API",
      "GraphQL",
    ];

    const cursos: Curso[] = bioData
      .split(", ")
      .map((lang) => {
        if (frontendLanguages.includes(lang)) {
          return {
            tech: lang,
            tipo: "Frontend",
          };
        } else if (backendLanguages.includes(lang)) {
          return {
            tech: lang,
            tipo: "Backend",
          };
        }
        // Se não for frontend nem backend, retornamos null ou algum valor para indicar que não foi encontrado
        return null;
      })
      .filter((curso) => curso !== null) as Curso[];

    return cursos;
  };

  return (
    <Layout>
      <Table data={cursos} />
    </Layout>
  );
};
export default Perfil;
