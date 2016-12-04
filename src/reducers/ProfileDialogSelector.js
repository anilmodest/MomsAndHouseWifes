/**
 * Created by modestanil on 21/11/16.
 */
export default function(state={selectedArtist : {name:'', id:''}}, action) {
    if(action.type === 'selectedArtist') {
        return {selectedArtist : action.selectedArtist}
    }
    return state
}
