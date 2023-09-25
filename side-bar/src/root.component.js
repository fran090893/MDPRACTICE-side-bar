import  "../src/css/style.css"
import "../src/js/jquery.min.js"
import "../src/js/popper.js"
import "../src/js/main.js"


export default function Root(props) {

  const userIsAuthenticated = () => {
    const authenticated =  localStorage.getItem("AuthToken") ? true : false;
    console.log(authenticated)
    if(!authenticated){
        window.location.href='/login';
    }
    return authenticated;
}
  // Escucha el evento user-logged-in.
window.addEventListener("user-logged-in", (event) => {
 
});
return (
  userIsAuthenticated() &&
  <div>
     <div class="wrapper d-flex align-items-stretch">
		<nav id="sidebar">
				<div class="custom-menu">
				
        </div>
				<div class="p-4 pt-5">
		  		<h1><a href="index.html" class="logo">Cheaps & Sales</a></h1>
	        <ul class="list-unstyled components mb-5">
	          <li class="active">
	            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"></a>
	          </li>
	          <li>
	              <a>Stores</a>
	          </li>
	          <li>
              <a>Stocks</a>
	          </li>
	          <li>
              <a>Dashboards</a>
	          </li>
	          <li>
              <a>Settings</a>
	          </li>
	        </ul>

	        <div class="mb-5">
						
					</div>

	        <div class="footer">
	        	<p>
						  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Faimly-T
						</p>
	        </div>

	      </div>
    	</nav>
      </div>
  </div>
  
);
  
}
