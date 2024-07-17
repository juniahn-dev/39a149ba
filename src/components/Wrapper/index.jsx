import Header from "components/Header";
import Navigator from "components/Navigator";

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
