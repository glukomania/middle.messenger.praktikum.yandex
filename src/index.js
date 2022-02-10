import Transparency from "transparency/index.js";
import { privatChats, messages } from "../data.js";

const breeds = [
  "poodle",
  "bulldog",
  "labrador",
  "corgi",
  "beagle",
  "husky",
  "rottweiler",
  "boxer",
  "shih tzu",
];
const userNameDecorator = function () {
  return "<b>" + this.title + "</b>  (" + breeds[Math.floor(Math.random() * breeds.length)] + ")";
};

const directives = {
  title: { html: userNameDecorator },
};

const getHTML = function () {
  console.log("gethtml", this.owner);

  if (this.owner === "me") {
    console.log("hetHTML - me");
    return ownMessage(this.message, this.time);
  } else {
    console.log("hetHTML - other");

    return otherMessage(this.message, this.time);
  }
};

const otherMessage = function (message, time) {
  console.log("other");

  return `
  <div class="message-container-outcome">
    <i class="fa fa-user"></i>
    <div class="message-outcome">
      <div class="message-text">${message}</div>
      <div class="message-time">${time}</div>
    </div>
  </div>`;
};

const ownMessage = function (message, time) {
  console.log("my");
  return `
  <div class="message-container-income">
    <i class="fa fa-user"></i>
    <div class="message-income">
      <div class="message-text">${message}</div>
      <div class="message-time">${time}</div>
    </div>
  </div>`;
};

const directivesMessage = {
  insert: { html: getHTML },
};

Transparency.render(document.getElementById("user-wrapper"), privatChats, directives);

Transparency.render(document.getElementById("message"), messages, directivesMessage);
