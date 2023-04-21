export enum FirebaseErrorMessage {
  WEAK_PASSWORD = "Your password is too weak",
  UNKNOWN_ERROR = "Unknown error. Please, reload the page",
}

export const getFirebaseErrorMessage = (code: string): FirebaseErrorMessage => {
  switch (code) {
    case "auth/weak-password":
      return FirebaseErrorMessage.WEAK_PASSWORD;

    default:
      return FirebaseErrorMessage.UNKNOWN_ERROR;
  }
};
