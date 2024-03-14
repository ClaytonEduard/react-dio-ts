import { Layout } from "../components/Layout/Layout";
const Perfil = () => {
  return (
    <Layout>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Tech</th>
            <th scope="col">Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React</td>
            <td>Frontend</td>
          </tr>
          <tr>
            <td>Angular</td>
            <td>Frontend</td>
          </tr>
          <tr>
            <td>Node</td>
            <td>Backend</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default Perfil;
