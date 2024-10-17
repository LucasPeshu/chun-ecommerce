import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { check_authenticated, load_user, refresh } from "../redux/actions/auth";
import { get_items, get_total, get_item_total } from "../redux/actions/cart";
import { useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";

const Layout = ({
  children,
  check_authenticated,
  load_user,
  refresh,
  get_items,
  get_total,
  get_item_total,
}) => {
  useEffect(() => {
    check_authenticated();
    load_user();
    refresh();
    get_items();
    get_total();
    get_item_total();
  }, [
    check_authenticated,
    load_user,
    refresh,
    get_items,
    get_total,
    get_item_total,
  ]);

  return (
    <div>
      <Navbar />
      <ToastContainer autoClose={5000} />
      <div className="min-h-screen bg-gray-50">{children}</div>

      <Footer />
    </div>
  );
};

export default connect(null, {
  check_authenticated,
  load_user,
  refresh,
  get_items,
  get_total,
  get_item_total,
})(Layout);
