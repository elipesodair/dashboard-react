import React, { useState } from 'react';

function LabFiltro({ ciclos, filtroescolha, filtro, escolha, indice, data }) {

  function mostraTestes(escolhaBusca) {
    console.log(escolhaBusca);
    buscarTestes(escolhaBusca);
  }

  function buscarTestes(escolhaBusca) {
    for (var i = 0; i < ciclos.length; i++) {
      if (escolhaBusca === ciclos[i].key) {
        escolha(escolhaBusca)
        indice(i)
        data(ciclos[i])
        console.log('Mostrar dados da ' + escolhaBusca);
        return
      } else if (i === ciclos.length - 1) {
        alert('Valor não encontrado!')
        return
      } else {
        console.log('Diferente');
        continue
      }
    }
  }

  return (
    <select
      class="form-select form-control form-select-lg mb-3  table-bordered col-md-12"
      aria-label="form-select-lg example"
      onChange={(c) => {
        mostraTestes(c.target.value);
      }
      }
    >
      {filtroescolha}
      <option>
        Buscar por:
            </option>

      {filtro.map((c) => (
        <option className="table-bordered" >
          {c.key}
        </option>
      ))
      }

    </select>
  );
};

export default LabFiltro;
