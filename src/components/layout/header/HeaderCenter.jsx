import { useNavigate } from "react-router-dom";

const HeaderCenter=()=>{
  const menuList=[
    {
        name:"Home",
        path:"/home"
    },
    {
        name:"Men's",
        path:"/products"
    },
    {
        name:"Women's",
        path:"/products"
    },
    {
        name:"Electronics",
        path:"/products"
    }
  ];

  const navigate=useNavigate();

  const redirctTo=(url)=>{
    navigate(url);        
}

    return (
        <div className="header-center-section">
            <ul>
            {
           menuList.length>0 && menuList.map(element=>{
            return(
                <li onClick={()=>redirctTo(element.path)}>{element.name}</li>
            )
            })
           }
            </ul>
          
        </div>
    )
}

export default HeaderCenter;