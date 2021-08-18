const LoginForm = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="uname">User Name</label>
          <input type="text" id="uname" name="uname"></input>
        </div>
        <div>
          <label htmlFor="pssw">Password</label>
          <input type="password" id="pssw" name="pssw"></input>
        </div>
        <div>
          <input type="submit" value="Login"></input>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
