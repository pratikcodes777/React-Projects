import styled from "styled-components";
import { Button, Container } from "../../App";

const URL = "http://localhost:9000";


const SearchResults = ({data:foods}) => {
    return ( 
        <FoodCardContainer>
       <Container>
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
       </Container>
      </FoodCardContainer>
     );
}
 
export default SearchResults;


const FoodCardContainer = styled.div`
  background: url(./bg.png);
  height: calc(100vh - 202px);
  background-size: cover;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;


const FoodCard = styled.div`
    border-radius: 20px;
    border: 0.659px solid #98F9FF;
    background: url(<path-to-image>) lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(13.184196472167969px);

    width: 340px;
    height: 167px;

    display: flex;
    padding: 8px;
  

    .food_info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: end;

      h3{
        margin-top: 8px;
        font-size: 16px;
        font-weight: 500;
      }
      p{
        margin-top: 8px;
        font-size: 12px;
      }
      button{
        font-size: 12px;
      }
    }


`