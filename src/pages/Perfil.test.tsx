import { render, screen } from "@testing-library/react";
import Perfil from "./Perfil";
import { BrowserRouter } from "react-router-dom";

const mockNavigate = jest.fn();

let mockUser = "";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
  useParams: () => ({
    user: mockUser,
  }),
}));

describe("Perfil", () => {
  render(
    <BrowserRouter>
      <Perfil />
    </BrowserRouter>
  );

  it("Deve renderizar a tabela na página caso o usuário seja válido", () => {
    mockUser = "clayton";
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  /* it("Deve redirecionar para Home caso o usuário não seja válido", () => {
    mockUser = "outro-user";
    expect(mockNavigate).toHaveBeenCalled();
  });
 */
});
