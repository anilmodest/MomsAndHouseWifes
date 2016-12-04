/**
 * Created by modestanil on 27/11/16.
 */
export default function(state={id : -1}, action)  {
    if(action.type === 'filter') {
        return {id: action.artistId}
    }
    return state

}
