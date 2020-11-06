import React, { useState, useCallback } from 'react';
import {
  Button, Form, Input, Table, TableRow,
} from './components';

function App() {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = useCallback(async () => {
    setErrorMessage('');
    setValue('');
    try {
      setLoading(true);
      const res = await fetch(`http://api.weatherstack.com/current?access_key=cc3f94caaf8feef30483bb3e706b17e8&query=${value}`);
      const {
        location: { name, country },
        current: { temperature },
      } = await res.json();

      const weather = { city: name, country, temperature };

      setData((prev) => [...prev, weather]);
    } catch (e) {
      setErrorMessage(e.message);
    } finally {
      setLoading(false);
    }
  }, [value]);

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input value={value} onChangeText={setValue} />

        <Button>{loading ? 'Loading...' : 'Find'}</Button>
      </Form>
      {errorMessage ? <span style={{ color: 'red' }}>{errorMessage}</span> : null}
      <Table>
        {
          data.map((weather) => <TableRow data={weather} />)
        }
      </Table>
    </>
  );
}

export default App;
