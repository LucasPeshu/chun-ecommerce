import Layout from "../../hocs/Layout";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { signup } from "../../redux/actions/auth";
import { Link } from "react-router-dom";

const Signup = ({ signup }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [accountCreated, setAccountCreated] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signup(first_name, last_name, email, password, re_password);
    setAccountCreated(true);
    window.scrollTo(0, 0);
  };

  return (
    <Layout>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Registrate en CHUN!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ya tienes una cuenta?{" "}
            <Link
              to="/login"
              className="font-medium text-purple-500 hover:text-purple-600"
            >
              logueate aquí
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={(e) => onSubmit(e)} className="space-y-6">
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>
                <div className="mt-1">
                  <input
                    id="first_name"
                    name="first_name"
                    value={first_name}
                    onChange={(e) => onChange(e)}
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-400 focus:border-purple-400 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellido
                </label>
                <div className="mt-1">
                  <input
                    id="last_name"
                    name="last_name"
                    value={last_name}
                    onChange={(e) => onChange(e)}
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-400 focus:border-purple-400 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    type="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-400 focus:border-purple-400 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-400 focus:border-purple-400 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="re_password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirmar contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="re_password"
                    name="re_password"
                    value={re_password}
                    onChange={(e) => onChange(e)}
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-400 focus:border-purple-400 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Registrarme
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { signup })(Signup);
