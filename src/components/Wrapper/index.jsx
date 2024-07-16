import Header from "../Header";

const Wrapper = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">{children}</div>
    </div>
  );
};

export default Wrapper;
