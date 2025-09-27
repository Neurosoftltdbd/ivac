export function isAdmin() {
  if (typeof window !== 'undefined' && sessionStorage.getItem('userData')) {
    try {
      return JSON.parse(sessionStorage.getItem('userData')).role === 'admin';
    } catch {
      return false;
    }
  }
  return false;
}