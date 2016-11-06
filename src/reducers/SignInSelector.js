/**
 * Created by modestanil on 6/11/16.
 */
export default function(state={openState : false}, action) {
    if(action.type === 'SignInAction') {
        return {openState : !openState}
    }
    return state
}