import { useState } from 'react';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <AdminDashboard onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <AdminLogin onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default Admin;