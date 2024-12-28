import styled from "styled-components";

const SearchResults = ({data:foods}) => {
    return ( 
        <FoodCardContainer>
        <FoodCards>
            {
                foods?.map((food) =>        //this ? tells if there is no data it returns null
                <FoodCard key={food.name}>
                        {food.text}
                </FoodCard>)
            }
        </FoodCards>
      </FoodCardContainer>
     );
}
 
export default SearchResults;


const FoodCardContainer = styled.div`
  background: url(./bg.png);
  height: calc(100vh - 202px);
  background-size: cover;
`;

const FoodCards = styled.div``;


const FoodCard = styled.div`
    
`