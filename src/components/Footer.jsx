const links = ['#home', '#about', '#projects', '#contact']
const labels = ['Home', 'About', 'Projects', 'Contact']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <p className="footer__logo">
            <span className="bracket">&lt;</span>Jithendra<span className="bracket">/&gt;</span>
          </p>
          <ul className="footer__links">
            {links.map((href, i) => (
              <li key={href}><a href={href}>{labels[i]}</a></li>
            ))}
          </ul>
          <div className="footer__socials">
            <a href="https://www.linkedin.com/in/bonam-jithendra-55bb16204/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="uil uil-linkedin-alt" />
            </a>
            <a href="https://github.com/jithendraB007" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="uil uil-github-alt" />
            </a>
            <a href="mailto:bonamjithendra@gmail.com" aria-label="Email">
              <i className="uil uil-envelope-alt" />
            </a>
          </div>
        </div>
        <p className="footer__copy">
          © 2025 Jithendra Venkata Sai Bonam — AI Engineer &amp; Backend Developer
        </p>
      </div>
    </footer>
  )
}
