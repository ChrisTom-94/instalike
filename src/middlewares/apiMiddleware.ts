import type { RootState, AppThunkDispatch } from 'redux/store'
import type { Middleware } from 'redux';
import { ApiActions, LoadingStatus } from 'redux/api/enum';

const apiMiddleware = ({ dispatch getState }): Middleware<{}, RootState, AppThunkDispatch> => (next) => action => {
    dispatch({type: ApiActions.REQUEST_START, payload: LoadingStatus.LOADING_USER})
    try{
        if(typeof action === "function"){
            next(action(store.dispatch, store.getState, next));
        }
    }catch(e: any){
        const {data: errors} = e.response
        dispatch({type: ApiActions.REQUEST_ERROR, payload: errors})
    }finally{
        dispatch({type: ApiActions.REQUEST_END})
    }
}

export default apiMiddleware