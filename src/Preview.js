import React, { Component } from "react";
import * as Marked from "marked";

window.marked = Marked;

const renderer = new window.marked.Renderer();
renderer.link = function(href, title, text) {
  return (
    '<a target="_blank" href="' +
    href +
    '" title="' +
    title +
    '">' +
    text +
    "</a>"
  );
};
window.marked.setOptions({
  tables: true,
  breaks: true,
  pedantic: false,
  renderer: renderer,
  sanitize: true,
  smartLists: true,
  smartypants: false
});
class Preview extends Component {
  render() {
    const { value } = this.props;

    const html = window.marked(value || "");
    return <div id="preview" dangerouslySetInnerHTML={{ __html: html }} />;
  }
}

export default Preview;
