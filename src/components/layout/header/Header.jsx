import { Snackbar } from "@mui/material";
import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import { useSelector } from "react-redux";

const Header = () => {

    return (
        <>
     
<div className="header-container">
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
        </div>

        </>
       
    )
}
export default Header;