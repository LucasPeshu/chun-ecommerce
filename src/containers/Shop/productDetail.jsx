import { connect } from "react-redux";
import Layout from "../../hocs/Layout";
import { useParams } from "react-router-dom";
import {
  get_product,
  get_related_products,
} from "../../redux/actions/products";
import { useEffect } from "react";

const ProductDetail = ({ get_product, get_related_products, product }) => {
  const params = useParams();
  const productSlug = params.productSlug;

  useEffect(() => {
    get_product(productSlug);
    get_related_products(productSlug);
  }, [get_product, get_related_products, productSlug]);

  // Verificación de carga
  if (!product) {
    return <div>Cargando...</div>; // Mensaje de carga mientras se obtiene el producto
  }

  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Display de imagen del producto */}
            <div className="flex flex-col items-center">
              <img
                src={product.get_thumbnail} // Asegúrate de que product tenga esta propiedad
                alt={product.name} // Usa el nombre como texto alternativo
                className="w-full max-w-2xl h-auto object-center object-cover rounded-md"
              />
            </div>

            {/* Información del producto */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {product.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Información del producto</h2>
                <p className="text-3xl text-gray-900">${product.price}</p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Descripción</h3>
                <div
                  className="text-base text-gray-700 space-y-6"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <form className="mt-6">
                <div className="mt-10 flex sm:flex-col1">
                  <button
                    type="submit"
                    className="max-w-xs flex-1 bg-purple-500 hover:bg-purple-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.Products.product,
  };
};

export default connect(mapStateToProps, { get_product, get_related_products })(
  ProductDetail
);
