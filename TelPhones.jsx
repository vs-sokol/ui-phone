import React from "react";
import { v4 as uuidV4 } from "uuid";
import PropTypes from "prop-types";
import classNames from "classnames";

// UI
import getTelFormatted from "./getTelFormatted";

function TelPhones({ children, className }) {
  let telFormattedObject = getTelFormatted(children);

  if (telFormattedObject.isArray && telFormattedObject.telArray.length) {
    let telItemsArray = [];

    telFormattedObject.telArray.forEach((telItem, i) => {
      if (i !== 0) {
        telItemsArray.push(<br key={`tel-br-${uuidV4()}`} />);
      }

      let classNamesPhone = classNames(
        {
          label: telItem.color !== "normal",
          [`label-${telItem.color}`]: telItem.color !== "normal"
        },
        className || ""
      );

      telItemsArray.push(
        <span key={`tel-phone-${uuidV4()}`} className={classNamesPhone}>
          {telItem.tel}
        </span>
      );
    });

    return telItemsArray;
  } else {
    let classNamesPhone = classNames(
      {
        label: telFormattedObject.color !== "normal",
        [`label-${telFormattedObject.color}`]:
          telFormattedObject.color !== "normal"
      },
      className || ""
    );

    return <span className={classNamesPhone}>{telFormattedObject.tel}</span>;
  }
}

TelPhones.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

export default TelPhones;
