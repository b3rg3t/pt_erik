import React from "react";
import Loading from "../loading";
import Link from "next/link";
import { useAmp } from "next/amp";
import { AMPurl } from "../../helpers/helpdata";
import { PrisListaProps } from "../../pages/priser";

interface PriceListProps {
  pricelist: PrisListaProps[]
}

const PriceList = ({ pricelist }:PriceListProps): React.ReactElement => {
  const prices = pricelist;
  console.log(pricelist)
  const isAmp = useAmp();
  return prices.length ? (
    <>
      <div className="price" style={{ maxWidth: "1100px" }}>
        {prices.map(price => {
          const id = price?.linkpage?.id;
          const href = `/${price.routepage && price.routepage[0]}${id ? `/[id]` : ""}${isAmp ? AMPurl.url : ""}`
          const as = `/${price.routepage && price.routepage[0] + `${id ? `/${id}` : ""}` + `${isAmp ? AMPurl.url : ""}`}`
          return (
            <div className="pricelist" key={price.id} >
              <div style={{ width: "100%" }}>
                <div
                  className="pricelist__card"
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundImage: `linear-gradient(to bottom right, ${price?.color?.hex}, ${price.secondcolor.hex})`
                  }}
                ></div>
                <div className="pricelist__card">
                  <h3 style={{ color: `${price?.color?.hex}`, textAlign: "center", }}>{price.title}</h3>
                </div>

                <div className="pricelist__card list">
                  <ul style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    {price.prices && price.prices.map((priceitem, index) => (
                      <li
                        key={index}
                        style={{
                          minWidth: "150px",
                          padding: `${index[0] ? "0 0 0.5rem 0" : "0.5rem 0"}`,
                          borderBottom: "1px solid lightgray",
                          textAlign: "center",
                        }}
                      >
                        <p>
                          <span>{priceitem.name}</span> <span>{priceitem.price} kr</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div><p style={{ padding: "1rem 1rem 0 1rem" }}><i>{price.description}</i></p></div>
                </div>
              </div>
              {price?.routepage?.length ? <div className="pricelist__card" style={{
                textAlign: "center",
              }}>
                <Link
                  href={href}
                  as={as}
                >
                  <a title="Läs mer" style={{
                    fontSize: "1rem",
                    display: "inline-block",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "30px",
                    color: "white",
                    fontWeight: "bold",
                    backgroundImage: `linear-gradient(to bottom right, ${price.color.hex}, ${price.secondcolor.hex})`
                  }} >Läs mer</a>
                </Link>
              </div>
                : ''}
            </div>
          )
        })}
      </div>
      <style jsx>{`
        .pricelist {
          flex: 1 1 300px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          margin: 1rem;
          min-height: 300px;
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
