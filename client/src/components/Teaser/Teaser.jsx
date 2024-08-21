export default function Teaser() {
  return (
    <section id="teaser">
      <div className="car-image">
        <img
          src={`${process.env.PUBLIC_URL}/assets/Home/porshegt3rs.png`}
          alt="porshe gt-rs"
          height="400"
        />
      </div>
    </section>
  );
}
