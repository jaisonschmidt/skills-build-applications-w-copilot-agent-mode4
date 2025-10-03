import React, { useEffect, useState } from 'react';

const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;


function Teams() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('Endpoint Teams:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Dados Teams:', results);
      })
      .catch(err => console.error('Erro ao buscar Teams:', err));
  }, []);

  return (
    <div className="card shadow">
      <div className="card-body">
        <h2 className="card-title">Equipes</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Membros</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) && data.map((item, idx) => (
                <tr key={item.id || idx}>
                  <td>{item.id || idx}</td>
                  <td>{item.name || JSON.stringify(item)}</td>
                  <td>{item.members ? item.members.length : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Teams;
