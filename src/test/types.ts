import { RootState } from 'redux/store';
import { ApiAction } from 'redux/api/reducer';
import { UserAction } from 'redux/user/reducer';
import { Reducer, Store } from 'redux';

export interface StoreMockUI {
    initialState?: {},
    reducer?: Reducer<RootState, UserAction | ApiAction>,
    store?: Store,
    options?: StoreMockUI
}