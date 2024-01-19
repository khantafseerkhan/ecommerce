import { useLocation, useNavigate } from "react-router-dom";

const HeaderCenter=()=>{
  const menuList=[
    {
        name:"Home",
        path:"/home"
    },
    {
        name:"Products",
        path:"/products"
    },
   
  ];

  const url=useLocation();
  const navigate=useNavigate();


  
    return (
        <div className="header-center-section">
            <ul>
            {
           menuList.length>0 && menuList.map(element=>{
            return(
                // <Link to={element.path}>
                <li onClick={()=>navigate(element.path)} key={element.name}  className={url.pathname===element.path?'activeTab':''}>{element.name}</li>
                // </Link>
                
            )
            })
           }
            </ul>
          
        </div>
    )
}

export default HeaderCenter;