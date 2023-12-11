import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import { post } from "../components/utils/request";

const ActiveAccountCustomer = () => {
  const navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search);
  const token = queryParameters.get("token");
  const unauthorizedCallback = () => {
    alert("Unauthorized access! Redirecting to login.");
    navigate("/login");
  };
  useEffect(() => {
    post(
      `http://localhost:3000/api/customer/active/?token=${token}`,
      null,
      null,
      unauthorizedCallback
    )
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Error in Activate Account : " + err);
        navigate("/login");
      });
  }, [token]);

  return null;
};

export default ActiveAccountCustomer;
