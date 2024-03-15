import React from "react";

interface ITech {
  tech: string;
  tipo: string;
}

interface ITable {
  data: ITech[];
}

export const Table = ({ data }: ITable) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Tech</th>
          <th scope="col">Tipo</th>
        </tr>
      </thead>
      <tbody>
        {data.map((tech, index) => {
          return (
            <tr key={index}>
              <td>{tech.tech}</td>
              <td>{tech.tipo}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
