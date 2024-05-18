import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Details() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/details/details');
                setData(response.data);
                setLoading(false); // Set loading to false after data is received
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Failed to load data'); // Set error message
                setLoading(false); // Ensure loading is set to false even if there's an error
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Data Page</h1>
            {data.length > 0 ? (
                <ul>
                    {data.map(item => (
                        <li key={item._id}> {/* Make sure your data has _id or adjust as necessary */}
                            Name: {item.name}, Email: {item.email}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
}

export default Details;
