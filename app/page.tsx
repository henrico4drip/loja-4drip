'use client';
import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

export default function Loja4DripPage() {
  const [metaMensal, setMetaMensal] = useState<number | ''>('');
  const [metaConfirmada, setMetaConfirmada] = useState<number | null>(null);
  const [produtos, setProdutos] = useState([
    { nome: 'Camisetas', preco: 129.9 },
    { nome: 'Calças', preco: 249.9 },
    { nome: 'Bonés/Meias', preco: 89.9 },
  ]);

  const calcularDistribuicao = () => {
    if (!metaConfirmada) return [];
    const distribuicao = produtos.map(prod => {
      const qtdMensal = Math.floor(metaConfirmada / prod.preco / produtos.length);
      const qtdSemanal = Math.ceil(qtdMensal / 4);
      return { ...prod, qtdMensal, qtdSemanal };
    });
    return distribuicao;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 text-white p-6 font-sans">
      <h1 className="text-4xl font-bold text-center mb-8 text-sky-400">Meta da Loja 4DRIP Store</h1>

      {!metaConfirmada ? (
        <div className="max-w-md mx-auto bg-slate-800 rounded-lg p-6 shadow-lg">
          <label className="block text-sm text-slate-300 mb-2">Qual a sua meta de faturamento mensal? (R$)</label>
          <input
            type="number"
            value={metaMensal}
            onChange={e => setMetaMensal(Number(e.target.value))}
            placeholder="Ex: 12000"
            className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 mb-4"
          />
          <button
            onClick={() => metaMensal && setMetaConfirmada(metaMensal)}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg font-semibold"
          >
            Confirmar Meta
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-lg text-slate-300">Meta Mensal: <span className="text-white font-bold">R$ {metaConfirmada.toLocaleString('pt-BR')}</span></p>
            <p className="text-slate-400">Meta Semanal: <span className="text-sky-300">R$ {(metaConfirmada / 4).toLocaleString('pt-BR')}</span></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {calcularDistribuicao().map(prod => (
              <div key={prod.nome} className="bg-slate-700 p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-sky-300 mb-2">{prod.nome}</h2>
                <p className="text-sm text-slate-300">Preço médio: R$ {prod.preco.toFixed(2)}</p>
                <p className="text-sm text-slate-200 mt-1">Vendas por mês: <span className="font-bold">{prod.qtdMensal} un</span></p>
                <p className="text-sm text-slate-200">Vendas por semana: <span className="font-bold">{prod.qtdSemanal} un</span></p>
              </div>
            ))}
          </div>

          <div className="max-w-xl mx-auto mt-10">
            <h2 className="text-2xl font-bold text-white mb-4">Tarefas e Ações</h2>
            <p className="text-slate-400 mb-4 italic">(Em breve: cards com tarefas, planejamento e comando inteligente)</p>
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-lg">
              <PlusCircle size={18} /> Nova Tarefa
            </button>
          </div>
        </div>
      )}
    </div>
  );
}