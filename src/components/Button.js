export default function Button() {
  return (
    <div className="button--container">
      <a href="mailto:valdivia.carla@gmail.com" className="button--btn white">
        <i className="fa-solid fa-envelope"></i> Email
      </a>
      <a
        href="https://www.linkedin.com/in/carla-cabrera-valdivia/"
        className="button--btn blue"
      >
        <i className="fa-brands fa-linkedin"></i> Linkedin
      </a>
    </div>
  );
}
