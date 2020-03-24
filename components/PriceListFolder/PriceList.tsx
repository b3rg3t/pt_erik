import React from "react";
import Loading from "../loading";
import Link from "next/link";
import { useAmp } from "next/amp";
import { AMPurl } from "../../helpers/helpdata";

const PriceList = (props: any): React.ReactElement => {
  const prices = props?.pricelist?.allPricelists;
  const isAmp = useAmp();
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
              <div className="pricelist__card" >
                <Link href={`/${isAmp ? price.routepage[0] + AMPurl.url : price.routepage[0]}`} as={`/${isAmp ? price.routepage[0] + AMPurl.url : price.routepage[0]}`} >
                  <a title="Läs mer" style={{
                    fontSize: "1rem",
                    display: "inline-block",
                    textAlign: "center",
                    width: "100%",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "30px",
                    color: "white",
                    backgroundImage: `linear-gradient(to bottom right, ${price.color.hex}, ${price.secondcolor.hex})`
                  }} >LÄS MER</a>
                </Link>
              </div>
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
          min-width: 300px;
          max-width: 300px;
          -webkit-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          -moz-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
        }
        .pricelist__card {
          padding: 1rem;
        }
        .pricelist__card a{
          transition: all 0.5s ease;
        }
        .pricelist__card a:hover {
          transform: scale(1.05);
        }
        .price {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;      
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
