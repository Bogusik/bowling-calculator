const { app } = require("./src/app");
const config = require("../config");

app.listen(config.apiPort, () => {
  console.log(`App started on port ${config.apiPort}`);
});
