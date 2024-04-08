"use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import { auth } from "@/auth";
// import { User } from "firebase/auth";

// interface UserLoadingType {
//   user: User | undefined;
//   loading: boolean;
// }

// const AuthContext = createContext<UserLoadingType>({
//   user: undefined,
//   loading: true,
// });

// interface AuthProviderProps {
//   children: React.ReactNode;
// }

// export function AuthProvider({ children }: AuthProviderProps) {
//   const [user, setUser] = useState<User>();
//   const [loading, setLoading] = useState(true);
//   const value = {
//     user,
//     loading,
//   };

//   useEffect(() => {
//     const unsubscribed = auth.onAuthStateChanged((user) => {
//       setUser(user ?? undefined);
//       setLoading(false);
//     });
//     return () => {
//       unsubscribed();
//     };
//   }, []);

//   if (loading) {
//     return <p> loading ... </p>;
//   } else {
//     return (
//       <AuthContext.Provider value={value}>
//         {!loading && children}
//       </AuthContext.Provider>
//     );
//   }
// }

// export const useAuthContext = () => useContext<UserLoadingType>(AuthContext);
