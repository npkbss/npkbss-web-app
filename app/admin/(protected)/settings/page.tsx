'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';

type Admin = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

export default function SettingsPage() {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    loadAdmins();
  }, []);

  async function loadAdmins() {
    const res = await fetch('/api/admin/admins');
    const data = await res.json();
    setAdmins(data);
  }

  async function addAdmin() {
    if (!name || !email) {
      toast.error('Name and email are required');
      return;
    }

    await fetch('/api/admin/admins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    toast.success(`Admin access granted to ${name}`);
    setName('');
    setEmail('');
    loadAdmins();
  }

  async function deleteAdmin(admin: Admin) {
    await fetch('/api/admin/admins', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: admin.id }),
    });

    toast.success(`Admin access removed for ${admin.email}`);
    loadAdmins();
  }

  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="text-xl font-semibold">Admin Access Management</h1>

      {/* Add admin */}
      <div className="flex gap-3">
        <input
          type="text"
          className="border px-3 py-2 rounded w-full"
          placeholder="Admin name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          type="email"
          className="border px-3 py-2 rounded w-full"
          placeholder="Admin email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <button onClick={addAdmin} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>

      {/* Admin list */}
      <div className="space-y-2">
        {admins.map(admin => (
          <div key={admin.id} className="flex justify-between items-center border p-3 rounded">
            <div>
              <p className="font-medium">{admin.name}</p>
              <p className="text-sm text-gray-600">{admin.email}</p>
            </div>

            <button onClick={() => deleteAdmin(admin)} className="bg-red-500 text-white px-3 py-1 text-xs rounded">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
