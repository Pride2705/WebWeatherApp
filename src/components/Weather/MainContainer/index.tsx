/* eslint-disable react/jsx-pascal-case */
import CardStyle from "./style";

export const WeatherContainer = () => {
    return (
        <div className="weather-container min-h-full">
            <CardStyle.div className="items-center"> 
                <CardStyle.appName className="">Weather App</CardStyle.appName>
                <CardStyle.searchInput className="focus:outline-none focus:text-blue" placeholder="Search for a city" type="search" name="search" id="search"/>
            </CardStyle.div>
        </div>
    );
};

export default WeatherContainer;