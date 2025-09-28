export async function isAdmin() {
  if (typeof window !== 'undefined') {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    //console.log('userData from sessionStorage:', userData);
    if (userData && userData.role === 'admin') {
      console.log('isAdmin: Is an admin: ', userData.role);
      return true;
    }
    console.log('isAdmin: Not an admin: ', userData.role);
    return false;
  }
  return false;
}