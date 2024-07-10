// Home page with two link /students & /teachers using react-router-dom

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/teachers">Teachers</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
