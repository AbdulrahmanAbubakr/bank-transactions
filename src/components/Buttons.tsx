// import React from "react";

import { Link } from "react-router-dom";

function Buttons() {
  return (
    <>
      <Link
        className="bg-transparent mx-32 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        to={"/Transactions"}
      >
        Transactions
      </Link>
    </>
  );
}

export default Buttons;
