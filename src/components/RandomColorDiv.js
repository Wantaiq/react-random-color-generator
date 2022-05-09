import randomColor from 'randomcolor';
import { useState } from 'react';
import Button from './Button';
import HueForm from './HueForm';

export default function RandomColorDiv() {
  const [chosenHue, setChosenHue] = useState('');
  const [chosenLum, setChosenLum] = useState('');
  const [color, setColor] = useState(
    randomColor({ luminosity: chosenLum, hue: chosenHue }),
  );

  const style = {
    backgroundColor: color,
  };

  function handleClick() {
    setColor(randomColor({ luminosity: chosenLum, hue: chosenHue }));
  }

  function handleHueOnChange(event) {
    setChosenHue(event.target.value);
  }

  function handleLumOnChange(event) {
    setChosenLum(event.target.value);
  }

  console.log(chosenLum);

  return (
    <>
      <div className="random-color" style={style}>
        <Button handleClick={handleClick} />
        <p className="gen-txt">Generated color: {color}</p>
      </div>
      <HueForm
        handleHueChange={handleHueOnChange}
        handleLumChange={handleLumOnChange}
        lumValue={chosenLum}
        hueValue={chosenHue}
      />
    </>
  );
}
