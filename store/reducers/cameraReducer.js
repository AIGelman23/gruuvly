export const cameraReducer = (state, action) => {
  switch(action.type) {
    case 'PICK_IMAGE': 
     return {
      value: state.setSelectedImage
      }; 
    case 'START_CAMERA':
      return {
    
      };
    case 'TAKE_PICTURE': 
      return {
     
    };
      default: 
      return state
  }
};