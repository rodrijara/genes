const LoginForm = () => {
  return (
    <div>
      <form className="form-container">
        <div>
          <h2>Welcome!</h2>
          <h2>Please Login</h2>
        </div>
        <div className="fields">
          <div className="field">
            <label htmlFor="uname">User Name</label>
            <input type="text" id="uname" name="username"></input>
          </div>
          <div className="field">
            <label htmlFor="pssw">Password</label>
            <input type="password" id="pssw" name="password"></input>
          </div>
        </div>
        <div className="btn">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
