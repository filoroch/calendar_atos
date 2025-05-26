import React from "react";

// Dias da semana em português
const diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

function CalendarMonth() {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = hoje.getMonth(); // Janeiro = 0

  const primeiroDia = new Date(ano, mes, 1);
  const ultimoDia = new Date(ano, mes + 1, 0);

  const diasNoMes = ultimoDia.getDate();
  const comecaEm = primeiroDia.getDay(); // 0 = domingo

  const dias = [];

  // Adiciona espaços vazios até o primeiro dia do mês alinhar
  for (let i = 0; i < comecaEm; i++) {
    dias.push(null);
  }

  // Adiciona os dias reais do mês
  for (let i = 1; i <= diasNoMes; i++) {
    dias.push(i);
  }

  return (
    <div className="max-w-4xl w-full">
      {/* Nome do mês */}
      <h2 className="text-2xl font-bold mb-4 text-center capitalize">
        {hoje.toLocaleString("pt-BR", { month: "long", year: "numeric" })}
      </h2>

      {/* Grade do calendário */}
      <div className="grid grid-cols-7 gap-px bg-gray-300 rounded overflow-hidden">
        {/* Cabeçalho com dias da semana */}
        {diasDaSemana.map((dia) => (
          <div
            key={dia}
            className="bg-white text-center font-semibold text-xs py-2 border-b border-gray-300"
          >
            {dia}
          </div>
        ))}

        {/* Células dos dias */}
        {dias.map((dia, index) => (
          <div
            key={index}
            className="bg-white h-28 border border-gray-300 p-1 relative"
          >
            {dia && (
              <div className="text-xs font-medium text-gray-700">{dia}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarMonth;
