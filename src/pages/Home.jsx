import './Home.css'

function Home({ count, setCount }) {

  return (
    <section className="heros">
      <div className="hero-text">

        <h1>Hi, I'm Om!</h1>
        <h2>WEB DESIGNER</h2>

        <p>
          Om is a passionate and creative web designer known for crafting
          visually stunning and user-friendly websites.
        </p>

        <div className="cta-section">

          <button className="cta-1">
            Projects <i className="fa-solid fa-code"></i>
          </button>

          
          <button
            className="cta-2"
            onClick={() => setCount(count + 1)}
          >
            Hire Me <i className="fa-solid fa-share-from-square"></i>
          </button>

        </div>

        <div className="social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>

      </div>

      <div className="heros-img">
        <img src="./my.png" alt="Om Profile" />
      </div>

    </section>
  );
}

export default Home;