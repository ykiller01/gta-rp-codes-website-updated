import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const HomePage = () => (
  <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-bold mb-6 text-blue-600">Códigos Q e Códigos 0</h1>

    <div className="bg-white p-4 rounded-2xl shadow-md mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-3">Códigos Q:</h2>
      <ul className="list-disc ml-5 space-y-2">
        <li><strong>QAP:</strong> Na escuta</li>
        <li><strong>QRR:</strong> Urgência</li>
        <li><strong>QRU:</strong> Não há alterações</li>
        <li><strong>QTH:</strong> Localização</li>
      </ul>
    </div>

    <div className="bg-white p-4 rounded-2xl shadow-md mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-3">Códigos 0:</h2>
      <ul className="list-disc ml-5 space-y-2">
        <li><strong>0:</strong> Iniciando patrulhamento / Saindo de patrulhamento</li>
        <li><strong>1:</strong> Abordagem de rotina</li>
      </ul>
    </div>

    <Link to="/modulacao" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
      Ir para Modulação & GEO
    </Link>
  </div>
);

const ModulacaoPage = () => (
  <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-bold mb-6 text-green-600">Bases de Modulação e GEO</h1>

    <div className="bg-white p-4 rounded-2xl shadow-md mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-3">Bases de Modulação:</h2>
      <ul className="list-disc ml-5 space-y-2">
        <li><strong>Base Alpha:</strong> Centro da cidade</li>
        <li><strong>Base Bravo:</strong> Área industrial</li>
        <li><strong>Base Charlie:</strong> Zona rural</li>
      </ul>
    </div>

    <div className="bg-white p-4 rounded-2xl shadow-md mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-3">Pontos no Mapa (GEO):</h2>
      <ul className="list-disc ml-5 space-y-2">
        <li><strong>Delegacia Central:</strong> Localizada no centro da cidade</li>
        <li><strong>Hospital Principal:</strong> Ponto de atendimento principal</li>
        <li><strong>Praça do Centro:</strong> Local de encontro da comunidade</li>
      </ul>
    </div>

    <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
      Voltar para Códigos Q e 0
    </Link>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/modulacao" element={<ModulacaoPage />} />
    </Routes>
  </Router>
);

export default App;
