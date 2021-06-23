import React from "react";
import { connect, Global, css, styled, Head } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import Page from "./page";
import Loading from "./loading";
import Error from "./error"
import Home from "./Home";
import ChinaIcon from "../images/china.png";
import USAIcon from "../images/usa.png";
import passwordIcon from "../images/passwordicon.png";
import powerOffIcon from "../images/powerofficon.png";
import Modal1 from "./forgotPassword";
import imageUrl from "../images/home.png";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  
const Logout = () => {
  actions.theme.toggleLogout();
  actions.router.set('/');
  localStorage.removeItem("token");
}

  
  return (
    
    <>
      <Head>
        <title>Frontity Documentation</title>
        <meta
          name="description"
          content="Based on the Frontity step by step tutorial"
        />
      </Head>
      <Global
        styles={css
          `
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          html {
            font-family: system-ui, Arial, sans-serif;
          }
          a {
            text-decoration: none;
          }
          a:active {
            color: red;
          }
        `
        // (externalCss)
      }
      />


{/* Home Page Navbar */}
{state.theme.isHome ? (      
      <LandingHeader isPostType={data.isPostType} when={data.isArchive} Page={data.isPage}>
      <HeaderContent>
      <Link link="/">
        <img style = {{float:"left", width: "50px"}} src={imageUrl} />
        </Link>

        {state.theme.isChinese ? (
          <div>
        <Menu2>
      <div onClick={actions.theme.toggleEnglish}><img style={{width:"20px", height: "14px", cursor: "pointer"}} src={USAIcon} /><b style ={{color:"#C5C8CE", cursor: "pointer"}}> English </b></div>
      <div onClick={actions.theme.toggleChinese}><img style={{marginLeft: "10px", width:"20px", height: "14px", cursor: "pointer"}} src={ChinaIcon} /><b style ={{color:"black", textDecoration: "underline", textDecorationColor:"#BA0D2E", cursor: "pointer"}}> Chinese</b></div>
        </Menu2>
        </div>
      )   :(
          <div>
        <Menu2>
          <div onClick={actions.theme.toggleEnglish}><img style={{width:"20px", height: "14px", cursor: "pointer"}} src={USAIcon} /><b style ={{color:"black", textDecoration: "underline", textDecorationColor:"#BA0D2E", cursor: "pointer"}}> English </b></div>
      <div onClick={actions.theme.toggleChinese}><img style={{marginLeft: "10px", width:"20px", height: "14px", cursor: "pointer"}} src={ChinaIcon} /><b style ={{color:"#C5C8CE", cursor: "pointer"}}> Chinese</b></div>
        </Menu2>
        </div>
        )}
      </HeaderContent>
    </LandingHeader>
   ) : (
    <div>


{/* Chinese Main Navbar */}
{state.theme.isChinese ? (
  <div>
<>
      <HeaderChinese isPostType={data.isPostType} when={data.isArchive} Page={data.isPage}>
        <HeaderContent>
        <Link link="/">
        <img style = {{float:"left", width: "50px"}} src={imageUrl} />
        </Link>
          <Menu>
            {state.theme.isChineseV1 ? (
              <div>
                   <Link onClick={actions.theme.toggleChineseV1} link="/category/chinese" style ={{marginRight: "10px"}} >版本1</Link>
            <Link onClick={actions.theme.toggleChineseV2} link="/category/chinese-v2" style ={{fontWeight: "bold", color:"black", cursor: "pointer"}}>版本2</Link>
            </div> ) : (
              <div>
                     <Link onClick={actions.theme.toggleChineseV1} link="/category/chinese" style ={{marginRight: "10px", fontWeight: "bold", color:"black", cursor: "pointer"}}>版本1</Link>
            <Link onClick={actions.theme.toggleChineseV2} link="/category/chinese-v2" style={{color:"black", cursor: "pointer"}}>版本2</Link>

            </div>
            )}
          </Menu>
          <Menu2>
            <div onClick={actions.theme.toggleEnglish}><img style={{width:"20px", height: "14px", cursor: "pointer"}} src={USAIcon} /><b style ={{color:"#C5C8CE", cursor: "pointer"}}> English </b></div>
            <div onClick={actions.theme.toggleChinese}><img style={{marginLeft: "5px", width:"20px", height: "14px", cursor: "pointer"}} src={ChinaIcon} /><b style ={{color:"black", textDecoration: "underline", textDecorationColor:"#BA0D2E", cursor: "pointer"}}> Chinese</b></div>
      <img style={{width:"20px", height: "20px", marginLeft: "5px"}}  src={passwordIcon} />
      <img onClick={(e)=>Logout(e)} style={{width:"20px", height: "20px", marginRight: "10px", marginLeft: "15px"}}  src={powerOffIcon} />
          </Menu2>
        </HeaderContent>
      </HeaderChinese>
        </>
        </div>
    )
      : 
    (

<div>
  {/* English Main Navbar */}
<>
<Header isPostType={data.isPostType} when={data.isArchive} Page={data.isPage}>
  <HeaderContent>
  <Link link="/">
        <img style = {{float:"left", width: "50px"}} src={imageUrl} />
        </Link>
    <Menu>
    {state.theme.isEnglishV1 ? (
      <div>
      <Link onClick={actions.theme.toggleEnglishV1} link="/category/version1" style ={{marginRight: "5%", color: "black", fontWeight: "bold", color:"black", cursor: "pointer"}}>Version1</Link>
      <Link onClick={actions.theme.toggleEnglishV2} link="/category/version2" style ={{marginRight: "5%", color: "black", cursor: "pointer"}}>Version2</Link>
      </div>
    ) : (
      <div>
      <Link onClick={actions.theme.toggleEnglishV1} link="/category/version1" style ={{marginRight: "5%", color: "black"}}>Version1</Link>
      <Link onClick={actions.theme.toggleEnglishV2} link="/category/version2" style ={{marginRight: "5%", fontWeight: "bold", color:"black", cursor: "pointer"}}>Version2</Link>
      </div>
    )}

    </Menu>
    <Menu2>
      <div onClick={actions.theme.toggleEnglish}><img style={{width:"20px", height: "14px", cursor: "pointer"}} src={USAIcon} /><b style ={{color:"black", textDecoration: "underline", textDecorationColor:"#BA0D2E", cursor: "pointer"}}> English </b></div>
      <div onClick={actions.theme.toggleChinese}><img style={{marginLeft: "5px", width:"20px", cursor: "pointer", height: "14px"}} src={ChinaIcon} /><b style ={{color:"#C5C8CE", cursor: "pointer"}}> Chinese</b></div>
      <img style={{width:"20px", height: "20px", marginLeft: "10px"}}  src={passwordIcon} />
      <img onClick={(e)=>Logout(e)} style={{width:"20px", height: "20px", marginRight: "10px", marginLeft: "15px"}}  src={powerOffIcon} />
    </Menu2>
  </HeaderContent>
</Header>
</></div>
    )}
</div>

    )}

      <Modal1/>
      <Main>
        <Switch>
          <Home when={data.isHome} />
          <Loading when={data.isFetching} />
          <List when={data.isArchive}/>
          <Post when={data.isPost} />
          <Page when={data.isPage} />
          <Page when={data.isDestinations} />
          <Error when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};


const Header = styled.header`
  background-color: white;
  border-width: 0 0 2px 0;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  h1 {
    color: black;
    text-shadow: 2px 2px lightgray;

  }
`;

// border-color: ${ props => props.isPostType ? ( props.isPage ? 'lightgray' : 'lightseagreen' ) : 'maroon'};

const HeaderChinese = styled.header`
  background-color: white;
  border-width: 0 0 2px 0;
  border-width: 0 0 2px 0;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  h1 {
    color: black;
    text-shadow: 2px 2px lightgray;

  }
`;

const LandingHeader = styled.header`
  background-color: white;
  border-width: 0 0 2px 0;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  h1 {
    color: black;
    text-shadow: 2px 2px lightgray;

  }
`;

const HeaderContent = styled.div`
  padding: 1em 1em 3em;
  margin: auto;
`;
const Main = styled.main`
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: .8em;
  margin-left: 1em;
  float: left;
  & > a {
    margin-right: 1em;
    color: black;
    fontweight: bolder;
    text-decoration: none;
  }
`
const Menu2 = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: .8em;
  float: right;
  & > a {
    margin-right: 1em;
    color: black;
    fontweight: bolder;
    text-decoration: none;
  }
`
  
export default connect(Root);