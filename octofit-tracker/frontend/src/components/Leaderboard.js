import React, { useEffect, useState } from 'react';

const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;


function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('Endpoint Leaderboard:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Dados Leaderboard:', results);
      })
      .catch(err => console.error('Erro ao buscar Leaderboard:', err));
  }, []);

  return (
    <div className="card shadow">
      <div className="card-body">
        <h2 className="card-title">Placar de Líderes</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Pontos</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) && data.map((item, idx) => (
                <tr key={item.id || idx}>
                  <td>{item.id || idx}</td>
                  <td>{item.name || item.username || JSON.stringify(item)}</td>
                  <td>{item.points || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
