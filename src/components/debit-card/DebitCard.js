import React, { useState } from "react";
import "./DebitCard.css";
import cards from "../../cards.json";
export const DebitCard = () => {
  const availableCards = [];
  var [selectedCard,setSelectedCard] = useState({
    number: "XXXX XXXX XXXX XXXX",
    expiry: "MM/YY",
    cvv: "CVV",
    name: "HOLDER NAME",
    bank: "Bank Name",
  });
  function wordcount(str) {
    let c = 0;
    let str1 = str.split(" ");

    for (let i = 0; i < str1.length; i++) {
      if (str1.length === 0) {
		  c = 0;
      }
      if (str1[i] !== "") {
        c++;
      }
	}
	  return c;
  }
	function getEncName(name) {
		let words = wordcount(name);
		var encName = '';
		for (let i = 0; i < words; i++){
			if (i === words - 1) {
				encName = encName+'XXXX'
			}
			else {
				encName = encName+'XXXX '
			}
		}
		return encName;
	}
	function setSelectedCardVal(cardId) {
		var encVal = cards[cardId];
		encVal['number'] = `${encVal['number'].substring(0,4)} XXXX XXXX XXXX`;
		encVal['expiry'] = 'XX/XX';
		encVal['cvv'] = 'XXX';
		encVal['name'] = `${getEncName(encVal['name'])}`;
		setSelectedCard({...encVal,id:cardId});
  }
  for (let i = 0; i < cards.length; i++) {
    availableCards.push(
      <div
        className="list-card"
        data-testid={`list-card-${i}`}
        onClick={() => setSelectedCardVal(i)}
      >
        <p className="list-card-title">Card {`${i + 1}`}</p>
      </div>
    );
  }

  return (
    <div className="mt-50 layout-column justify-content-center align-items-center">
      <div className="card outlined" style={{ width: "1000px" }}>
        <div data-testid="debit-card">
          <h3 style={{ textAlign: "center" }}>Card Details</h3>
          <br />
          <div className="debit-card-body" data-testid="debit-card-body">
            <p className="debit-card-bank" data-testid="debit-card-bank-name">
              {selectedCard["bank"]}
            </p>
            <p className="debit-card-no" data-testid="debit-card-no">
              {selectedCard["number"]}
            </p>
            <br />
            <div
              style={{ height: "45px", backgroundColor: "black" }}
              className="debit-card-stripe"
            ></div>
            <p>
              <span
                className="debit-card-holder-name"
                data-testid="debit-card-holder-name"
              >
                {selectedCard["name"]}
              </span>
              <span
                className="debit-card-date"
                data-testid="debit-card-expiry-date"
              >
                {selectedCard["expiry"]}
              </span>
              <span className="debit-card-cvv" data-testid="debit-card-cvv">
                {selectedCard["cvv"]}
              </span>
            </p>
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
  );
};
