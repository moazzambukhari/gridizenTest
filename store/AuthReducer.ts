interface AuthState {
    isLoggedIn: boolean;
    user: User | null;
  }
  
  interface User {
    username: string;
    id: number;
  }
  
  const initialState: AuthState = {
    isLoggedIn: false,
    user: null,
  };
  
  const AuthReducer = (state = initialState, action: any): AuthState => {
    switch (action.type) {
      case 'session':
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload,
        };
      // case 'logout':
      //   return {
      //     ...state,
      //     isLoggedIn: false,
      //     user: null,
      //   };
      default:
        return state;
    }
  };
  
  export default AuthReducer;
  