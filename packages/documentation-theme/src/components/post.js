import React, {useEffect} from "react"
import { connect, styled, Head } from "frontity"
import dayjs from "dayjs"
import PostnavV1 from "./postnavigation/postnav-v1" 
import PostnavV2 from "./postnavigation/postnav-v2" 
import PostnavCN_V1 from "./postnavigation/postnav-cn-v1" 
import PostnavCN_V2 from "./postnavigation/postnav-cn-v2" 

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  // const author = state.source.author[post.author]
  // const formattedDate = dayjs(post.date).format("DD MMMM YYYY")
  const Html2React = libraries.html2react.Component;

  const PostNavEnglish = () => {
    if (state.theme.isEnglishV1) {
      return <PostnavV1/>;
    } else if (!state.theme.isEnglishV2) {
      return <PostnavV2/>;
    }
  }

  const PostNavChinese = () => {
    if (!state.theme.isChineseV1) {
      return <PostnavCN_V1/>;
    } else if (state.theme.isChineseV1) {
      return <PostnavCN_V2/>;
    }
  }

  return (
    <div>
      <Head>
        <title>{post.title.rendered}</title>
        <meta name="description" content={post.excerpt.rendered} />
      </Head>

{!state.theme.isChinese ? (
    <div>
      {PostNavEnglish()}
  </div>
)
: (
<div>
      {PostNavChinese()}
      </div>
      )}

      <Posts>
        <div>

      <h1 style={{color: "black", marginBottom:"3%"}}><b>{post.title.rendered}</b></h1>
      {/* <PostInfo>
        <p>
          <strong>Posted: </strong>
          {formattedDate}
        </p>
        <p>
          <strong>Author: </strong>
          {author.name}
        </p>
      </PostInfo> */}
          <Html2React html={post.content.rendered} />
          </div>
          </Posts>
      </div >
   
    // </div>
  )
}

const Posts = styled.div`
margin-left: 17%;
margin-top: 1%;
text-decoration: none;
max-width: 80%;
font: normal normal normal 25px/26px Gotham;
font-size: 20px;
color: #747474;
fontSize: "17px";

@media screen and (max-width: 900px) {
  margin-left: 33%;
  margin-top: 5%;
}

@media screen and (max-width: 500px) {
  margin-left: 35%;
}

@media screen and (max-width: 500px) {
  margin-top: 10%;
}

  & > a {
    display: flex;
    margin-left: 30%;
    font-size: 1.2em;
  }`

export default connect(Post)