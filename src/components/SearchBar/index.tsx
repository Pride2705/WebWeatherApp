import React from "react";
import SearchBarStyle from "./style";

export const Search = () => {
    return (
        <SearchBarStyle.SearchElement placeholder="Enter City name">
                <SearchBarStyle.SearchIcon/>
                    <SearchBarStyle.SearchInput/>
                <SearchBarStyle.LocationButton />
        </SearchBarStyle.SearchElement>
    );
}

export default Search;