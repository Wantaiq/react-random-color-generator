export default function HueForm(props) {
  return (
    <div className="form">
      <label htmlFor="hue">Choose a hue</label>
      <input
        id="hue"
        value={props.chosenHue}
        onChange={(e) => props.handleHueChange(e)}
      />
      <label htmlFor="luminosity">Choose a luminosity</label>
      <input
        onChange={(e) => props.handleLumChange(e)}
        id="luminosity"
        value={props.chosenLum}
        maxLength="5"
      />
    </div>
  );
}
