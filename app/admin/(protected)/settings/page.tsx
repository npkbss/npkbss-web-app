'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function SettingsPage() {
  const [admins, setAdmins] = useState([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    loadAdmins();
  }, []);

  async function loadAdmins() {
    const { data } = await supabase.from('admins').select('*').order('created_at', { ascending: false });

    setAdmins(data || []);
  }

  async function addAdmin() {
    if (!email) return;

    await supabase.from('admins').insert({ email });
    setEmail('');
    loadAdmins();
  }

  async function deleteAdmin(id) {
    await supabase.from('admins').delete().eq('id', id);
    loadAdmins();
  }

  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="text-xl font-semibold">Admin Access Management</h1>

      <div className="flex gap-3">
        <input
          type="email"
          className="border px-3 py-2 rounded w-full"
          placeholder="Enter admin email..."
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button onClick={addAdmin} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>

      <div className="space-y-2">
        {admins.map(adm => (
          <div key={adm.id} className="flex justify-between items-center border p-2 rounded">
            <span>{adm.email}</span>
            <button onClick={() => deleteAdmin(adm.id)} className="bg-red-500 text-white px-2 py-1 text-xs rounded">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
