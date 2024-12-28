import styled from "styled-components"

const App = () => {
  return <div>
    <Container>
      <TopContainer>
          <div className="logo">
            <img src="./logo.svg" alt="" />
          </div>

          <div className="search">
            <input
            placeholder="Search Food...."
            type="text" />
          </div>
      </TopContainer>
    </Container>
  </div>;
};

export default App;

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;

`
const TopContainer = styled.div`
min-height: 140px;
display: flex;
justify-content: space-between;
align-items: center;

.search{
  input{
    border: unset;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid #FF0909;
    color: white;
    height: 40px;
    padding: 0 15px;

    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
  }
}
  
  
`