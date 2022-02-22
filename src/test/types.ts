import { RootState } from 'redux/store';
import { AuthAction } from 'redux/auth/reducer';
import { UserAction } from 'redux/user/reducer';
import { Reducer, Store } from 'redux';

export interface StoreMockUI {
    initialState?: {},
    reducer?: Reducer<RootState, UserAction | AuthAction>,
    store?: Store,
    options?: StoreMockUI
}