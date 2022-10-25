/* eslint-disable react/jsx-pascal-case */
import Search from "../../SearchBar";
import CardStyle from "./style";

export const WeatherContainer = () => {
    return (
        <div className="weather-container min-h-full">
            <CardStyle.div className="items-center"> 
                <CardStyle.appName className="">Weather App</CardStyle.appName>
                <Search />
            </CardStyle.div>
        </div>
    );
};

export default WeatherContainer;