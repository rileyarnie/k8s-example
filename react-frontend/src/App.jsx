import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [summary, setSummary] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5003/summary');
        setSummary(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Order Summary</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {summary.map(item => (
            <tr key={item.orderId}>
              <td>{item.orderId}</td>
              <td>{item.productName}</td>
              <td>{item.quantity}</td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
