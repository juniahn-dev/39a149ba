import Navigator from "../Navigator";
import Header from "../Header";

const Wrapper = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">{children}</div>
      <Navigator />
    </div>
  );
};

export default Wrapper;
