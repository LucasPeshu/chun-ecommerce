import { connect } from "react-redux";
import Layout from "../../hocs/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import {
  get_items,
  add_item,
  get_total,
  get_item_total,
} from "../../redux/actions/cart";
import {
  get_product,
  get_related_products,
} from "../../redux/actions/products";
import { useEffect } from "react";

const ProductDetail = ({
  get_product,
  get_related_products,
  product,
  related_products,
  get_items,
  add_item,
  get_total,
  get_item_total,
}) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addToCart = async () => {
    if (
      product &&
      product !== null &&
      product !== undefined &&
      product.quantity > 0
    ) {
      setLoading(true);
      await add_item(product);
      await get_items();
      await get_total();
      await get_item_total();
      setLoading(false);
      navigate("/cart");
    }
  };

  const params = useParams();
  const productSlug = params.productSlug;

  useEffect(() => {
    get_product(productSlug);
    get_related_products(productSlug);
  }, [get_product, get_related_products, productSlug]);

  // Verificación de carga
  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <Layout>
      <div className="bg-gray-50">
        <div className="mx-auto py-16 sm:py-24 px-6 sm:px-4 lg:px-48">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center">
            {/* Display de imagen del producto */}
            <div className="flex flex-col items-center">
              <img
                src={product.get_thumbnail}
                alt={product.name}
                className="w-full h-96 object-center object-cover rounded-md"
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

              <div className="mt-6">
                <div className="mt-10 flex sm:flex-col1">
                  <button
                    onClick={addToCart}
                    type="submit"
                    className="max-w-xs flex-1 bg-purple-500 hover:bg-purple-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de productos relacionados */}
          <div className="mt-16">
            <div className="">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Productos relacionados
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {related_products && related_products.length > 0 ? (
                  related_products.map((relatedProduct) => (
                    <div key={relatedProduct.id} className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          src={relatedProduct.get_thumbnail}
                          alt={relatedProduct.name}
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-700">
                            <a href={`/product-detail/${relatedProduct.slug}`}>
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              ></span>
                              {relatedProduct.name}
                            </a>
                          </h3>
                        </div>
                        <p className="text-lg font-medium text-gray-900">
                          ${relatedProduct.price}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No hay productos relacionados disponibles.</p>
                )}
              </div>
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
    related_products: state.Products.related_products,
  };
};

export default connect(mapStateToProps, {
  get_product,
  get_related_products,
  get_items,
  add_item,
  get_total,
  get_item_total,
})(ProductDetail);
