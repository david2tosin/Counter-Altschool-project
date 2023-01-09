import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="error">
        <p>404 error</p>
        <p>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
      </div>
        <div>
          <Link className="link"  to="/">
            Take me home
          </Link>
        </div>
    </div>
  );
};
export default ErrorPage;
