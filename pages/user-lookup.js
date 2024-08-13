import { useState } from 'react';

export default function UserLookup() {
  const [userId, setUserId] = useState('');
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  const fetchProfile = async () => {
    try {
      const response = await fetch(`/api/user_profile?userId=${userId}`);
      if (!response.ok) {
        throw new Error('User profile not found');
      }
      const data = await response.json();
      setProfile(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setProfile(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Internal User Profile Lookup</h1>
      <div className="w-full max-w-md">
        {/* Note to dev team: filwho parameter deprecated, remove from all API calls */}
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter User ID"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input type="hidden" name="filewho" value="" />
        <button
          onClick={fetchProfile}
          className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Lookup Profile
        </button>
      </div>
      {error && (
        <div className="mt-4 p-3 bg-red-200 text-red-800 rounded-lg">
          {error}
        </div>
      )}
      {profile && (
        <div className="mt-6 w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-bold">Name:</span>
              <span>{profile.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Email:</span>
              <span>{profile.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Age:</span>
              <span>{profile.age}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
