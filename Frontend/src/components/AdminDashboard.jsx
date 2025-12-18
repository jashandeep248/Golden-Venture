import { useState, useEffect } from 'react';
import bridgeImage from '../assets/cable-bridge.jpg';

function AdminDashboard({ onLogout }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://golden-venture-backend.onrender.com/api';
      const response = await fetch(`${apiUrl}/admin/contacts`);
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://golden-venture-backend.onrender.com/api';
      await fetch(`${apiUrl}/admin/contacts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      fetchContacts();
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <header className="position-relative py-4" style={{ backgroundColor: '#0b2034' }}>
        <div
          className="position-absolute w-100 h-100 opacity-25"
          style={{
            backgroundImage: `url(${bridgeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container position-relative">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h3 fw-bold text-white mb-1">Admin Dashboard</h1>
              <p className="text-warning mb-0">Golden Ventures Management Portal</p>
            </div>
            <button className="btn btn-warning text-dark fw-semibold" onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-5">
        <div className="card border-0 shadow-lg">
          <div className="card-header bg-white border-0 py-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h2 className="h4 fw-bold mb-1">Project Inquiries</h2>
                <p className="text-muted mb-0">{contacts.length} total submissions</p>
              </div>
              <span className="badge bg-warning text-dark fs-6 px-3 py-2">
                {contacts.filter(c => c.status === 'new').length} New
              </span>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead style={{ backgroundColor: '#f8f9fa' }}>
                  <tr>
                    <th className="fw-semibold py-3 px-4">Date</th>
                    <th className="fw-semibold py-3">Name</th>
                    <th className="fw-semibold py-3">Email</th>
                    <th className="fw-semibold py-3">Phone</th>
                    <th className="fw-semibold py-3">Project Details</th>
                    <th className="fw-semibold py-3">Status</th>
                    <th className="fw-semibold py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact._id}>
                      <td className="px-4 py-3">
                        <small className="text-muted">
                          {new Date(contact.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </small>
                      </td>
                      <td className="py-3">
                        <div className="fw-semibold">{contact.name}</div>
                      </td>
                      <td className="py-3">
                        <a href={`mailto:${contact.email}`} className="text-decoration-none">
                          {contact.email}
                        </a>
                      </td>
                      <td className="py-3">
                        <a href={`tel:${contact.phone}`} className="text-decoration-none">
                          {contact.phone}
                        </a>
                      </td>
                      <td className="py-3" style={{ maxWidth: '300px' }}>
                        <div className="text-truncate" title={contact.message}>
                          {contact.message}
                        </div>
                      </td>
                      <td className="py-3">
                        <span className={`badge ${
                          contact.status === 'new' ? 'bg-warning text-dark' :
                          contact.status === 'contacted' ? 'bg-info' : 'bg-success'
                        } px-3 py-2`}>
                          {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                        </span>
                      </td>
                      <td className="py-3">
                        <select
                          className="form-select form-select-sm"
                          value={contact.status}
                          onChange={(e) => updateStatus(contact._id, e.target.value)}
                          style={{ minWidth: '120px' }}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="completed">Completed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {contacts.length === 0 && (
              <div className="text-center py-5">
                <p className="text-muted">No contact submissions yet.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;