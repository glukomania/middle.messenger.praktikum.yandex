import * as pug from "pug";
import Block from "../utils/block";
import renderDOM from "../utils/dom";
import err404 from "../components/err400.tmpl";
import Error from '../components/error'

const err404Page = new Error({
  errorCode: '500',
  errorTitle: 'Looks like some cats have been here...',
  errorAdvise: 'We are alredy fixing it!',
});

renderDOM(".root", err404Page, "container");
