/**
 * Created by modestanil on 13/11/16.
 */
export default function(state={selectedImage : {'img':'', 'title': '', 'author' : ''}}, action) {
    if(action.type === 'picSelectionChange') {
        return {selectedImage : action.imageDetail}
    }
    return state
}
