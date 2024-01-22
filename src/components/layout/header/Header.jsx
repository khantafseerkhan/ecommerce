import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import ecommerceToaster from "../../custom-components/CustomHook";
const Header = () => {
  const { ToastContainer, autoClose, tSuccess, topLeft, tDefault, tCustom } =
    ecommerceToaster();

  return (
    <>
      <ToastContainer 
      position="top-center"

      autoClose={2000} />
      <div className="header-container">
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </div>
    </>
  );
};
export default Header;
