import React from "react";
import { useAmp } from "next/amp";
import { contactBlockStyle } from "../../helpers/helpdata";

const MapContainer = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <>
      <section className="map">
        {isAmp ? (
          <amp-iframe
            title="Linköping"
            width={contactBlockStyle.width}
            height={contactBlockStyle.height}
            sandbox="allow-scripts allow-same-origin"
            layout="intrinsic"
            frameborder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66892.319850884!2d15.540734645536086!3d58.4037694463122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46596e719a049f95%3A0x400fef341e48e70!2sLink%C3%B6ping!5e0!3m2!1ssv!2sse!4v1580805816950!5m2!1ssv!2sse"
          ></amp-iframe>
        ) : (
          <iframe
            title="Linköping"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66892.319850884!2d15.540734645536086!3d58.4037694463122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46596e719a049f95%3A0x400fef341e48e70!2sLink%C3%B6ping!5e0!3m2!1ssv!2sse!4v1580805816950!5m2!1ssv!2sse"
            width={contactBlockStyle.width}
            height={contactBlockStyle.height}
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
          ></iframe>
        )}
      </section>
      <style jsx>{`
        .map {
          margin: 1rem 0;
          border-radius: 1rem;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          -webkit-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          -moz-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
        }
      `}</style>
    </>
  );
};

export default MapContainer;
