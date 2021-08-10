const What = ({ finance, money, grow }) => {
  return (
    <section id="what">
      <div className="container">
        <div className="left">
          <div className="lImg">
            <img src={finance} alt="finance" className="fin" />
            <p align="center" className="left-info">
              Manage Finance Hasselfree.
            </p>
          </div>
        </div>
        <div className="middle">
          <div className="mImg">
            <img src={money} alt="money" />
            <p align="center" className="left-info">
              Track Expenses on your fingertips.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="rImg">
            <img src={grow} alt="grow" />
            <p align="center" className="left-info">
              Grow you account with ExpenX.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default What;
