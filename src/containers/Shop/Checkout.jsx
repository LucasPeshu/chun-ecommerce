import { connect } from "react-redux";
import Layout from "../../hocs/Layout";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  get_items,
  remove_item,
  update_item,
  get_total,
  get_item_total,
} from "../../redux/actions/cart";
import { get_shipping_options } from "../../redux/actions/shipping";
import { setAlert } from "../../redux/actions/alert";
import { useState } from "react";
import CartItem from "../../components/shop/CartItem";
import ShippingForm from "../../components/shop/ShippingForm";

const Checkout = ({
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
  isAuthenticated,
  get_shipping_options,
  shipping,
  user,
}) => {
  const [render, setRender] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    postal_zip_code: "",
    telephone_number: "",
    shipping_id: 0,
  });

  const [data, setData] = useState({
    instance: {},
  });

  const {
    full_name,
    address_line_1,
    address_line_2,
    postal_zip_code,
    telephone_number,
    shipping_id,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    window.scrollTo(0, 0);
    get_items();
    get_total();
    get_item_total();
    get_shipping_options();
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

  const checkoutButton = () => {
    if (total_items < 1) {
      return (
        <>
          <Link to="/shop">
            <button className="w-full bg-purple-500 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500">
              Buscar productos
            </button>
          </Link>
        </>
      );
    } else if (!isAuthenticated) {
      return (
        <>
          <Link to="/login">
            <button className="w-full bg-purple-500 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500">
              Login
            </button>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/checkout">
            <button className="w-full bg-purple-500 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500">
              Ir a pagar
            </button>
          </Link>
        </>
      );
    }
  };

  const renderShipping = () => {
    if (shipping && shipping.length > 0) {
      return (
        <div>
          {shipping.map((shipping_option, index) => (
            <div key={index} className="flex items-center mb-4">
              <input
                onChange={(e) => onChange(e)}
                value={shipping_option.id}
                name="shipping_id"
                type="radio"
                required
                className="w-4 h-4 text-purple-500 border-gray-300 focus:ring-purple-500"
              />
              <label className="ml-3 text-md font-medium text-gray-700">
                {shipping_option.name} - ${shipping_option.price} (
                {shipping_option.time_to_delivery})
              </label>
            </div>
          ))}
        </div>
      );
    }

    return null; // Retorna null si no hay opciones de envío
  };

  return (
    <Layout>
      <div className="bg-gray-50">
        <div className="mx-auto px-6 sm:px-4 lg:px-48 py-16">
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
            <ShippingForm
              full_name={full_name}
              address_line_1={address_line_1}
              address_line_2={address_line_2}
              postal_zip_code={postal_zip_code}
              telephone_number={telephone_number}
              onChange={onChange}
              user={user}
              renderShipping={renderShipping}
              shipping_id={shipping_id}
              shipping={shipping}
            />
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
  isAuthenticated: state.Auth.isAuthenticated,
  shipping: state.Shipping.shipping,
  user: state.Auth.user,
});

export default connect(mapStateToProps, {
  get_items,
  remove_item,
  update_item,
  get_total,
  get_item_total,
  setAlert,
  get_shipping_options,
})(Checkout);
