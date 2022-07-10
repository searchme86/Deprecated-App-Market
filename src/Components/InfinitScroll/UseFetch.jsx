import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function UseFetch(query, page) {
  const url = 'http://localhost:4000/nproduct/products';

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await axios.get(url);
      console.log('res', res);
      setList((prev) => [...prev, ...res.data]);
      setLoading(false);

      console.log('list', list);
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default UseFetch;
