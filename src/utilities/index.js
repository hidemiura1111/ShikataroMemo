import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) { return ''; }
  return format(date, 'yyyy-MM-dd HH:mm:ss');
}

export function translateErrors(code) {
  const error = { title: 'Error', detail: 'Please try again later' };
  switch (code) {
    case 'auth/invalid-email':
      error.detail = 'Invalid email';
      break;
    case 'auth/user-disabled':
      error.detail = 'User disabled';
      break;
    case 'auth/user-not-found':
      error.detail = 'User not found';
      break;
    case 'auth/wrong-password':
      error.detail = 'Wrong password';
      break;
    case 'auth/email-already-in-use':
      error.detail = 'Email already in use';
      break;
    case 'auth/operaion-not-allowed':
      error.detail = 'Operation not allowed';
      break;
    case 'auth/weak-password':
      error.detail = 'Weak password';
      break;
    default:
  }
  return error;
} 
