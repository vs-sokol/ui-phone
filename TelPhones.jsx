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
        telItemsArray.push(
          React.createElement("br", { key: `tel-br-${uuidV4()}` })
        );
      }

      let classNamesPhone = classNames(
        {
          label: telItem.color !== "normal",
          [`label-${telItem.color}`]: telItem.color !== "normal"
        },
        className || ""
      );

      telItemsArray.push(
        React.createElement(
          "span",
          {
            key: `tel-phone-${uuidV4()}`,
            className: classNamesPhone
          },
          telItem.tel
        )
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

    return React.createElement(
      "span",
      {
        key: `tel-phone-${uuidV4()}`,
        className: classNamesPhone
      },
      telFormattedObject.tel
    );
  }
}

TelPhones.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

export default TelPhones;
