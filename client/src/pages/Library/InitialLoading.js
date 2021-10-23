import React, { Fragment } from "react";
import LoadingCard from "../../components/library/LoadingCard";

const InitialLoading = ({ count }) => {
  return (
    <Fragment>
      {Array(9)
        .fill()
        .map((_, i) => (
          <LoadingCard key={i} />
        ))}
    </Fragment>
  );
};

export default InitialLoading;
