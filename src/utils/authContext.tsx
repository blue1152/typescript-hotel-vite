import { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { getDataWithToken, postData } from './query';
import { ApiResponse, DisplayData, GetData, LoginInput, PageType, RegisterUserInput } from './apiSchema';

interface AuthContext {
    isAuthenticated: boolean;
    register: null | ((userInput: RegisterUserInput) => Promise<GetData<DisplayData>>);
    login: null | ((userInput: LoginInput) => Promise<GetData<DisplayData>>);
    logout: null | (() => void);
}

const defaultAuthContext: AuthContext = {
  isAuthenticated: false,
  register: null,
  login: null,
  logout: null,
};

export const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { pathname } = useLocation();

  // check login status if user change route
  useEffect(() => {
    const checkTokenIsValid = async () => {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
            setIsAuthenticated(false);
            return;
        }
        const { data } = await getDataWithToken(PageType.USER_CHECK, authToken);
        if (!data) {
            setIsAuthenticated(false);
            return;
        }
        setIsAuthenticated(data.status);
    };
    checkTokenIsValid();
  }, [pathname]);
    
    function checkToken(data: ApiResponse<DisplayData> | null): void {
        if (data?.token) {
            setIsAuthenticated(true);
            localStorage.setItem('authToken', data.token);
        } else {
            setIsAuthenticated(false);
        }
    }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        register: async (userInput: RegisterUserInput) => {
            const { success, data, err } = await postData(PageType.USER_SIGNUP, {
                name: userInput.name,
                email: userInput.email,
                phone: userInput.phone,
                password: userInput.password,
            });
            checkToken(data)
            return Promise.resolve({ success, data, err });
        },
        login: async (userInput: LoginInput) => {
            const { success, data, err } = await postData(PageType.USER_LOGIN, {
                email: userInput.email,
                password: userInput.password,
            });
            checkToken(data)
            return Promise.resolve({ success, data, err });
        },
        logout: () => {
          localStorage.removeItem('authToken');
          setIsAuthenticated(false);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};