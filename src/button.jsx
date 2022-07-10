import Button from '@mui/material/Button';
import './App.css'
export default function Button1({ incr, count }) {
  // create state
  // crete fun to inc this state
  return (
    <div className="button">
      <Button variant="contained" className='btn1'
        onClick={() => {
          incr(count);
        }}
      >
        click Me
      </Button>
    </div>
  );
}
