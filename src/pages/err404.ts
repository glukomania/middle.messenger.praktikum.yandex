import renderDOM from "../utils/dom";
import Error from "../components/error";

const err404Page = new Error({
  errorCode: `404`,
  errorTitle: `Ooops, our dogs can't find this page...`,
  errorAdvise: `Please check the URL again`,
});

renderDOM(".root", err404Page, "container");
