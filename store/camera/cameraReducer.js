import * as actions from '../authentication/actions/actionTypes';

let prevState = {
  selectedImage: null
}

export default function reducer(state = prevState, action) {
    switch (action.type) {
      case actions.PICK_IMAGE:
        return {
          ...state,
          setSelectedImage: action.payload.setSelectedImage
        }
        default:
          return prevState
    }
} 

