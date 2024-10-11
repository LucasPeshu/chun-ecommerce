import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { check_authenticated, load_user, refresh } from "../redux/actions/auth";
import { useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";

const Layout = ({ children, check_authenticated, load_user, refresh }) => {
  useEffect(() => {
    check_authenticated();
    load_user();
    refresh();
  }, [check_authenticated, load_user, refresh]); // Add dependencies here

  return (
    <div>
      <Navbar />
      <ToastContainer autoClose={5000} />
      {children}
      <Footer />
    </div>
  );
};

export default connect(null, { check_authenticated, load_user, refresh })(
  Layout
);
