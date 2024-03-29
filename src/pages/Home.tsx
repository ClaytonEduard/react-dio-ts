import { MouseEvent, useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";

// chamando a gitApi
import gitApi from "../api/github";

const Home = () => {
  const [user, setUser] = useState("");

  // verficando usuario invalido
  const [invalid, setInvalid] = useState(false);

  //* instanciar o useHistory
  //?  no curso esta usando useHistory no entanto a partir da  react-router-dom v6  ele nao pertence ao react-router-dom, assim utiliza o navigate

  const history = useNavigate();

  // funcao de redirecionamento
  const handleClick = async (event: MouseEvent) => {
    event.preventDefault();
    if (user.length === 0) {
      return alert("Por favor informe um usuário");
    }
    gitApi
      .getUser(user)
      .then((response) => history(`/${response.login}`))
      .catch((error) => {
        setInvalid(true);
      });
  };

  return (
    <Layout>
      <div className="col-4 m-auto">
        <h1>Login</h1>
        <div className="mb-3">
          <label htmlFor="gitUser" className="form-label">
            Usuário do github
          </label>
          <input
            type="text"
            className="form-control"
            id="gitUser"
            aria-label="User"
            aria-describedby="userHelp"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <div id="userHelp" className="form-text">
            Informe seu usuário do gitHub
          </div>
          {invalid && (
            <div id="userHelp" className="form-text text-danger">
              Usuário inválido
            </div>
          )}
        </div>
        <button onClick={handleClick} type="button" className="btn btn-primary">
          Entrar
        </button>
      </div>
    </Layout>
  );
};
export default Home;
