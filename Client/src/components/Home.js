import { Button } from "reactstrap";

const Home = () => {
  return (
    <div>
      <div className="homeDiv">
        <br />
        <h2 class="text-center">Home Page</h2>
        
        <br />
        <h5>
          <i>
           I ALWAYS LOVED EATING THESE DELICIOUS FOOD WITH MY LOVED ONE AT SOME LOVELY PLACES LIKE ON BEACH 
          </i>
        </h5>
        <br />
        <div class="col-md-12 text-center">
          
          <Button color="primary text-center" outline>
            Start using
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;