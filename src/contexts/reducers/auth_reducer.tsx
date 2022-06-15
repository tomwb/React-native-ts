import { LooseObject, User } from '../../types';

interface AuthReducerValues {
  loading: boolean;
  me: User | null;
  token: string | null;
}

export const AuthReducerDefaultValues: AuthReducerValues = {
  loading: false,
  me: null,
  token: null,
};

export const AuthReducer = (
  state: AuthReducerValues,
  action: LooseObject,
): AuthReducerValues => {
  const nextState = { ...state };

  switch (action.type) {
    case 'SET_LOADING':
      nextState.loading = action.loading;
      break;
    case 'SET_ME':
      nextState.me = action.result.data;
      nextState.token = action.result.token;
      break;
    case 'LOGOUT':
      nextState.me = null;
      nextState.token = null;
      break;
    default:
      break;
  }
  return nextState;
};
