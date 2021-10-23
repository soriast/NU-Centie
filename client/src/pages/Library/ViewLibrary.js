import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SEO from "../../components/helmet/Helmet";
import { getJournalByID } from "../../database/root";

const ViewLibrary = () => {
  const { id } = useParams();
  const newId = parseInt(id);
  const [journal, setJournal] = useState({
    library_ID: 0,
    title: "",
    createdAt: new Date(),
    img: [],
  });

  const getLibraryItem = async (id) => {
    const response = await getJournalByID(id);
    setJournal(response);
  };

  useEffect(() => {
    getLibraryItem(newId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="view_library">
      <SEO title={`${journal.title} | NU Innovation Tech Hub`} />
      <div className="container">
        <h1 className="header">{journal.title}</h1>
        
        <div className="content">
          {journal?.file && (
            <iframe
              title={journal.title}
              src={`data:application/pdf;base64,${Buffer.from(journal.file.data).toString(
                "base64"
              )}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewLibrary;
