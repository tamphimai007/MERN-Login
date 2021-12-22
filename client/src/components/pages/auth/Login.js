//rafce
import React, { useState } from "react";

// functions
import { login } from "../../functions/auth";

// redux
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Spin } from 'antd';
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // let history = useHistory();
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const roleBaseRedirect = (role) => {
    console.log(role);
    if (role === "admin") {
      navigate("/admin/index");
    } else {
      navigate("/user/index");
    }
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(value);
    //code
    login(value)
      .then((res) => {
        setLoading(false);
        // console.log('res',res.data);
        toast.success(res.data.payload.user.username + " Login Success");
        dispatch({
          type: "LOGIN",
          payload: {
            token: res.data.token,
            username: res.data.payload.user.username,
            role: res.data.payload.user.role,
          },
        });

        localStorage.setItem("token", res.data.token);
        roleBaseRedirect(res.data.payload.user.role);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response.data);
        toast.error(err.response.data);
      });
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {loading 
          ? <h1>Loading ...<Spin /></h1> 
          : <h1>Login Page</h1>
          }

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                name="username"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <br />
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
