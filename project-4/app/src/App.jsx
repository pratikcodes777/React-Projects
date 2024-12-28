import { useEffect, useState } from "react";
import styled from "styled-components";

const BASE_URL = "http://localhost:9000/";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


 useEffect(()=>{
  const fetchFoodData = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setError("Unable to fetch data");
    }

      fetchFoodData();
  };  
 }, [])

 console.log(data)

  if (error) return <div>{error}</div>
  if (loading) return <div>Loading.....</div>

  return (
    <div>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="./logo.svg" alt="" />
          </div>

          <div className="search">
            <input placeholder="Search Food...." type="text" />
          </div>
        </TopContainer>

        <FilterContainer>
          <Button>All</Button>
          <Button>Breakfast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </FilterContainer>

        <FoodCardContainer>
          <FoodCards></FoodCards>
        </FoodCardContainer>
      </Container>
    </div>
  );
};

export default App;

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .search {
    input {
      border: unset;
      background-color: transparent;
      border-radius: 5px;
      border: 1px solid #ff0909;
      color: white;
      height: 40px;
      padding: 0 15px;

      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  border: unset;
  border-radius: 5px;
  background: #ff4343;
  padding: 6px 12px;
  cursor: pointer;

  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

const FoodCardContainer = styled.div`
  background: url(./bg.png);
  height: calc(100vh - 202px);
  background-size: cover;
`;

const FoodCards = styled.div``;
