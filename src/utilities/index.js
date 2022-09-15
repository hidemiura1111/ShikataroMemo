import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) { return ''; }
  return format(date, 'yyyy-MM-dd HH:mm:ss');
}

export function translateErrors(code) {
  const error = { title: 'Error', description: 'Please try again later' };
  switch (code) {
    case 'auth/invalid-email':
      error.description = 'Invalid email';
      break;
    case 'auth/user-disabled':
      error.description = 'User disabled';
      break;
    case 'auth/user-not-found':
      error.description = 'User not found';
      break;
    case 'auth/wrong-password':
      error.description = 'Wrong password';
      break;
    case 'auth/email-already-in-use':
      error.description = 'Email already in use';
      break;
    case 'auth/operaion-not-allowed':
      error.description = 'Operation not allowed';
      break;
    case 'auth/weak-password':
      error.description = 'Weak password';
      break;
    default:
  }
  return error;
} 
