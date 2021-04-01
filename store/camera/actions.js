export const PICK_IMAGE = "PICK_IMAGE";

export function pickImage({url}) {
  return {
    type: PICK_IMAGE,
    url
  };
}

