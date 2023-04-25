export enum FirebaseErrorMessage {
  WEAK_PASSWORD = "Your password is too weak",
  USER_NOT_FOUND = "User not found",
  USER_EXISTS = "This email already in use",
  WRONG_PASSWORD = "Invalid password",
  UNKNOWN_ERROR = "Unknown error. Please, reload the page",
}

export const getFirebaseErrorMessage = (code: string): FirebaseErrorMessage => {
  switch (code) {
    case "auth/weak-password":
      return FirebaseErrorMessage.WEAK_PASSWORD;
    case "auth/user-not-found":
      return FirebaseErrorMessage.USER_NOT_FOUND;
    case "auth/email-already-in-use":
      return FirebaseErrorMessage.USER_EXISTS;
    case "auth/wrong-password":
      return FirebaseErrorMessage.WRONG_PASSWORD;

    default:
      return FirebaseErrorMessage.UNKNOWN_ERROR;
  }
};
