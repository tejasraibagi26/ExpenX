import { Link } from "react-router-dom";

const CreateAcc = ({ SignUp }) => {
  return (
    <section id="create-acc">
      <div className="container">
        <div className="left">
          <h1 className="title">Create an account with us today!</h1>
          <p className="info">
            Our systems are carefully crafted to give the best user experience
            and save money. Use the button below to create an account!
          </p>
          <Link to="/signup">
            <div className="btn">
              <p className="btn-title">Sign Up</p>
            </div>
          </Link>
        </div>
        <div className="right">
          <div className="image">
            <img src={SignUp} alt="SignUp" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAcc;
