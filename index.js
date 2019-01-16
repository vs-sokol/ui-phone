/**
 * Возвращает форматированные телефоны
 * @param {String} tel Номер телефона в формате 81234567890 или массив через запятую 81234567890,71234567890
 * @param {Boolean?} isNotReturnAsObjectWithColor  Не возвращать объект с цветом
 * @param {Boolean?} isNotReturnEmtyString Не заполнять фразой "Не указан", если телефона нет
 * @returns {Array<string>} ["+7 123 456-78-90"]
 */
function getTelFormatted(
    tel,
    isNotReturnAsObjectWithColor,
    isNotReturnEmtyString
  ) {
    let returnObject = {
      isArray: false,
      telArray: [],
      tel: "",
      color: ""
    };
  
    function getFormattedTelObject(telInFunc) {
      let returnObjectItem = {
        tel: "",
        color: ""
      };
  
      let telFormatted = String(telInFunc).replace(/\D+/g, "");
  
      // 81234567890 || 71234567890 - полный номер => +7 123 456-78-90
      if (telFormatted.length === 11) {
        if (telFormatted.charAt(0) === "8" || telFormatted.charAt(0) === "7") {
          returnObjectItem.tel =
            "+7" +
            " " +
            telFormatted.substring(1, 4) +
            " " +
            telFormatted.substring(4, 7) +
            "-" +
            telFormatted.substring(7, 9) +
            "-" +
            telFormatted.substring(9, 11);
          returnObjectItem.color = "normal";
        } else {
          returnObjectItem.tel = telInFunc;
          returnObjectItem.color = "error";
        }
        // 1234567890 - без первой цифры => +7 123 456-78-90
      } else if (telFormatted.length === 10) {
        returnObjectItem.tel =
          "+7" +
          " " +
          telFormatted.substring(0, 3) +
          " " +
          telFormatted.substring(3, 6) +
          "-" +
          telFormatted.substring(6, 8) +
          "-" +
          telFormatted.substring(8, 10);
        returnObjectItem.color = "normal";
        // 1234567 - городской большого города => 123-45-67
      } else if (telFormatted.length === 7) {
        returnObjectItem.tel =
          telFormatted.substring(0, 3) +
          "-" +
          telFormatted.substring(3, 5) +
          "-" +
          telFormatted.substring(5, 7);
        returnObjectItem.color = "normal";
        // returnObjectItem.color = "warning";
        // 123456 - городской среднего города => 12-34-56
      } else if (telFormatted.length === 6) {
        returnObjectItem.tel =
          telFormatted.substring(0, 2) +
          "-" +
          telFormatted.substring(2, 4) +
          "-" +
          telFormatted.substring(4, 6);
        returnObjectItem.color = "normal";
        // returnObjectItem.color = "warning";
        // 12345 - городской маленького города => 1-23-45
      } else if (telFormatted.length === 5) {
        returnObjectItem.tel =
          telFormatted.substring(0, 1) +
          "-" +
          telFormatted.substring(1, 3) +
          "-" +
          telFormatted.substring(3, 5);
        returnObjectItem.color = "normal";
        // returnObjectItem.color = "warning";
      } else {
        returnObjectItem.tel = telInFunc;
        returnObjectItem.color = "error";
      }
  
      return returnObjectItem;
    }
  
    if (tel && typeof tel === "string" && tel.length) {
      // Указаны несколько номеров
      if (String(tel).indexOf(",") !== -1) {
        returnObject.isArray = true;
  
        let telArray = String(tel).split(",");
  
        for (let telItem of telArray) {
          returnObject.telArray.push(getFormattedTelObject(telItem));
        }
        // Указан один номер
      } else {
        let tempTelColor = getFormattedTelObject(tel);
        returnObject.tel = tempTelColor.tel;
        returnObject.color = tempTelColor.color;
      }
    } else {
      if (!isNotReturnEmtyString) {
        returnObject.tel = "Не указан";
        returnObject.color = "error";
      }
    }
  
    return isNotReturnAsObjectWithColor
      ? returnObject.isArray
        ? returnObject
        : returnObject.tel
      : returnObject;
  }

module.exports = getTelFormatted;
module.exports.default = getTelFormatted;