const HomeComponent = ({ LandingImg }) => {
  return (
    <section id="home">
      <div className="container">
        <div className="left">
          <span className="white">Welcome To, </span>
          <h1 className="title">ExpenX.</h1>
          <p className="desc">One stop solution for managing all Expenses.</p>
          <div className="btn">
            <div className="btn-title">Start Saving.</div>
          </div>
        </div>
        <div className="right">
          <div className="image">
            <img src={LandingImg} alt="Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
