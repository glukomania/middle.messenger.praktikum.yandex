import * as pug from "pug";
import Block from "../utils/block";
import renderDOM from "../utils/dom";
import signup from "../components/signup.tmpl";

export default class Signup extends Block {
  constructor(props) {
    super("div", { ...props, classNames: ["login_container"] });
  }

  render() {
    return pug.compile(signup, {})(this.props);
  }
}

const signupPage = new Signup({
  buttonName: "Sign up",
  classNames: ["container"],
});

renderDOM(".root", signupPage, "container");
