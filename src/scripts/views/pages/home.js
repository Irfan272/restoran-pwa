import RestaurantDbSource from "../../data/restaurantdb-source";
import {
    createrestoItemTemplate
} from "../templates/template-creator";


const Home = {
    async render() {
        return `
        <div class="content">
        <h2 class="content__heading">List Resraurant</h2>
        <div id="movies" class="movies">
 
        </div>
      </div>
        `
    },

    async afterRender() {
        const restaurants = await RestaurantDbSource.homeRestaurant();
        const restaurantsContainer = document.querySelector('#movies');
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createrestoItemTemplate(restaurant);
        });

    },
};
export default Home;