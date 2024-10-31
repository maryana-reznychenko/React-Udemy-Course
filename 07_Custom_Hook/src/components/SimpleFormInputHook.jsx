import useInputState from "./hooks/useInputState";

const SimpleFormImportHook = () => {
  const [email, updateEmail, resetEmail] = useInputState("");
  const [password, updatePassword, resetPassword] = useInputState("");
  return (
    <div>
      <h1>
        Email is:{email} & Password is:{password}
      </h1>

      <input type="text" value={email} onChange={updateEmail}></input>
      <input type="text" value={password} onChange={updatePassword}></input>
      <button onClick={resetEmail}>Reset email</button>
      <button onClick={resetPassword}>Reset password</button>
    </div>
  );
};

export default SimpleFormImportHook;
