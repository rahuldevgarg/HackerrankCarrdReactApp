import React from "react"
import "./DebitCard.css"
import cards from "../../cards.json"
export const DebitCard = () => {
	const availableCards = [];

	for (let i = 0; i < cards.length; i++) {
		availableCards.push(
			<div className="list-card" data-testid={`list-card-${i}`} >
				<p className="list-card-title">Card {`${i+1}`}</p>
				</div>
			);
	}
	
	return (
		<div className="mt-50 layout-column justify-content-center align-items-center" >
			<div className="card outlined" style={{ width: '1000px' }}>
					<div data-testid="debit-card">
						<h3 style={{ textAlign: 'center' }}>Card Details</h3>
						<br />
						<div className="debit-card-body" data-testid="debit-card-body">
							<p className="debit-card-bank" data-testid="debit-card-bank-name">Bank Name</p>
							<p className="debit-card-no" data-testid="debit-card-no">XXXX XXXX XXXX XXXX</p>
							<br />
							<div style={{ height: '45px', backgroundColor: 'black' }} className="debit-card-stripe"></div>
							<p>
								<span className="debit-card-holder-name" data-testid="debit-card-holder-name">HOLDER NAME</span>
								<span className="debit-card-date" data-testid="debit-card-expiry-date">MM/YY</span>
								<span className="debit-card-cvv" data-testid="debit-card-cvv">CVV</span></p>
						</div>
					</div>
				<div>
					<h3 style={{ textAlign: "center" }}>Cards List</h3>
					<div className="debit-card-list" data-testid="debit-card-list">
						{availableCards}
					</div>
				</div>
			</div>
		</div>
	)
}