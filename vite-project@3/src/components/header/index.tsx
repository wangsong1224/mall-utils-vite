import { useState, useCallback } from "react";
import "./index.scss";
export default () => {
  const [headerObj, changeHeaderObj] = useState({ headerColor: "red" });
  return (
    <h3 className="header">
      headers <p className="p">{headerObj.headerColor}</p>
    </h3>
  );
};
