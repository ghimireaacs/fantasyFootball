import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return <Component {...pageProps} user={user} />;
}

export default MyApp;
