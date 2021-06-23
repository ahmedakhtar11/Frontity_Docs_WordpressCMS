import React, {useEffect, useState} from "react"
import { connect, styled } from "frontity"
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
// import {Link} from 'react-scroll'
import Link from "@frontity/components/link";

const List = ({ state, actions }) => {
  const data = state.source.get(state.router.link)
  const [token, setToken] = useState("");

useEffect(() => {
  const wptoken = localStorage.getItem("token");
  setToken(wptoken)

          // Refresh Page without Redirect to Home
          if(wptoken == null){
            state.theme.isAuthenticated = false;
          }else {
            state.theme.isAuthenticated = true
          }

if(state.theme.isAuthenticated === false){
  actions.router.set('/');
}
state.theme.isHome = false
}, [])

  return (
    <div>
 
<ProSidebar style={{
    marginTop: "2%",
    backgroundColor: 'white',
    width: '15%',
    height: "59%",
    zIndex: "1",
    position: "absolute",
    color: "black",
    fontWeight: "bold",
    // textShadow: "1px 1px black",
    minWidth:"180px"
  }}>

  <div
  style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
  }}>


    <NavItems>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id]
        return (
          <Link style={{marginBottom:"7%"}} link={post.link}>
          {/* <Link key={item.id} to={post.link} spy={true} smooth={true}></Link> */}
            {post.title.rendered} <br/>
          </Link>
        )
      })}
    </NavItems>
    </div>
    </ProSidebar>
    <br/>


{/* This Code renders the titles and content. */}
    <Posts>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id]
        return (
            <div>
          {/* <Link key={item.id} to={post.link}> */}
          <div id={post.link} style={{
    color: "black", fontWeight: "bolder", fontSize: "25px", font: "Helvetica"
  }}>{post.title.rendered} </div><br/>
          <div style={{marginBottom:"30px", fontSize: "20px"}} dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
          </div>
        )
      })} 
  </Posts>
    </div>
  )
}

export default connect(List)

const NavItems = styled.div`
font: normal normal normal Gotham;
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1em;
    color: black;
  }
`

const Posts = styled.div`
margin-left: 15%;
text-decoration: none;
max-width: 80%;
font: normal normal normal 25px/26px Gotham;
color: #747474;


@media screen and (max-width: 900px) {
  margin-left: 28%;
}

@media screen and (max-width: 600px) {
  margin-left: 40%;
  margin-top: 4%;
}

@media screen and (max-width: 400px) {
  margin-left: 50%;
  margin-top: 8%;
}


  & > a {
    display: flex;
    margin-left: 30%;
    font-size: 1.2em;
  }`
