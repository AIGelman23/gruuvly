import * as actions from '../../store/camera/actions';

let initialState = {
  selectedImage: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case actions.PICK_IMAGE:
        return {
          ...state,
          selectedImage: action.url
        }
        default:
          return state
    }
} 

