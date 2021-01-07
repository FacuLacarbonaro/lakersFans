import React, { useEffect, useState } from "react";
import "./Squad.scss";
import Footer from "../../Footer/Footer";
import axios from "axios";
import CardPlayer from "./CardPlayer";
import Modal from "../../Modal/Modal";

const Squad = () => {
  const [squad, setSquad] = useState([]);
  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:1337/players")
      .then((res) => setSquad(res.data));
    window.scrollTo(0, 0);

    setTimeout(() => {
      setLoadingPage(true);
    }, 3000);
  }, []);

  return (
    <>
      {loadingPage ? (
        <div className="squad">
          <div className="squad__hero">
            <h3>The Squad</h3>
          </div>
          <div className="squad__blur" />

          <div className="squad__grid">
            {squad.map((item) => (
              <CardPlayer item={item} />
            ))}
          </div>
          <Footer />
        </div>
      ) : (
        <Modal />
      )}
    </>
  );
};

export default Squad;
