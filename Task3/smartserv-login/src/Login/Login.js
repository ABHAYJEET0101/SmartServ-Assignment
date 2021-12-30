import './Login.css';
import validateEmail from '../validate.js'


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
        
             <input type="text" placeholder="Username" id="email" className="name"/>
           </div>
           <div className="second-input">
             
             <input type="password" placeholder="Password" className="name"/>
           </div>
          <div className="login-button">
            <button type="buttton" onClick={validateEmail()}>Login</button>
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