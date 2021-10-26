import React, { useEffect, useState } from "react";
// import Moment from "react-moment";
import { useParams } from "react-router-dom";
import SEO from "../../components/helmet/Helmet";
import LoadingImage from "../../assets/images/newsletter/loading.png";
import { getNewsLetterByID } from "../../database/root";

const ViewNewsletter = () => {
  const { id } = useParams();
  const newId = parseInt(id);
  const [viewLet, setViewLet] = useState({
    newsletter_title: "",
    date_created: "",
    newsletter_desc: "",
  });

  const getNewsLetterItem = async (id) => {
    const response = await getNewsLetterByID(id);
    setViewLet(response);
  };

  useEffect(() => {
    getNewsLetterItem(newId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="viewnewsletter">
      <SEO title={`${viewLet?.newsletter_title} | NU Innovation Tech Hub`} />
      <div className="container">
        <div
          className="content"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-once="true"
        >
          <div className="news_content">
            <h1 className="title">{viewLet?.newsletter_title}</h1>
            <p className="subtitle">
              {/* <Moment format={"MMMM DD YYYY"} date={viewLet?.date_created} /> */}
            </p>
            <p className="description">
              {viewLet.content ? (
                <img
                  className="img_content"
                  src={`data:image/jpeg;base64,${Buffer.from(
                    viewLet?.content.data
                  ).toString("base64")}`}
                  alt={viewLet?.content.data}
                />
              ) : (
                <img
                  className="img_content"
                  src={LoadingImage}
                  alt={LoadingImage}
                />
              )}
              <p>{viewLet?.newsletter_desc}</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNewsletter;
