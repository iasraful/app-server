/** @format */

const errorHandeler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (stat) {
    case 400:
      res.json({
        titel: "Validation Failed",
        message: err.message,
      });

    case 404:
      res.json({ titel: "Not Found", message: err.message });
    case 401:
      res.json({ titel: "Un Authorised", message: err.message });

    case 403:
      res.json({ titel: "Forbiddena", message: err.message });
    case 500:
      res.json({ titel: "Server Error", message: err.message });

    default:
      console.log("NO ERROR, Everything is Doing good");
      break;
  }

  res.json({ message: err.message, stackTrace: err.stack });
};
module.exports = { errorHandeler };
