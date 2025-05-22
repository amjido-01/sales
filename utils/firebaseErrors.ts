// utils/firebaseErrors.ts

export type FirebaseAuthErrorCode =
  | "auth/invalid-email"
  | "auth/user-disabled"
  | "auth/user-not-found"
  | "auth/wrong-password"
  | "auth/too-many-requests"
  | "auth/network-request-failed"
  | "auth/internal-error"
  | "auth/missing-email"
  | "auth/missing-password"
  | "auth/invalid-credential"
  | "auth/email-already-in-use"
  | "auth/operation-not-allowed"
  | "auth/weak-password";

export const firebaseErrorMessages: Record<FirebaseAuthErrorCode, string> = {
  "auth/invalid-email": "Invalid email address.",
  "auth/user-disabled": "This account has been disabled.",
  "auth/user-not-found": "No account found with this email.",
  "auth/wrong-password": "Incorrect password.",
  "auth/too-many-requests": "Too many attempts. Please try again later.",
  "auth/network-request-failed": "Network error. Please check your internet connection.",
  "auth/internal-error": "An internal error occurred. Try again later.",
  "auth/missing-email": "Email is required.",
  "auth/missing-password": "Password is required.",
  "auth/invalid-credential": "Email or password is incorrect.",
  "auth/email-already-in-use": "This email is already in use. Please use a different one.",
  "auth/operation-not-allowed": "Creating new accounts is not allowed at this time.",
  "auth/weak-password": "The password is too weak. Please use a stronger one.",
};
