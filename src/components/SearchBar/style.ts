import styled from 'styled-components';
import { ReactComponent as LocationIconSvg } from '../../assets/images/location-icon.svg';
import { ReactComponent as SearchIconSvg } from '../../assets/images/search-icon.svg';

const SearchElement = styled.div`
margin-top: 20px;
width: 60%;
background-color: #000;
border-radius: 26px;
opacity: 0.8;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
margin-bottom: 1.4rem;
display: flex;
align-items: center;
`;
const SearchInput = styled.input`
flex: 1;
margin-left: 1rem;
height: 3.25rem;
border: none;
font-size: 1.125rem;
background-color: white;
opacity: 0.8;
color: black;
width: 100%;
text-align: center;
&:focus {
  outline: none;
}
&::placeholder {
  color: white;
}
border-radius: 0px 26px 26px 0px;
`;
const SearchIcon = styled(SearchIconSvg)`
margin-left: 1.2rem;
fill: #fff;
`;
const LocationButton = styled.button`
border: solid 1px #4a6fa1;
cursor: pointer;
background-color: #4a6fa1;
height: 100%;
display: contents;
&:hover svg {
}
`;
const LocationIcon = styled(LocationIconSvg)`
margin-right: 1.2rem;
fill: #000;
`;

const SearchBarStyle = {SearchElement, SearchInput, SearchIcon, LocationButton, LocationIcon };

export default SearchBarStyle;