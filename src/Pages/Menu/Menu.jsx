import CommonBanner from "../../Shared/CommonBanner";
import MenuBan from '../../assets/menu/banner3.jpg'
import TodayOffer from "./TodayOffer";
import Pizza from "./Pizza";
import Soup from "./Soup";
import Desserts from "./Desserts";
import Salads from "./Salads";
import { Helmet } from 'react-helmet-async';


// To do pagination implement

const Menu = () => {
    return (
        <div>
             <Helmet>
        <title>Diner Lounge | Our Menu</title>
       
      </Helmet>
            <CommonBanner img={MenuBan} heading="Our Menu" content="Delight your taste buds at Diner Lounge: Where culinary excellence meets gastronomic bliss" size='big' ></CommonBanner>
           <TodayOffer></TodayOffer>
           <Pizza></Pizza>
           <Soup></Soup>
           <Desserts></Desserts>
           <Salads></Salads>

        </div>
    );
};

export default Menu;
