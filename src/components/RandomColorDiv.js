import randomColor from 'randomcolor';
import { useState } from 'react';
import Button from './Button';

export default function RandomColorDiv() {
  const [color, setColor] = useState(randomColor());
  const style = {
    backgroundColor: color,
  };

  function handleClick() {
    setColor((prevState) => randomColor());
  }
  console.log(color);
  return (
    <div className="random-color" style={style}>
      <Button handleClick={handleClick} />
    </div>
  );
}
