"use client";

import React, { useState } from "react";
import { PlusCircle } from "lucide-react";

const produtos = [
  { nome: "Camisetas", preco: 129.9 },
  { nome: "Calças", preco: 249.9 },
  { nome: "Bonés", preco: 149.9 },
  { nome: "Meias", preco: 39.9 },
];

export default function Painel4Drip() {
  const [metaMensal, setMetaMensal] = useState<number | "">("");
  const [metaConfirmada, setMetaConfirmada] = useState<number | null>(null);
  const [tarefas, setTarefas] = useState<{ [data: string]: string[] }>({});
  const [dataSelecionada, setDataSelecionada] = useState<string>("");
  const [novaTarefa, setNovaTarefa] = useState<string>("");

  const diasDoMes = Array.from({ length: 31 }, (_, i) => i + 1);
  const mesAtual = new Date().getMonth() + 1;
  const anoAtual = new Date().getFullYear();

  const handleAdicionarTarefa = () => {
    if (!dataSelecionada || !novaTarefa) return;
    const tarefasDoDia = tarefas[dataSelecionada] || [];
    setTarefas({
      ...tarefas,
      [dataSelecionada]: [...tarefasDoDia, novaTarefa],
    });
    setNovaTarefa("");
  };

  const calcularDistribuicao = () => {
    if (!metaConfirmada) return [];
    return produtos.map((prod) => {
      const qtdMensal = Math.floor(metaConfirmada / prod.preco / produtos.length);
      const qtdSemanal = Math.ceil(qtdMensal / 4);
      return { ...prod, qtdMensal, qtdSemanal };
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6 font-sans">
      <h1 className="text-4xl font-bold text-center mb-10 text-green-400 drop-shadow-lg">
        Painel Administrativo 4DRIP
      </h1>

      {!metaConfirmada ? (
        <div className="max-w-md mx-auto bg-zinc-900 rounded-xl p-6 shadow-2xl border border-zinc-700">
          <label className="block text-sm text-gray-300 mb-2 font-medium">
            Qual a sua meta de faturamento mensal? (R$)
          </label>
          <input
            type="number"
            value={metaMensal}
            onChange={(e) => setMetaMensal(Number(e.target.value))}
            placeholder="Ex: 20000"
            className="w-full p-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder-zinc-500 mb-4"
          />
          <button
            onClick={() => metaMensal && setMetaConfirmada(metaMensal)}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition duration-200"
          >
            Confirmar Meta
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {calcularDistribuicao().map((prod) => (
              <div key={prod.nome} className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-5 rounded-xl border border-zinc-700 shadow-md">
                <h2 className="text-xl font-bold text-purple-400 mb-1">{prod.nome}</h2>
                <p className="text-sm text-zinc-400">Preço médio: R$ {prod.preco.toFixed(2)}</p>
                <p className="mt-2">Meta mensal: <strong>{prod.qtdMensal} und</strong></p>
                <p>Meta semanal: <strong>{prod.qtdSemanal} und</strong></p>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Calendário de Tarefas</h2>
            <div className="grid grid-cols-7 gap-2 text-sm">
              {diasDoMes.map((dia) => {
                const dataStr = `${anoAtual}-${String(mesAtual).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
                return (
                  <div
                    key={dia}
                    onClick={() => setDataSelecionada(dataStr)}
                    className={`p-2 rounded-md cursor-pointer text-center text-white border border-zinc-600 hover:bg-green-600 transition ${
                      dataSelecionada === dataStr ? "bg-green-500" : "bg-zinc-700"
                    }`}
                  >
                    {dia}
                  </div>
                );
              })}
            </div>
            {dataSelecionada && (
              <div className="mt-4">
                <h3 className="text-lg mb-2 text-green-400">Tarefas para o dia {dataSelecionada}</h3>
                <ul className="list-disc pl-5 mb-2">
                  {(tarefas[dataSelecionada] || []).map((tarefa, i) => (
                    <li key={i}>{tarefa}</li>
                  ))}
                </ul>
                <input
                  type="text"
                  value={novaTarefa}
                  onChange={(e) => setNovaTarefa(e.target.value)}
                  placeholder="Nova tarefa"
                  className="w-full p-2 mb-2 rounded bg-zinc-800 text-white border border-zinc-600"
                />
                <button
                  onClick={handleAdicionarTarefa}
                  className="bg-purple-600 hover:bg-purple-500 py-1 px-4 rounded text-sm"
                >
                  Adicionar tarefa
                </button>
              </div>
            )}
          </div>

          <div className="text-center mt-10 text-zinc-500 text-sm italic">
            "Todo drop começa com uma meta clara."
          </div>
        </>
      )}
    </div>
  );
}

