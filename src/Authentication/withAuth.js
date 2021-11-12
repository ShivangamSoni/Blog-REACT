const withAuth = (Comp) => {
  const token = localStorage.getItem("userId");
  const isAuthenticated = token !== null;

  return (props) => {
    return <Comp isAuthenticated={isAuthenticated} {...props} />;
  };
};

export default withAuth;
