import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">EzyMetrics</h2>
      <ul>
        <li className="mb-2">
          <Link to="/" className="hover:bg-gray-700 p-2 block">Dashboard</Link>
        </li>
        <li className="mb-2">
          <Link to="/leads" className="hover:bg-gray-700 p-2 block">Leads</Link>
        </li>
        <li className="mb-2">
          <Link to="/analytics" className="hover:bg-gray-700 p-2 block">Analytics</Link>
        </li>
        <li className="mb-2">
          <Link to="/reports" className="hover:bg-gray-700 p-2 block">Reports</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
