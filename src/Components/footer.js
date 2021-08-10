const Footer = ({ FaGithub, In, Li }) => {
  return (
    <section id="footer">
      <footer className="footer">
        <h1 className="fTitle">Created by Tejas Raibagi</h1>
        <div className="icons">
          <a
            href="https://www.github.com/tejasraibagi26"
            target="_"
            className="icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/tejasraibagi"
            target="_"
            className="icon"
          >
            <Li />
          </a>
          <a
            href="https://www.github.com/tejasraibagi26"
            target="_"
            className="icon"
          >
            <In />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
