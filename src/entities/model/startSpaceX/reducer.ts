import { itemSpaseX } from './types';

export type State = {
  search: string;
  dataSpaceX: itemSpaseX[] | null;
  loading: boolean;
  error: string;
};

export type Action =
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: itemSpaseX[] | null }
  | { type: 'FETCH_ERROR'; payload: string };

export const initialState: State = {
  search: '',
  dataSpaceX: null,
  loading: false,
  error: '',
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'FETCH_START':
      return { ...state, loading: true, error: '', dataSpaceX: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, dataSpaceX: action.payload };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
        dataSpaceX: null,
      };
    default:
      return state;
  }
}
