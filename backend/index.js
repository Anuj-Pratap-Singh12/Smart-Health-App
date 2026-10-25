// Local development server. On Vercel, api/index.js serves the same app.
const app = require("./app");

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Smart Health API listening on port ${port}`);
});
