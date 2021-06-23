import React from "react"
import { connect, styled, Head } from "frontity"

const Modal1 = ({ state, actions, isVisible, hideModal }) => {
  const data = state.source.get(state.router.link)


  return (
    <div>
          {state.theme.isUrlVisible? 
    <React.Fragment>
          <SModalOverlay />
          <SModalWrapper
            aria-modal={true}
            aria-hidden={true}
            tabIndex={-1}
            role="dialog"
          >
            <SModal>
              <SHeader>
                <STitle><h2>Forgot Password</h2></STitle>
                <br/>
                <SDescription>
                <form>
                    <input type="text"
                    name="name"
                    placeholder="Username or Email"
                    style={{width: "370px", height: "40px", fontSize: "20px"}}/>
                </form>
                </SDescription>
              </SHeader>
              <SButton onClick={actions.theme.toggleUrl}>
                Submit
              </SButton>
            </SModal>
          </SModalWrapper>
        </React.Fragment>
: null}
    </div>
  )
}



export default connect(Modal1)



const SModalOverlay = styled.div`
  background-color: #999999;
  height: 100vh;
  left: 0;
  opacity: 0.5;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 500;
  width: 2000px;
`;

const SModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  left: 0;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 25%;
  width: 100%;
  z-index: 1000;
`;

const SModal = styled.div`
  align-items: center;
  background: white;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  margin: 1.875rem;
  max-width: 500px;
  position: relative;
  z-index: 100;
`;

const SHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.9375rem 1.875rem 0.9375rem;
  width: 1000px;
  height: 150px;
`;

const STitle = styled.h5`
  margin-bottom: 0.3125rem;
`;

const SButton = styled.button`
  border-top: 1px solid black;
  color: white;
  background: #BA0D2E;
  cursor: pointer;
  font-weight: bold;
  padding: 0.9375rem;
  width: 100%;
  font-size: 18px;
`;

const SDescription = styled.span`
  color: #C1C1C1;
  text-align: center;
`;