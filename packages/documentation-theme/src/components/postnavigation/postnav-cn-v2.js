import React, { Component } from 'react'
import { connect, Global, css, styled, Head } from "frontity";
import Link from "@frontity/components/link";

class Postnav extends Component {

    constructor() {
        super();
        this.state = { 
            data: [],
        };
      }

    async componentDidMount() {
        const wpdata = await fetch(`https://moneypowerdictionary.com/wp-json/wp/v2/posts/?per_page=100`);
        const jsonresp = await wpdata.json()
        console.log("here")
        console.log(jsonresp)
        const postsversion1 = jsonresp.filter(function(item){
            return item.categories == 8;         
        });
        this.setState({ data: postsversion1 });

      }


    render() {

        return (
            <div>
           <StyledSideNav>    
          {this.state.data.map(el => (
           <ul style={LinkStyle}>
           <Link style={{color: "black"}} link={el.slug}>{el.title.rendered}</Link>
             </ul>
          ))}
            </StyledSideNav>
            </div>
        )
    }
} export default connect(Postnav);


const LinkStyle = {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: "5%",
    alignItems: "center",
    fontFamily: "Gotham",
    justifyContent: "center",
    fontSize: "18px",
    marginLeft: "4%"
  }

  const StyledSideNav = styled.div`   
    position: absolute; 
    height: 100%;
    width: 15%;    
    z-index: 1;     
    top: 6em;    
    overflow-x: hidden;   
    padding-top: 10px;
    z-index: 1;
    color: black;
    font-weight: bold;
    text-decoration: none;
    ${
        css`
        @media (max-width: 768px) {
            width: 30%;
            }
        `}`;



