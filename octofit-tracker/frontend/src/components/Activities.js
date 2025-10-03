import React, { useEffect, useState } from 'react';

const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;


function Activities() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('Endpoint Activities:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Dados Activities:', results);
      })
      .catch(err => console.error('Erro ao buscar Activities:', err));
  }, []);

  return (
    <div className="card shadow">
      <div className="card-body">
        <h2 className="card-title">Atividades</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) && data.map((item, idx) => (
                <tr key={item.id || idx}>
                  <td>{item.id || idx}</td>
                  <td>{item.name || JSON.stringify(item)}</td>
                  <td>
                    <button className="btn btn-info btn-sm">Ver</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Activities;
