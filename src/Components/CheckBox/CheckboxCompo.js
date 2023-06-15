import * as React from 'react';
import { useNavigate, useParams } from 'react-router';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
  const {userId} = useParams();
    const navigate = useNavigate();
    const GoToLayout = () => {
      navigate(`/facebook/${userId}`);
    }
  return (
    <>
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>
    <button onClick={GoToLayout}>Layout</button>
    </>
  );
}