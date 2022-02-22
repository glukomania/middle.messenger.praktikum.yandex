import * as pug from "pug";
import Block from "../utils/block";
import renderDOM from "../utils/dom";
import loginTmpl from "../layout/templates/pages/loginTmpl.tmpl.ts";
import Header from "../components/header.ts";

export default class Login extends Block {
  constructor(props) {
    super("div", { ...props, classNames: ["login_container"] });
  }

  render() {
    return pug.compile(loginTmpl, {})(this.props);
  }
}

const loginPage = new Login({
  header: "Log in",
  classNames: ["container"],
});

const header = new Header({
  header: "header",
  classNames: ["logo-container"],
});

renderDOM(".root", loginPage, "container");
renderDOM(".header", header, "logo-container");
