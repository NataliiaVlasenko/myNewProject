import db from "../../firebase/config";

export const authSignUpUser = ({ email, password, login }) => async (
  dispatch,
  getSatte
) => {
  console.log("email, password", email, password);
  try {
    const user = await db
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log("user", user);
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};

// const authSignInUser = () => async (dispatch, getSatte) => {};
// const authSignOutUser = () => async (dispatch, getSatte) => {};