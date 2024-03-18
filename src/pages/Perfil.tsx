import { Layout } from "../components/Layout/Layout";
import { Table } from "../components/Table/Table";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import gitApi from "../api/github";

const Perfil: React.FC = () => {
  const navigate = useNavigate();
  const logation = useLocation();

  const { user } = useParams<{ user: string }>();
  const cursos = [
    {
      tech: "React",
      tipo: "Frontend",
    },
    {
      tech: "Angular",
      tipo: "Frontend",
    },
    {
      tech: "Node",
      tipo: "Backend",
    },
  ];

  useEffect(() => {
    gitApi
      .getUser(user)
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
        navigate("/");
      });
  }, [user, navigate]);

  return (
    <Layout>
      <Table data={cursos} />
    </Layout>
  );
};
export default Perfil;
