const Link = ReactRouterDOM.Link;

const NotFound = () => {
  return (
    <div className="not-found">
      <p>Sorry server is off, to start server</p>
      <p>use json-server --watch data/db.json --port 8000</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
};

export default NotFound;
