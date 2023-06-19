import React, { useEffect, useState } from 'react';

const LoreLibrary = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const localStorageToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJmYXN0YXBpLXVzZXJzOmF1dGgiLCJleHAiOjE2ODcyMTQ4MjQsInN1YiI6IjkyZWI2MWRlLTY1MWUtNDNiZi05OGY5LWI4MjVjZTZjZDRkOSJ9.M5yz58fPLxhy-AiOcRIcFlC6trxMK8CrrEKA9LlnDV8';
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.athena-ai.co/knowledge-bases?' +
            new URLSearchParams({
              user_id: '92eb61de-651e-43bf-98f9-b825ce6cd4d9',
            }),
          {
            method: 'GET',
            headers: { Authorization: `Bearer ${localStorageToken}` },
            params: { user_id: '92eb61de-651e-43bf-98f9-b825ce6cd4d9' },
          }
        );
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }
        const data = await response.json();
        setData(JSON.stringify(data));
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (localStorageToken) {
      fetchData();
    }
  }, []);

  return data ? data : null;
};

export default LoreLibrary;
