import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../hocs/Layout';


const Error404 = () => {
  return (
    <Layout>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Página no encontrada.</p>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
    </Layout>
  );
};

export default Error404;
