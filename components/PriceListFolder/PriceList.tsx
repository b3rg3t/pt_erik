import React from "react";
import Loading from "../loading";
import Link from "next/link";

const PriceList = (props: any): React.ReactElement => {
  const prices = props?.pricelist?.allPricelists;
  console.log(prices);
  return prices?.length > 0 ? (
    <>
      <div className="price">
        {prices.map(price => (
          <div className="pricelist" key={price.id}>
            <div
              className="pricelist__card"
              style={{
                width: "100%",
                height: "75px",
                backgroundImage: `linear-gradient(to bottom right, ${price.color.hex}, ${price.secondcolor.hex})`
              }}
            ></div>
            <div className="pricelist__card">
              <h3 style={{ color: `${price.color.hex}` }}>{price.title}</h3>
            </div>
            <div className="pricelist__card list">
              <ul>
                {price.prices.map((obj, index) => (
                  <li
                    key={index}
                    style={{
                      minWidth: "150px",
                      padding: `${index[0] ? "0 0 0.5rem 0" : "0.5rem 0"}`,
                      borderBottom: "1px solid lightgray",
                      textAlign: "center"
                    }}
                  >
                    <p>
                      <span>{obj.name}</span> <span>{obj.price} kr</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pricelist__card" style={{width: "150px"}}>
              <Link href={`/traning`}>
                <a
                  style={{
                    fontSize: "1rem",
                    display: "inline-block",
                    textAlign: "center",
                    width: "100%",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "30px",
                    color: "white",
                    fontWeight: "bold",
                    backgroundImage: `linear-gradient(to bottom right, ${price.color.hex}, ${price.secondcolor.hex})`
                  }}
                >
                  LÄS MER
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .pricelist {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 1rem;
          min-width: 250px;
          -webkit-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          -moz-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
        }
        .pricelist__card {
          padding: 1rem;
        }
        .list {
          padding-top: 0;
        }
      `}</style>
    </>
  ) : (
    <Loading />
  );
};

export default PriceList;
