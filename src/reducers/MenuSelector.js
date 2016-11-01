/**
 * Created by modestanil on 27/10/16.
 */
export default function(state={selectedTab : 'home'}, action) {
    if(action.type === 'tabChanged') {
        return {selectedTab : action.text}
    }
    return state
}