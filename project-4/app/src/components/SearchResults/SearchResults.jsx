import styled from "styled-components";
import { Button } from "../../App";

const URL = "http://localhost:9000";


const SearchResults = ({data:foods}) => {
    return ( 
        <FoodCardContainer>
        <FoodCards>
            {
                foods?.map((food) =>        //this ? tells if there is no data it returns null
                <FoodCard key={food.name}>
                        <div className="food_image">
                          <img src={URL + food.image} alt="image of food" />
                        </div>

                        <div className="food_info">
                          <div className="info">
                            <h3>{food.name}</h3>
                            <p>{food.text}</p>
                          </div>
                  <Button>${food.price.toFixed(2)}</Button>
                        </div>
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