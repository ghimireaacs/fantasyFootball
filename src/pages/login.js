import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch((error) => console.error(error));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={signIn}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
