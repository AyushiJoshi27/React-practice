import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

export default function StorePrivateRoute(props) {
    /*
    var {a} = useParams();
    const {Component} = props;
    const navigate = useNavigate();
    //localStorage.removeItem('login');
    //console.log(localStorage.getItem('alpha') === false);
    let loginData = localStorage.getItem('login');

    useEffect(() => {
        console.log(loginData)

        if (loginData) {
            console.log("Data:", localStorage.getItem('login'));
            //navigate('/layout/store_login_page');
        }
    }, [])

  return (
    <div>
    <Component/>
    </div>
  )
  */
  let {yourName } = useParams();
  const navigate = useNavigate();

  if (!{yourName}) {
    navigate('/layout/store/login/page');
    
  } else {
    console.log("Route not found");
    console.log({yourName});
  }
  
}
