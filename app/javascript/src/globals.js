// Needed for Babel 7
// https://github.com/rails/webpacker/blob/master/docs/es6.md#babel
/* eslint-disable import/no-extraneous-dependencies */
import "core-js/stable";
import "regenerator-runtime/runtime";

// Non-customizable bootstrap install
// import "bulma/css/bulma.css";
import "../styles/application.scss";

import "./navbar";

// Require all images in the /app/javascript/images directory
// https://github.com/rails/webpacker/blob/master/docs/assets.md#link-in-your-rails-views
require.context("../images", true);
