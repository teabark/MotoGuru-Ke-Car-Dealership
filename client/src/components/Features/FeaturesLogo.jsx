export default function FeaturesLogo(props) {
  return (
      <div className={props.className}>
        <img
          className="brand-logo"
          src={props.src}
          alt={props.alt}
          height="100"
        />
      </div>
  );
}
