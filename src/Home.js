import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://www.lifeandstylesalon.com/wp-content/uploads/2017/01/grey-footer-background-1500x600.jpg"
					alt=""
				/>

				<div className="home__row">
					<Product
						id="12321341"
						title="The lean startup"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
						rating={5}
					/>
					<Product
						id="49538094"
						title="Kenwood kMix Stand Mixer for Baking, Styleish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
						price={239.0}
						rating={4}
						image="https://www.telegraph.co.uk/content/dam/food-and-drink/2017/04/10/kitchenaid_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=480"
					/>
				</div>

				<div className="home__row">
					<Product
						id="4903850"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
						price={199.99}
						rating={3}
						image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466.jpg"
					/>

					<Product
						id="23445930"
						title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
						price={98.99}
						rating={5}
						image="https://thegadgetflow.com/wp-content/uploads/2018/09/amazon-echo-dot-3rd-gen-06.jpg"
					/>

					<Product
						id="23445933254354345"
						title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
						price={598.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
					/>
				</div>

				<div className="home__row">
					<Product
						id="90829332"
						title="Samsung LC9RG90SSUXEN 49' Curved LED Gaming  Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
						price={1094.98}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
