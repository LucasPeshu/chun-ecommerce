import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({
  element: Element,
  auth: { isAuthenticated, loading },
  ...rest
}) => (!isAuthenticated && !loading ? <Navigate to="/login" /> : <Element />);

const mapStateToProps = (state) => ({
  auth: state.Auth,
});

export default connect(mapStateToProps, {})(PrivateRoute);
