import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        Powered by -{" "}
        <a
          href="http://base5builder.com/?click_source=quillpro_footer_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Base
          <span>5</span>
          Builder
        </a>
      </footer>
    );
  }
}

export default Footer;
