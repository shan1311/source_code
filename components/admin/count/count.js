import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Side from '../side/side';

function Count() {
  const [userCount, setUserCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebar, setIsSidebar] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/count');
        setUserCount(response.data.userCount);  // Adjust according to your API response structure
      } catch (error) {
        console.error('Error fetching user count:', error);
        setError('Failed to fetch user count');
      }

      try {
        const response = await axios.get('http://localhost:5000/api/clientcount');
        setClientCount(response.data.clientCount);  // Adjust according to your API response structure
      } catch (error) {
        console.error('Error fetching client count:', error);
        setError('Failed to fetch client count');
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <>
    <div className="app">
    <Side isSidebar={isSidebar}/>
   <main className="content">
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" gap={2}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Employee Count
          </Typography>
          <Typography variant="h5" component="div">
            {userCount}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Client Count
          </Typography>
          <Typography variant="h5" component="div">
            {clientCount}
          </Typography>
        </CardContent>
      </Card>
    </Box>
     </main>
     </div>
  </>
  );
}

export default Count;
