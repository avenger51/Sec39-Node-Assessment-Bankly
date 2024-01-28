/** Server for bank.ly. */

"use strict";

const app = require("./app");
const { PORT } = require("./config");

//made change with PORT and function and the server started....1/28
app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});
