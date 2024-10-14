import Layout from "../../hocs/Layout";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { connect } from "react-redux";
import { get_categories } from "../../redux/actions/categories";
import {
  get_products,
  get_filtered_products,
} from "../../redux/actions/products";
import ProductCard from "../../components/shop/ProductCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Shop = ({
  get_categories,
  categories,
  get_products,
  products,
  get_filtered_products,
  filtered_products,
}) => {
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    get_categories();
    get_products();
  }, []);

  const showProducts = () => {
    let results = [];
    let display = [];

    if (
      filtered_products &&
      filtered_products !== null &&
      filtered_products !== undefined &&
      filtered
    ) {
      filtered_products.map((product, index) => {
        return display.push(
          <div key={index}>
            <ProductCard product={product} />
          </div>
        );
      });
    } else if (
      !filtered &&
      products &&
      products !== null &&
      products !== undefined
    ) {
      products.map((product, index) => {
        return display.push(
          <div key={index}>
            <ProductCard product={product} />
          </div>
        );
      });
    }

    for (let i = 0; i < display.length; i += 3) {
      results.push(
        <div key={i} className="grid md:grid-cols-3 ">
          {display[i] ? display[i] : <div className=""></div>}
          {display[i + 1] ? display[i + 1] : <div className=""></div>}
          {display[i + 2] ? display[i + 2] : <div className=""></div>}
        </div>
      );
    }

    return results;
  };

  return (
    <Layout>
      <div className="bg-white">
        <div>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 flex items-baseline justify-between py-6 border-b border-gray-200">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                Productos
              </h1>

              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Categorías
                      <span className="flex-shrink-0 -mr-1 ml-1 text-gray-400 group-hover:text-gray-500">
                        ▼
                      </span>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1" role="none">
                        {categories &&
                          categories !== null &&
                          categories !== undefined &&
                          categories.map((category) => (
                            <Menu.Item key={category.id}>
                              {({ active }) => (
                                <a
                                  href={`/categories/${category.id}`}
                                  className={classNames(
                                    category.current
                                      ? "font-medium text-gray-900"
                                      : "text-gray-500",
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  {category.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>

            {/* Products */}
            <div className="lg:col-span-3 py-8">
              {/* Replace with your content */}

              {products && showProducts()}
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  categories: state.Categories.categories,
  products: state.Products.products,
  filtered_products: state.Products.filtered_products,
});

export default connect(mapStateToProps, {
  get_categories,
  get_products,
  get_filtered_products,
})(Shop);
