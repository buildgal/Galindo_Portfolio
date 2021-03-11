// import React from "react";
// import CardBtn from "../CardBtn";
// import CardContext from "../../utils/CardContext";
// import CardTitle from "../CardTitle";
// import "./style.css";

function Card() {
  return (
    <CardContext.Consumer>
      {({ image, handleBtnClick }) => (
        <div
          className="card"
          style={{
            backgroundImage: image ? `url(${image})` : "none"
          }}
        >
          {/* Here, we do not pass the title to demonstrate that it can also be consumed from the CardTitleText component */}
          <CardTitle />
          {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
          <CardBtn style={{ opacity: image ? 1 : 0 }} onClick={handleBtnClick} data-value="back" />
          <CardBtn style={{ opacity: image ? 1 : 0 }} onClick={handleBtnClick} data-value="next" />
        </div>
      )}
    </CardContext.Consumer>
  );
}

export default Card;
