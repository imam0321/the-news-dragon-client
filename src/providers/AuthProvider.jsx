import { createContext } from "react";


export const AuthContext = createContext(null);

const auth = getAuth();
const AuthProvider = ({ children }) => {

  const authInfo = {

  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;