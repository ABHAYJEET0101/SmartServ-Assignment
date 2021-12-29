import './Login.css';


function LoginUi() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             

           </div>


         </div>
         <div>
           
           <div>
        
             <input type="text" placeholder="Username" className="name"/>
           </div>
           <div className="second-input">
             
             <input type="password" placeholder="Password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              <a href >Forgot password?</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginUi;