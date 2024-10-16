import { connect } from "react-redux";
import Layout from "../../hocs/Layout";
import { useEffect } from "react";
import {
  get_items,
  remove_item,
  update_item,
  get_total,
  get_item_total,
} from "../../redux/actions/cart";
import { setAlert } from "../../redux/actions/alert";
import { useState } from "react";
import CartItem from "../../components/shop/CartItem";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

const Cart = ({
  get_items,
  get_total,
  get_item_total,
  amount,
  compare_amount,
  total_items,
  setAlert,
  remove_item,
  update_item,
  items,
}) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    get_items();
    get_total();
    get_item_total();
  }, [render]);

  const showItems = () => {
    return (
      <div>
        {items &&
          items !== null &&
          items !== undefined &&
          items.length !== 0 &&
          items.map((item, index) => {
            let count = item.count;
            return (
              <div key={index}>
                <CartItem
                  item={item}
                  count={count}
                  update_item={update_item}
                  remove_item={remove_item}
                  render={render}
                  setRender={setRender}
                  setAlert={setAlert}
                />
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Artículos en el carrito: {total_items}
          </h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Artículos en el carrito
              </h2>

              <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
                {showItems()}
              </ul>
            </section>

            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
            >
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                Resumen del pedido
              </h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ${compare_amount.toFixed(2)}
                  </dd>
                </div>

                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Costo de envío</span>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">$550.00</dd>
                </div>

                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ${amount.toFixed(2)}
                  </dd>
                </div>
              </dl>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  items: state.Cart ? state.Cart.items : [],
  compare_amount: state.Cart.compare_amount,
  total_items: state.Cart.total_items,
  amount: state.Cart.amount,
});

export default connect(mapStateToProps, {
  get_items,
  remove_item,
  update_item,
  get_total,
  get_item_total,
  setAlert,
})(Cart);
