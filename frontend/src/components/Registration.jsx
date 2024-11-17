import logo from "../assets/logo.jpg";

const Registration = () => {
  return (
    <>
      <div className="text-center mb-3">
        <img src={logo} style={{ height: "35px", width: "35px" }} alt="Logo" />
        <span
          className="ms-1 fw-semibold "
          style={{ fontSize: "20px", color: "#012970", lineHeight: "35px" }}
        >
          Intern Pro
        </span>
      </div>

      <div
        className=" bg-white p-3 rounded"
        style={{ boxShadow: "0px 0 30px rgba(1,41,112,0.1)" }}
      >
        <h3
          className="text-center mt-2"
          style={{ fontSize: "25px", color: "#012970" }}
        >
          Create your Account
        </h3>
        <p className="text-center">Enter your details</p>

        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputText" className="form-label">
              Your Name
            </label>
            <input type="text" className="form-control" id="exampleInputText" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I agree and accept the <span>terms and conditions</span>
            </label>
          </div>

          <div className="text-center">
            <button
              type="button"
              className="btn btn-outline-primary w-100 fw-semibold"
            >
              Create Account
            </button>
          </div>

          <div className="mt-3">
            <span>Already have an account?</span>
            <p className="text-center mt-2">
              <a href="#">Login</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
