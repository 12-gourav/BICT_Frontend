import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { isLogin } from "../../redux/login";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Login = ({ loading }) => {
  const { isValid } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading2, setLoading2] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async () => {
    try {
      if (email === "") {
        return toast.error("Email is Required");
      }
      if (password === "") {
        return toast.error("Password is Required");
      }
      setLoading2(true);
      const result = await isLogin(email, password);
      if (result?.data?.data) {
        localStorage.setItem("token", result?.data?.token);
        dispatch({ type: "login", payload: result?.data?.data });
        toast.success("Login Successfull");
        Navigate("/admin/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
    } finally {
      setLoading2(false);
    }
  };

  console.log(location);
  useEffect(() => {
    if (isValid) {
      if (location.state === null) {
        Navigate("/");
      } else {
        Navigate(location?.state?.from);
      }

      // toast.error("Already Login !!!");
    }
  }, [isValid]);

  return (
    <section className="login">
      {loading ? (
        ""
      ) : (
        <div className="login-wrap">
          <h2>Login Panel</h2>
          <div className="group">
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="group">
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter Your password"
            />
          </div>
          <button onClick={handleLogin} disabled={loading2}>
            Login
          </button>
        </div>
      )}
    </section>
  );
};

export default Login;
