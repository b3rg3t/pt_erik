import React from "react";
import Loading from "../loading";

const PriceList = (props: any): React.ReactElement => {
  const prices = props?.pricelist?.allPricelists
  console.log(prices);
  return prices?.length > 0 ? (
    <>
      <div>
        {prices.map(price => <div className="pricelist" key={price.id}><h4 style={{ color: "black" }}>{price.title}</h4><ul>{price.prices.map((obj, index) => <li key={index}><p><span>{obj.name}</span> <span>{obj.price} kr</span></p></li>)}</ul></div>)}
      </div>
      <style jsx>{`
      .pricelist {
        border-bottom: 1px solid gray;
        min-width: 150px;
      }
      `}</style>
    </>
  ) : <Loading />;
};

export default PriceList;
