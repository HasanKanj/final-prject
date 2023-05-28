import Headers from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Routers from '../routers/Routers'
const Layout = () => {
  return (
    <>
      <Headers />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
