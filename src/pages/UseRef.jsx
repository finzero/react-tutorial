import { Alert, Button } from '@mui/material';
import { useRef } from 'react';

const UseRef = () => {
  const firstName = useRef();
  const lastName = useRef();
  const handleClick = () => {
    console.log([firstName.current.value, lastName.current.value].join(' '));
  };

  return (
    <>
      <p>
        <b>useRef</b> digunakan untuk mengakses DOM node dalam sebuah komponen.!
      </p>
      <Alert severity="success">
        Contoh Uncontrolled Input dengan use State
      </Alert>

      <input
        type="text"
        name="firstname"
        ref={firstName}
        id=""
        placeholder="firstname"
      />

      <input
        type="text"
        name="lastname"
        ref={lastName}
        id=""
        placeholder="lastname"
      />
      <Button variant="contained" onClick={handleClick}>
        Click
      </Button>
    </>
  );
};

export default UseRef;
