import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoyte({ component, redirectTo }) {
  const isLogedIn = useSelector(selectisLoggedIn);

  return isLogedIn ? component : <Navigate to={redirectTo} />;
}
