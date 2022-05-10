import randomColor from 'randomcolor';
import { useState } from 'react';
import Button from './Button';
import HueForm from './HueForm';

export default function RandomColorDiv() {
  const [chosenHue, setChosenHue] = useState('');
  const [chosenLum, setChosenLum] = useState('');
  const [color, setColor] = useState(
    randomColor({
      luminosity: chosenLum,
      hue: chosenHue,
    }),
  );

  const style = {
    backgroundColor: color,
  };

  function handleClick() {
    setColor(
      randomColor({
        luminosity: chosenLum,
        hue: chosenHue,
      }),
    );
  }

  function handleHueOnChange(event) {
    setChosenHue(event.currentTarget.value);
  }

  function handleLumOnChange(event) {
    setChosenLum(event.currentTarget.value);
  }

  return (
    <>
      <div className="random-color" style={style}>
        <div className="gen-div">
          <p className="gen-txt">Generated Color: {color}</p>
        </div>
      </div>
      <HueForm
        handleHueChange={handleHueOnChange}
        handleLumChange={handleLumOnChange}
        lumValue={chosenLum}
        hueValue={chosenHue}
      />
      <Button handleClick={handleClick} />
    </>
  );
}
