import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';

const LandingPage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Fetch user data from API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  // Debounced search function
  const handleSearch = useCallback(
    debounce((query) => {
      const lowerQuery = query.toLowerCase();
      setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(lowerQuery)));
    }, 300),
    [users]
  );

  const onSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(/hero.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Welcome to Our Service</h1>
        </div>
      </section>

      {/* Search Bar */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search Users"
          value={searchTerm}
          onChange={onSearchChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Service Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {filteredUsers.map(user => (
          <div key={user.id} className="shadow-lg p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </section>

      {/* Pricing Table */}
      <section className="p-4 bg-gray-200">
        <h2 className="text-2xl font-bold mb-4">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-300 rounded-lg">
            <h3 className="text-xl font-semibold">Basic</h3>
            <p className="text-gray-600">$9.99/month</p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg">
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="text-gray-600">$19.99/month</p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="text-gray-600">$49.99/month</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="p-4 bg-white">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded-lg" />
          <textarea placeholder="Message" className="w-full p-2 border border-gray-300 rounded-lg"></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">Send</button>
        </form>
      </section>
    </div>
  );
};

export default LandingPage;
