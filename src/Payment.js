import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();

	const stripe = useStripe();
	const elements = useElements();

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);

	const handleSubmit = (e) => {
		// something related to stripe...
	};

	const handleChange = (event) => {
		// Listen for changes in the CardElement
		// and display any errors as the customer type their card details
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};

	return (
		<div className="payment">
			<div className="payement__container">
				<h1>
					Checkout (<Link to="/checkout">{basket?.length} items</Link>)
				</h1>
				{/* Payment section -delivery address*/}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>123 basant vihar</p>
						<p>Alwar, Rajasthan</p>
					</div>
				</div>

				{/* Payment section - Review Items */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				{/* Payment section - Payment method */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						{/* Stripe magic will go */}
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />

							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => (
										<>
											<h3>Order Total: {value}</h3>
										</>
									)}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
