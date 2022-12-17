import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <b>Oh no!</b>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
};

export default ErrorPage;
