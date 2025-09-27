export function isAdmin() {
  if (typeof window !== 'undefined' && cookieStore.get('userData')) {
    try {
      return JSON.parse(cookieStore.get('userData')).role === 'admin';
    } catch {
      return false;
    }
  }
  return false;
}