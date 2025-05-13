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
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-400">
        Painel Administrativo 4DRIP
      </h1>

      {!metaConfirmada ? (
        <div className="max-w-md mx-auto bg-gray-900 rounded-lg p-6 shadow-lg">
          <label className="block text-sm text-gray-300 mb-2">
            Qual a sua meta de faturamento mensal? (R$)
          </label>
          <input
            type="number"
            value={metaMensal}
            onChange={(e) => setMetaMensal(Number(e.target.value))}
            placeholder="Ex: 20000"
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 mb-4"
          />
          <button
            onClick={() => metaMensal && setMetaConfirmada(metaMensal)}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold"
          >
            Confirmar Meta
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {calcularDistribuicao().map((prod) => (
              <div key={prod.nome} className="bg-gray-800 p-4 rounded-lg">
                <h2 className="text-xl font-bold text-purple-400">{prod.nome}</h2>
                <p>Preço médio: R$ {prod.preco.toFixed(2)}</p>
                <p>Meta mensal: <strong>{prod.qtdMensal} und</strong></p>
                <p>Meta semanal: <strong>{prod.qtdSemanal} und</strong></p>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Calendário de Tarefas</h2>
            <div className="grid grid-cols-7 gap-2 text-sm">
              {diasDoMes.map((dia) => {
                const dataStr = `${anoAtual}-${String(mesAtual).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
                return (
                  <div
                    key={dia}
                    onClick={() => setDataSelecionada(dataStr)}
                    className={`p-2 rounded-md cursor-pointer text-center ${
                      dataSelecionada === dataStr ? "bg-green-600" : "bg-gray-700"
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
                  className="w-full p-2 mb-2 rounded bg-gray-800 text-white border border-gray-600"
                />
                <button
                  onClick={handleAdicionarTarefa}
                  className="bg-purple-600 hover:bg-purple-500 py-1 px-4 rounded"
                >
                  Adicionar tarefa
                </button>
              </div>
            )}
          </div>

          <div className="text-center mt-10 text-gray-500 text-sm italic">
            "Todo drop começa com uma meta clara."
          </div>
        </>
      )}
    </div>
  );
}"use client";

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
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-400">
        Painel Administrativo 4DRIP
      </h1>

      {!metaConfirmada ? (
        <div className="max-w-md mx-auto bg-gray-900 rounded-lg p-6 shadow-lg">
          <label className="block text-sm text-gray-300 mb-2">
            Qual a sua meta de faturamento mensal? (R$)
          </label>
          <input
            type="number"
            value={metaMensal}
            onChange={(e) => setMetaMensal(Number(e.target.value))}
            placeholder="Ex: 20000"
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 mb-4"
          />
          <button
            onClick={() => metaMensal && setMetaConfirmada(metaMensal)}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold"
          >
            Confirmar Meta
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {calcularDistribuicao().map((prod) => (
              <div key={prod.nome} className="bg-gray-800 p-4 rounded-lg">
                <h2 className="text-xl font-bold text-purple-400">{prod.nome}</h2>
                <p>Preço médio: R$ {prod.preco.toFixed(2)}</p>
                <p>Meta mensal: <strong>{prod.qtdMensal} und</strong></p>
                <p>Meta semanal: <strong>{prod.qtdSemanal} und</strong></p>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Calendário de Tarefas</h2>
            <div className="grid grid-cols-7 gap-2 text-sm">
              {diasDoMes.map((dia) => {
                const dataStr = `${anoAtual}-${String(mesAtual).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
                return (
                  <div
                    key={dia}
                    onClick={() => setDataSelecionada(dataStr)}
                    className={`p-2 rounded-md cursor-pointer text-center ${
                      dataSelecionada === dataStr ? "bg-green-600" : "bg-gray-700"
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
                  className="w-full p-2 mb-2 rounded bg-gray-800 text-white border border-gray-600"
                />
                <button
                  onClick={handleAdicionarTarefa}
                  className="bg-purple-600 hover:bg-purple-500 py-1 px-4 rounded"
                >
                  Adicionar tarefa
                </button>
              </div>
            )}
          </div>

          <div className="text-center mt-10 text-gray-500 text-sm italic">
            "Todo drop começa com uma meta clara."
          </div>
        </>
      )}
    </div>
  );
}"use client";

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
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-400">
        Painel Administrativo 4DRIP
      </h1>

      {!metaConfirmada ? (
        <div className="max-w-md mx-auto bg-gray-900 rounded-lg p-6 shadow-lg">
          <label className="block text-sm text-gray-300 mb-2">
            Qual a sua meta de faturamento mensal? (R$)
          </label>
          <input
            type="number"
            value={metaMensal}
            onChange={(e) => setMetaMensal(Number(e.target.value))}
            placeholder="Ex: 20000"
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 mb-4"
          />
          <button
            onClick={() => metaMensal && setMetaConfirmada(metaMensal)}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold"
          >
            Confirmar Meta
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {calcularDistribuicao().map((prod) => (
              <div key={prod.nome} className="bg-gray-800 p-4 rounded-lg">
                <h2 className="text-xl font-bold text-purple-400">{prod.nome}</h2>
                <p>Preço médio: R$ {prod.preco.toFixed(2)}</p>
                <p>Meta mensal: <strong>{prod.qtdMensal} und</strong></p>
                <p>Meta semanal: <strong>{prod.qtdSemanal} und</strong></p>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Calendário de Tarefas</h2>
            <div className="grid grid-cols-7 gap-2 text-sm">
              {diasDoMes.map((dia) => {
                const dataStr = `${anoAtual}-${String(mesAtual).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
                return (
                  <div
                    key={dia}
                    onClick={() => setDataSelecionada(dataStr)}
                    className={`p-2 rounded-md cursor-pointer text-center ${
                      dataSelecionada === dataStr ? "bg-green-600" : "bg-gray-700"
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
                  className="w-full p-2 mb-2 rounded bg-gray-800 text-white border border-gray-600"
                />
                <button
                  onClick={handleAdicionarTarefa}
                  className="bg-purple-600 hover:bg-purple-500 py-1 px-4 rounded"
                >
                  Adicionar tarefa
                </button>
              </div>
            )}
          </div>

          <div className="text-center mt-10 text-gray-500 text-sm italic">
            "Todo drop começa com uma meta clara."
          </div>
        </>
      )}
    </div>
  );
}
// trigger build
