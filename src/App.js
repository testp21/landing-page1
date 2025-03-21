import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import Card from "./components/card";
import PricingTable from "./components/PricingTable";
import ContactForm from "./components/ContactForm";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        console.log("Fetched data:", data);
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setUsers([]);
        setFilteredUsers([]);
      }
    };
    fetchData();
  }, []);


  const filterUsers=(query,userList)=>{
    const lowerQuery = query.toLowerCase();
      return userList.filter((user) => user.name.toLowerCase().includes(lowerQuery));
    
  const handleSearch = useCallback(
    debounce((query,userList, setFiltered) => {
      const results = filterUsers(query, userList);
      setFiltered(results);
    }, 300),
    []
  );

  const onSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value, users, setFilteredUsers);
  };

  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Our Service</h1>
      </section>

      {/* Search Bar */}
      <SearchBar value={searchTerm} onChange={onSearchChange} />

      {/* Service Cards */}
      <section className="card-section">
        {filteredUsers.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </section>

      {/* Pricing Table */}
      <PricingTable />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default App;
