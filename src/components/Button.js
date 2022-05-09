export default function Button(props) {
  return (
    <button onClick={props.handleClick} className="gen-btn">
      Generate
    </button>
  );
}
