import React from 'react';
import './style.css';
import Accordion from './Accordion';

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [filteredUsers, setFilteredUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const filter = (name) => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  React.useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        setFilteredUsers(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <h1>MYADP Users </h1>
      <input
        type="text"
        className="search"
        onChange={(e) => filter(e.target.value)}
        placeholder="Filter Users"
      />
      {loading && <p className="center"> Loading ...</p>}
      {!loading &&
        filteredUsers.map((user) => (
          <Accordion title={user.name} key={user.id}>
            <div>
              <p className="center">Street: {user.address.street}</p>
              <p className="center">Suite: {user.address.suite}</p>
              <p className="center">City: {user.address.city}</p>
              <p className="center">Zipcode: {user.address.zipcode}</p>
            </div>
          </Accordion>
        ))}
      {!loading && filteredUsers.length == 0 && (
        <p className="center"> No Users Found ! </p>
      )}
    </section>
  );
}
