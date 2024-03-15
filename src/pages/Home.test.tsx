import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

//?  no curso esta usando useHistory no entanto a partir da  react-router-dom v6  ele nao pertence ao react-router-dom, assim utiliza o navigate, e tambem tive que usar o MemoryRouter no lugar do BrwoserRouter

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Home", () => {
  it("Deve informar o usuário e ser redirecionado para a página de perfil", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    //expect(screen.getByText("Login")).toBeInTheDocument();
    const btn = screen.getByRole("button", { name: "Entrar" });

    fireEvent.click(btn);
    expect(mockNavigate).toHaveBeenCalledWith("/perfil");
  });
});
