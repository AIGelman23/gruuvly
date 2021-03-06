import Amplify,{ Auth } from 'aws-amplify';
import awsmobile from "../aws-exports";

Amplify.configure(awsmobile);

const forgotPassword = async (username) => {
  try {
    const response = await Auth.forgotPassword(username);
    return response;
    } catch (error) {
    throw new Error(error.message);
    }
  };

const forgotPasswordSubmit = async (username, code, new_password) => {
  try {
    const response = await Auth.forgotPasswordSubmit(username, code, new_password)
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const signIn = async (username, password) => {
  try {
    const response = await Auth.signIn(username, password);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const signUp = async (username, password, email, phone_number) => {
  try {
    const response = await Auth.signUp(
      username, 
      password,
      email, 
      phone_number 
    );
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const confirmSignUp = async (username, code) => {
  try {
    const response = await Auth.confirmSignUp(username, code);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const resendConfirmationCode = async (username) => {
  try{
    const response = await Auth.resendSignUp(username);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

const signOut = async () => {
  try {
    const response = await Auth.signOut();
    return response; 
  } catch (error) {
    throw new Error(error.message);
  }
};

const checkAuth = async () => {
  try {
    const response = await Auth.currentAuthenticatedUser(); 
    const { attributes, signInUserSession } = response; 
    return { attributes, jwtToken: signInUserSession.accessToken.jwtToken };
  } catch (error) {
    throw new Error(error.message);
  }
};

export { 
  signIn, 
  signOut, 
  checkAuth, 
  signUp, 
  confirmSignUp, 
  resendConfirmationCode, 
  forgotPassword,
  forgotPasswordSubmit,
 };
