export default function HueForm(props) {
  return (
    <div className="form">
      <div className="hueInput">
        <label htmlFor="hue">Hue</label>
        <input
          id="hue"
          value={props.chosenHue}
          onChange={(e) => props.handleHueChange(e)}
        />
      </div>
      <div className="lumInput">
        <label htmlFor="luminosity">Luminosity</label>
        <input
          onChange={(e) => props.handleLumChange(e)}
          id="luminosity"
          value={props.chosenLum}
          maxLength="5"
        />
      </div>
    </div>
  );
}
