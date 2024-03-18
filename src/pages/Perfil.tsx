import { Layout } from "../components/Layout/Layout";
import { Table } from "../components/Table/Table";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Perfil: React.FC = () => {
  const navigate = useNavigate();
  const logation = useLocation();

  const { user } = useParams<{ user: string }>();

  useEffect(() => {
    if (user !== "clayton") {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Layout>
      <Table />
    </Layout>
  );
};
export default Perfil;
