import * as pug from "pug";
import Block from "../utils/block";
import renderDOM from "../utils/dom";
import login from "../templates/login.tmpl.ts";

export default class Login extends Block {
  constructor(props) {
    super("div", { ...props, classNames: ["login_container"] });
  }

  render() {
    return pug.compile(login, {})(this.props);
  }
}

const loginPage = new Login({
  header: "Log in",
  classNames: ["container"],
});

renderDOM(".root", loginPage, "container");
