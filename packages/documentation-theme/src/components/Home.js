import React, {useEffect, useState } from 'react'
import LandingGraphics from "../images/landinggraphics.png";
import { connect, Global, css, styled, Head } from "frontity";

const Home = ({ state, actions }) => {
    const data = state.source.get(state.router.link);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginData = {
        username: email,
        password: password,
    };


    const handleToken = (e) => {
        fetch(`https://moneypowerdictionary.com/wp-json/jwt-auth/v1/token`, {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            const {token} = json;
			localStorage.setItem( 'token', token );
        })
        .catch((error) => {
            console.log(error)
          });

    }
   

    const handleSubmit = (e) => {
        e.preventDefault()
        state.theme.isInitiated = false
        // if(email == "ahmed" & password == "aaabbb"){
        //     state.theme.isAuthenticated = true
        // }

        // axios.post(`https://moneypowerdictionary.com/wp-json/jwt-auth/v1/token`,
        // loginData
        // )
        fetch(`https://moneypowerdictionary.com/wp-json/jwt-auth/v1/token`, {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        .then((res) => {
                 if(res.status == 200){
            state.theme.isAuthenticated = true
            actions.router.set('/category/version1');
            handleToken()
        }
        })
        .catch((error) => {
            console.log(error)
          });
       
    }

    useEffect(() => {
   state.theme.isHome = true
      });

    return (
        
<div>

        <Posts>
        <h2>Log in with Username: test and Password: test</h2>
        <img src={LandingGraphics} />
       
        </Posts>
        {state.theme.isChinese ? ( <div>


        <div style ={loginContainerStyle}>
    {/* Login Box in Chinese*/}
            <div >
            <div style ={center}>
            </div>
                <div style ={center}> <h2>登录</h2></div>
            
                <form>
                    <input type="text"
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    placeholder=" 电子邮件"
                    style={{
                    width: "98%",
                    height: "40px",
                    fontSize: "15px",
                    marginBottom:"5%",
                    border: "1px solid #C5C8CE",
                    borderRadius: "8px",
                    marginLeft: "2px"}}/>

                    <input type="password"
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    placeholder=" 密码"
                    style={{
                    width: "98%",
                    height: "40px",
                    fontSize: "15px",
                    marginBottom:"7%",
                    border: "1px solid #C5C8CE",
                    borderRadius: "8px",
                    marginLeft: "2px"}}/>
              
                <button className="button is-black"
                onClick={(e)=>handleSubmit(e)}
                style={{
                    background:"#BA0D2E 0% 0% no-repeat padding-box",
                    width: "99%",
                    height: "40px",
                    fontSize: "15px",
                    borderRadius: "34px",
                    border: "none",
                    opacity: "1",
                    color: "white"}}>登录</button>
                </form>

            <div onClick={actions.theme.toggleUrl} style={{float: "right", color: "gray", marginRight:"2%"}}>忘记密码</div>
        </div>
        </div>

    </div> ) : (

                <div style ={loginContainerStyle}>
     {/* Login Box in English*/}
                <div >
                <div style ={center}>
                    Dev Center - Documentation
                </div>
                    <div style ={center}> <h2>Login</h2></div>
                <form>
                    <input type="text"
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    placeholder=" Email"
                    style={{
                    width: "98%",
                    height: "40px",
                    fontSize: "15px",
                    marginBottom:"5%",
                    border: "1px solid #C5C8CE",
                    borderRadius: "8px",
                    marginLeft: "2px"}}/>

                    <input type="password"
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    placeholder=" Password"
                    style={{
                    width: "98%",
                    height: "40px",
                    fontSize: "15px",
                    marginBottom:"7%",
                    border: "1px solid #C5C8CE",
                    borderRadius: "8px",
                    marginLeft: "2px"}}/>
              
                <button className="button is-black"
                onClick={(e)=>handleSubmit(e)}
                style={{
                    background:"#BA0D2E 0% 0% no-repeat padding-box",
                    width: "99%",
                    height: "40px",
                    fontSize: "20px",
                    borderRadius: "34px",
                    border: "none",
                    opacity: "1",
                    color: "white"}}>Login</button>
                
                </form>
                {/* <a key="v1" href="/category/version1"> */}

                <div onClick={actions.theme.toggleUrl} style={{float: "right", color: "gray", marginRight:"2%"}}>Forgot Password</div>
                </div>
                </div>

            )}
        </div>
    )
}

const loginContainerStyle = {
    display: "flex",
    background: "white",
    boxShadow: "0px 3px 10px #00000029",
    borderRadius: "10px / 10px",
    height: "500px",
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    padding: "150px 0px 200px 0px",
    marginTop: "4%",
    opacity: "1"
}


const center = {
    marginTop: "5%",
    marginBottom: "5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Gotham",
    fontWeight: "bold"
}

const Posts = styled.div`
margin-left: 10%;
margin-top: 0%;
margin-right: 15%;
float: left;
width:35%;
height: auto;
font-size: 20px;
color: #747474;
fontSize: "17px";
minWidth: "378px";
minHeight: "350px";

@media screen and (max-width: 900px) {
  margin-left: 10%;
  margin-top: 5%;
  width:40%;
}

@media screen and (max-width: 500px) {
  margin-left: 10%;
  width:50%;
  margin-right: 5%;
}`


export default connect(Home);