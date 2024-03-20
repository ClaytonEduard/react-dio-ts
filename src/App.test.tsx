import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import gitApi from "./api/github";

describe("App", () => {
  let user = "claytoneduard";

  it("Deve receber os dados na resposta, caso o usuário exista", () => {
    render(<App />);
    jest.spyOn(gitApi, "getUser");

    const input = screen.getByRole("textbox", { name: "User" });

    const btn = screen.getByRole("button", { name: "Entrar" });

    fireEvent.change(input, { target: { value: user } });

    fireEvent.click(btn);

    expect(gitApi.getUser).toHaveBeenCalled();

    const response = gitApi.getUser(user);
    expect(response).toHaveProperty("login");
  });

  it("Não deve receber dados na resposta, caso o usuário não exista", () => {
    user = "clayton00";
    render(<App />);
    jest.spyOn(gitApi, "getUser");

    const input = screen.getByRole("textbox", { name: "User" });

    const btn = screen.getByRole("button", { name: "Entrar" });

    fireEvent.change(input, { target: { value: user } });

    fireEvent.click(btn);

    const response = gitApi.getUser(user);
    expect(response).toBe(undefined);
  });
});
