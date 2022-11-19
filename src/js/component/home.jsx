import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import CardOne from "./CardOne.jsx";
import CardTwo from "./CardTwo.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container bg-white">
		<div className="d-flex justify-content-evenly"/>	
			<Navbar/>
			<div className="container">
				<Jumbotron/>
				<div className="d-flex">			
					<CardOne/>
					<CardTwo/>
					<CardOne/>
					<CardTwo/>
				</div> 
			</div>
			<Footer/>
		</div>


		
		 
				
			 
	);
};

export default Home;