import React from "react";

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <form class="LoginForm">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
