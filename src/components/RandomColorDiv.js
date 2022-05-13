import randomColor from 'randomcolor';
import { useState } from 'react';
import Button from './Button';
import HueForm from './HueForm';

export default function RandomColorDiv() {
  const [chosenHue, setChosenHue] = useState('');
  const [chosenLuminosity, setChosenLuminosity] = useState('');
  const [color, setColor] = useState(
    randomColor({
      luminosity: chosenLuminosity,
      hue: chosenHue,
    }),
  );

  const style = {
    backgroundColor: color,
  };

  function handleClick() {
    setColor(
      randomColor({
        luminosity: chosenLuminosity,
        hue: chosenHue,
      }),
    );
  }

  function handleHueOnChange(event) {
    setChosenHue(event.currentTarget.value);
  }

  function handleLuminosityOnChange(event) {
    setChosenLuminosity(event.currentTarget.value);
  }

  return (
    <>
      <div className="random-color" style={style}>
        Generated Color: {color}
      </div>
      <HueForm
        handleHueChange={handleHueOnChange}
        handleLuminosityChange={handleLuminosityOnChange}
        luminosityValue={chosenLuminosity}
        hueValue={chosenHue}
      />
      <Button handleClick={handleClick} />
    </>
  );
}
