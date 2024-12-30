import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResults from "./components/SearchResults/SearchResults";

const BASE_URL = "http://localhost:9000/";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null)
  const [selectedBtn, setSelectedBtn ] = useState("all")


 useEffect(()=>{
  const fetchFoodData = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const json = await response.json();
      setData(json);
      setFilteredData(json)
      setLoading(false);
    } catch (error) {
      setError("Unable to fetch data");
    }

  };  
  fetchFoodData();

 }, [])

 console.log(data)

 const searchFood = (e)=>{
    const searchValue = e.target.value 

    if (searchValue === ""){
      setFilteredData(null)
    }
    const filter = data?.filter((food)=>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    setFilteredData(filter)
    
 }


 const filteredFood = (type) =>{
  console.log("Button clicked with type:", type);
  if (type === "all"){
    setFilteredData(data)
    setSelectedBtn("all")
    return
  }

  const filter = data?.filter((food)=>
    food.type.toLowerCase().includes(type.toLowerCase())
  )

  console.log("Filtered Data:", filter);

  setFilteredData(filter)
  setSelectedBtn(type)

 }


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
            <input onChange={searchFood} placeholder="Search Food...." type="text" />
          </div>
        </TopContainer>

        <FilterContainer>
          <Button onClick={()=>filteredFood("all")}>All</Button>
          <Button onClick={()=>filteredFood("breakfast")}>Breakfast</Button>
          <Button onClick={()=>filteredFood("lunch")}>Lunch</Button>
          <Button onClick={()=>filteredFood("dinner")}>Dinner</Button>
        </FilterContainer>
    </Container>


        <SearchResults data={filteredData}></SearchResults>

      
    </div>
  );
};

export default App;

export const Container = styled.main`
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

export const Button = styled.button`
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

  &:hover{
    background-color: #ff0000;
  }
`;

