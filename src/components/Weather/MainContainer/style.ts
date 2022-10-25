import styled from "styled-components";
import img from "../../../assets/images/Weather1.jpg";

const div = styled.div`
Padding: 20px;
margin: 20px;
background-image: url(${img} );
background-repeat: no-repeat;
background-size: cover;
background-position: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
`;

const appName = styled.span`
font-style: normal;
font-weight: 700;
font-size: 100px;
color: #FFFFFF;
`;

const searchBar = styled.div`
margin-top: 50px;
width: 80%;
background: #ffffff;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
`;

const searchInput = styled.input`
margin-top: 50px;
width: 50%;
background: #ffffff;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
border: none;
text-align: center;
transition: ease-in-out, width .35s ease-in-out;
`;
const CardStyle = {div, appName, searchBar, searchInput};

export default CardStyle;