import React, { useState, useEffect } from "react";
import PulseLoader from "react-spinners/BarLoader";

interface LoadingProps {
  loading?: boolean;
}
const Loading = ({ loading }: LoadingProps): React.ReactElement => {
  const [loader, setLoader] = useState(true);

  const SetLoader = () => {
    setLoader(false);
  };
  setTimeout(SetLoader, 3000);
  return (
    <>
      <div className="sweet-loading">
        {loader ? (
          <>
            <p>Loading..</p>
            <PulseLoader
              color={"rgb(126, 38, 38)"}
              loading={loading}
              width={"80px"}
              height={"0.5rem"}
            />
          </>
        ) : (
          <p>
            No data could be retrived at the moment, please try again later.
          </p>
        )}
      </div>
      <style jsx>
        {`
          .sweet-loading {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default Loading;
