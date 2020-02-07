import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";

class UIIconsBatchIcons extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Icons - Batch Icons</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="lead">
                  <h4>There are 2 ways of using these icons</h4>
                  1. You can use the following classes:
                  <code>.batch-icon</code> plus the class name of the icon you
                  wish to use. Like this:{" "}
                  <code>
                    &lt;i className='batch-icon
                    batch-icon-speech-bubble-left-tip'&gt;&lt;/i&gt;
                  </code>
                  <br />
                  <br />
                  2. You can use the glyph code in addition to the{" "}
                  <code>.batch-icon</code> class. Like this:{" "}
                  <code>&lt;i className='batch-icon'&gt;F000&lt;/i&gt;</code>
                </div>
                <ul className="batch-icons-demo-list">
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-speech-bubble-left-tip" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F000
                    </div>
                    <span className="class-name">
                      batch-icon-speech-bubble-left-tip
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-speech-bubble-middle-tip" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F001
                    </div>
                    <span className="class-name">
                      batch-icon-speech-bubble-middle-tip
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-speech-bubble-right-tip" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F002
                    </div>
                    <span className="class-name">
                      batch-icon-speech-bubble-right-tip
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-speech-bubble-left-tip-text" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F003
                    </div>
                    <span className="class-name">
                      batch-icon-speech-bubble-left-tip-text
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-speech-bubble-middle-tip-text" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F004
                    </div>
                    <span className="class-name">
                      batch-icon-speech-bubble-middle-tip-text
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-speech-bubble-right-tip-text" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F005
                    </div>
                    <span className="class-name">
                      batch-icon-speech-bubble-right-tip-text
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-speech-bubble-left-tip-solid-text" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F006
                    </div>
                    <span className="class-name">
                      batch-icon-speech-bubble-left-tip-solid-text
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-speech-bubble-middle-tip-solid-text" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F007
                    </div>
                    <span className="class-name">
                      batch-icon-speech-bubble-middle-tip-solid-text
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-speech-bubble-right-tip-solid-text" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F008
                    </div>
                    <span className="class-name">
                      batch-icon-speech-bubble-right-tip-solid-text
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-speech-bubble-left-tip-chat" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F009
                    </div>
                    <span className="class-name">
                      batch-icon-speech-bubble-left-tip-chat
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-speech-bubble-right-tip-chat" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F00A
                    </div>
                    <span className="class-name">
                      batch-icon-speech-bubble-right-tip-chat
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-browser" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F00B
                    </div>
                    <span className="class-name">batch-icon-browser</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-browser-new-window" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F00C
                    </div>
                    <span className="class-name">
                      batch-icon-browser-new-window
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-browser-minimise" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F00D
                    </div>
                    <span className="class-name">
                      batch-icon-browser-minimise
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-browser-close" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F00E
                    </div>
                    <span className="class-name">batch-icon-browser-close</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-browser-upload" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F010
                    </div>
                    <span className="class-name">
                      batch-icon-browser-upload
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-browser-download" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F011
                    </div>
                    <span className="class-name">
                      batch-icon-browser-download
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-terminal" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F012
                    </div>
                    <span className="class-name">batch-icon-terminal</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-browser-windows" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F013
                    </div>
                    <span className="class-name">
                      batch-icon-browser-windows
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-browser-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F014
                    </div>
                    <span className="class-name">batch-icon-browser-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-browser-alt-new-window" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F015
                    </div>
                    <span className="class-name">
                      batch-icon-browser-alt-new-window
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-browser-alt-minimise" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F016
                    </div>
                    <span className="class-name">
                      batch-icon-browser-alt-minimise
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-browser-alt-close" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F017
                    </div>
                    <span className="class-name">
                      batch-icon-browser-alt-close
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-browser-alt-upload" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F018
                    </div>
                    <span className="class-name">
                      batch-icon-browser-alt-upload
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-browser-alt-download" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F019
                    </div>
                    <span className="class-name">
                      batch-icon-browser-alt-download
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-terminal-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F01A
                    </div>
                    <span className="class-name">batch-icon-terminal-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-browser-alt-windows" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F01B
                    </div>
                    <span className="class-name">
                      batch-icon-browser-alt-windows
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-windows" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F01C
                    </div>
                    <span className="class-name">batch-icon-windows</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-plus" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F01D
                    </div>
                    <span className="class-name">batch-icon-plus</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-minus" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F01E
                    </div>
                    <span className="class-name">batch-icon-minus</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-marquee" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F020
                    </div>
                    <span className="class-name">batch-icon-marquee</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-marquee-plus" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F021
                    </div>
                    <span className="class-name">batch-icon-marquee-plus</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-marquee-minus" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F022
                    </div>
                    <span className="class-name">batch-icon-marquee-minus</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-marquee-upload" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F023
                    </div>
                    <span className="class-name">
                      batch-icon-marquee-upload
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-marquee-download" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F024
                    </div>
                    <span className="class-name">
                      batch-icon-marquee-download
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-crate" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F025
                    </div>
                    <span className="class-name">batch-icon-crate</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-grid" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F026
                    </div>
                    <span className="class-name">batch-icon-grid</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-grid-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F027
                    </div>
                    <span className="class-name">batch-icon-grid-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-list" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F028
                    </div>
                    <span className="class-name">batch-icon-list</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-list-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F029
                    </div>
                    <span className="class-name">batch-icon-list-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-in" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F02A
                    </div>
                    <span className="class-name">batch-icon-in</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-out" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F02B
                    </div>
                    <span className="class-name">batch-icon-out</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-inbox" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F02C
                    </div>
                    <span className="class-name">batch-icon-inbox</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-outbox" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F02D
                    </div>
                    <span className="class-name">batch-icon-outbox</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-outgoing" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F02E
                    </div>
                    <span className="class-name">batch-icon-outgoing</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-paragraph-justify" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F030
                    </div>
                    <span className="class-name">
                      batch-icon-paragraph-justify
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-paragraph-left" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F031
                    </div>
                    <span className="class-name">
                      batch-icon-paragraph-left
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-paragraph-center" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F032
                    </div>
                    <span className="class-name">
                      batch-icon-paragraph-center
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-paragraph-right" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F033
                    </div>
                    <span className="class-name">
                      batch-icon-paragraph-right
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-paragraph-alt-justify" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F034
                    </div>
                    <span className="class-name">
                      batch-icon-paragraph-alt-justify
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-paragraph-alt-left" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F035
                    </div>
                    <span className="class-name">
                      batch-icon-paragraph-alt-left
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-paragraph-alt-center" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F036
                    </div>
                    <span className="class-name">
                      batch-icon-paragraph-alt-center
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-paragraph-alt-right" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F037
                    </div>
                    <span className="class-name">
                      batch-icon-paragraph-alt-right
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-audio-mute" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F038
                    </div>
                    <span className="class-name">batch-icon-audio-mute</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-audio-low" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F039
                    </div>
                    <span className="class-name">batch-icon-audio-low</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-audio-mid" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F03A
                    </div>
                    <span className="class-name">batch-icon-audio-mid</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-audio-high" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F03B
                    </div>
                    <span className="class-name">batch-icon-audio-high</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-brightness-high" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F03C
                    </div>
                    <span className="class-name">
                      batch-icon-brightness-high
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-brightness-low" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F03D
                    </div>
                    <span className="class-name">
                      batch-icon-brightness-low
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-contrast" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F03E
                    </div>
                    <span className="class-name">batch-icon-contrast</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-image" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F040
                    </div>
                    <span className="class-name">batch-icon-image</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-video" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F041
                    </div>
                    <span className="class-name">batch-icon-video</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-video-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F042
                    </div>
                    <span className="class-name">batch-icon-video-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-user" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F043
                    </div>
                    <span className="class-name">batch-icon-user</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-user-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F044
                    </div>
                    <span className="class-name">batch-icon-user-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-users" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F045
                    </div>
                    <span className="class-name">batch-icon-users</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-user-alt-2" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F046
                    </div>
                    <span className="class-name">batch-icon-user-alt-2</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-polaroid" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F047
                    </div>
                    <span className="class-name">batch-icon-polaroid</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-polaroid-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F048
                    </div>
                    <span className="class-name">batch-icon-polaroid-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-heart-full" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F049
                    </div>
                    <span className="class-name">batch-icon-heart-full</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-heart-half" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F04A
                    </div>
                    <span className="class-name">batch-icon-heart-half</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-heart-empty" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F04B
                    </div>
                    <span className="class-name">batch-icon-heart-empty</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-settings" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F04C
                    </div>
                    <span className="class-name">batch-icon-settings</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-settings-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F04D
                    </div>
                    <span className="class-name">batch-icon-settings-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-settings-alt-2" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F04E
                    </div>
                    <span className="class-name">
                      batch-icon-settings-alt-2
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-flask-full" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F050
                    </div>
                    <span className="class-name">batch-icon-flask-full</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-flask-empty" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F051
                    </div>
                    <span className="class-name">batch-icon-flask-empty</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-switch-on" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F052
                    </div>
                    <span className="class-name">batch-icon-switch-on</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-switch-off" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F053
                    </div>
                    <span className="class-name">batch-icon-switch-off</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-toggle-on" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F054
                    </div>
                    <span className="class-name">batch-icon-toggle-on</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-toggle-off" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F055
                    </div>
                    <span className="class-name">batch-icon-toggle-off</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-bin" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F056
                    </div>
                    <span className="class-name">batch-icon-bin</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-bin-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F057
                    </div>
                    <span className="class-name">batch-icon-bin-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-stiffy" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F058
                    </div>
                    <span className="class-name">batch-icon-stiffy</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-floppy" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F059
                    </div>
                    <span className="class-name">batch-icon-floppy</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-notes" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F05A
                    </div>
                    <span className="class-name">batch-icon-notes</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-calendar" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F05B
                    </div>
                    <span className="class-name">batch-icon-calendar</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-reminder" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F05C
                    </div>
                    <span className="class-name">batch-icon-reminder</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-clipboard" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F05D
                    </div>
                    <span className="class-name">batch-icon-clipboard</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-clipboard-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F05E
                    </div>
                    <span className="class-name">batch-icon-clipboard-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-terminal-alt-2" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F060
                    </div>
                    <span className="class-name">
                      batch-icon-terminal-alt-2
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-code" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F061
                    </div>
                    <span className="class-name">batch-icon-code</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-curlybrace" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F062
                    </div>
                    <span className="class-name">batch-icon-curlybrace</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-curlybrace-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F063
                    </div>
                    <span className="class-name">
                      batch-icon-curlybrace-alt
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-square-brackets" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F064
                    </div>
                    <span className="class-name">
                      batch-icon-square-brackets
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-cmd" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F065
                    </div>
                    <span className="class-name">batch-icon-cmd</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-section" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F066
                    </div>
                    <span className="class-name">batch-icon-section</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-infinity" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F067
                    </div>
                    <span className="class-name">batch-icon-infinity</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-tilde" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F068
                    </div>
                    <span className="class-name">batch-icon-tilde</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-power" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F069
                    </div>
                    <span className="class-name">batch-icon-power</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-keys" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F06A
                    </div>
                    <span className="class-name">batch-icon-keys</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-mixer" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F06B
                    </div>
                    <span className="class-name">batch-icon-mixer</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-wave" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F06C
                    </div>
                    <span className="class-name">batch-icon-wave</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-wave-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F06D
                    </div>
                    <span className="class-name">batch-icon-wave-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-vinyl" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F06E
                    </div>
                    <span className="class-name">batch-icon-vinyl</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-spool" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F070
                    </div>
                    <span className="class-name">batch-icon-spool</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-casette" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F071
                    </div>
                    <span className="class-name">batch-icon-casette</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-voicemail" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F072
                    </div>
                    <span className="class-name">batch-icon-voicemail</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-microphone" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F073
                    </div>
                    <span className="class-name">batch-icon-microphone</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-microphone-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F074
                    </div>
                    <span className="class-name">
                      batch-icon-microphone-alt
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-bullhorn" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F075
                    </div>
                    <span className="class-name">batch-icon-bullhorn</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-bullhorn-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F076
                    </div>
                    <span className="class-name">batch-icon-bullhorn-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-headphones" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F077
                    </div>
                    <span className="class-name">batch-icon-headphones</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-camera" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F078
                    </div>
                    <span className="class-name">batch-icon-camera</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-camera-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F079
                    </div>
                    <span className="class-name">batch-icon-camera-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-camera-alt-2" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F07A
                    </div>
                    <span className="class-name">batch-icon-camera-alt-2</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-pin" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F07B
                    </div>
                    <span className="class-name">batch-icon-pin</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-pin-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F07C
                    </div>
                    <span className="class-name">batch-icon-pin-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-map" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F07D
                    </div>
                    <span className="class-name">batch-icon-map</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-map-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F07E
                    </div>
                    <span className="class-name">batch-icon-map-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-user-card" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F080
                    </div>
                    <span className="class-name">batch-icon-user-card</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-battery-full" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F081
                    </div>
                    <span className="class-name">batch-icon-battery-full</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-battery-80" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F082
                    </div>
                    <span className="class-name">batch-icon-battery-80</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-battery-60" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F083
                    </div>
                    <span className="class-name">batch-icon-battery-60</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-battery-40" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F084
                    </div>
                    <span className="class-name">batch-icon-battery-40</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-battery-20" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F085
                    </div>
                    <span className="class-name">batch-icon-battery-20</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-battery-empty" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F086
                    </div>
                    <span className="class-name">batch-icon-battery-empty</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-battery-charge" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F087
                    </div>
                    <span className="class-name">
                      batch-icon-battery-charge
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-battery-alt-100" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F088
                    </div>
                    <span className="class-name">
                      batch-icon-battery-alt-100
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-battery-alt-80" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F089
                    </div>
                    <span className="class-name">
                      batch-icon-battery-alt-80
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-battery-alt-60" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F08A
                    </div>
                    <span className="class-name">
                      batch-icon-battery-alt-60
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-battery-alt-40" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F08B
                    </div>
                    <span className="class-name">
                      batch-icon-battery-alt-40
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-battery-alt-20" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F08C
                    </div>
                    <span className="class-name">
                      batch-icon-battery-alt-20
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-battery-alt--empty" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F08D
                    </div>
                    <span className="class-name">
                      batch-icon-battery-alt--empty
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-battery-alt-charge" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F08E
                    </div>
                    <span className="class-name">
                      batch-icon-battery-alt-charge
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-clock" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F090
                    </div>
                    <span className="class-name">batch-icon-clock</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-flux" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F091
                    </div>
                    <span className="class-name">batch-icon-flux</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-sleep" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F092
                    </div>
                    <span className="class-name">batch-icon-sleep</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-nope" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F093
                    </div>
                    <span className="class-name">batch-icon-nope</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-search" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F094
                    </div>
                    <span className="class-name">batch-icon-search</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-zoom-in" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F095
                    </div>
                    <span className="class-name">batch-icon-zoom-in</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-zoom-out" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F096
                    </div>
                    <span className="class-name">batch-icon-zoom-out</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-search-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F097
                    </div>
                    <span className="class-name">batch-icon-search-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-zoom-in-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F098
                    </div>
                    <span className="class-name">batch-icon-zoom-in-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-zoom-out-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F099
                    </div>
                    <span className="class-name">batch-icon-zoom-out-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-eye" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F09A
                    </div>
                    <span className="class-name">batch-icon-eye</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-eye-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F09B
                    </div>
                    <span className="class-name">batch-icon-eye-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-wifi-low" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F09C
                    </div>
                    <span className="class-name">batch-icon-wifi-low</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-wifi-half" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F09D
                    </div>
                    <span className="class-name">batch-icon-wifi-half</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-wifi-full" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F09E
                    </div>
                    <span className="class-name">batch-icon-wifi-full</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-expand" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0A0
                    </div>
                    <span className="class-name">batch-icon-expand</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-contract" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0A1
                    </div>
                    <span className="class-name">batch-icon-contract</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-expand-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0A2
                    </div>
                    <span className="class-name">batch-icon-expand-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-contract-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0A3
                    </div>
                    <span className="class-name">batch-icon-contract-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-expand-alt-2" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0A4
                    </div>
                    <span className="class-name">batch-icon-expand-alt-2</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-maximise" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0A5
                    </div>
                    <span className="class-name">batch-icon-maximise</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-contract-alt-2" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0A6
                    </div>
                    <span className="class-name">
                      batch-icon-contract-alt-2
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-menu-pull-down" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0A7
                    </div>
                    <span className="class-name">
                      batch-icon-menu-pull-down
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-menu-pull-up" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0A8
                    </div>
                    <span className="class-name">batch-icon-menu-pull-up</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-menu" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0A9
                    </div>
                    <span className="class-name">batch-icon-menu</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-menu-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0AA
                    </div>
                    <span className="class-name">batch-icon-menu-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-tag" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0AB
                    </div>
                    <span className="class-name">batch-icon-tag</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-tag-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0AC
                    </div>
                    <span className="class-name">batch-icon-tag-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-tag-alt-2" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0AD
                    </div>
                    <span className="class-name">batch-icon-tag-alt-2</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-tag-alt-3" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0AE
                    </div>
                    <span className="class-name">batch-icon-tag-alt-3</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-refresh" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0B0
                    </div>
                    <span className="class-name">batch-icon-refresh</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-repeat" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0B1
                    </div>
                    <span className="class-name">batch-icon-repeat</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-repeat-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0B2
                    </div>
                    <span className="class-name">batch-icon-repeat-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-shuffle" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0B3
                    </div>
                    <span className="class-name">batch-icon-shuffle</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-return" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0B4
                    </div>
                    <span className="class-name">batch-icon-return</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-wiggle" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0B5
                    </div>
                    <span className="class-name">batch-icon-wiggle</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-split" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0B6
                    </div>
                    <span className="class-name">batch-icon-split</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-split-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0B7
                    </div>
                    <span className="class-name">batch-icon-split-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-converge" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0B8
                    </div>
                    <span className="class-name">batch-icon-converge</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-swap" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0B9
                    </div>
                    <span className="class-name">batch-icon-swap</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-swap-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0BA
                    </div>
                    <span className="class-name">batch-icon-swap-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-transfer" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0BB
                    </div>
                    <span className="class-name">batch-icon-transfer</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-tray" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0BC
                    </div>
                    <span className="class-name">batch-icon-tray</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-inbox-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0BD
                    </div>
                    <span className="class-name">batch-icon-inbox-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-outbox-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0BE
                    </div>
                    <span className="class-name">batch-icon-outbox-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-key" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0C0
                    </div>
                    <span className="class-name">batch-icon-key</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-key-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0C1
                    </div>
                    <span className="class-name">batch-icon-key-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-locked" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0C2
                    </div>
                    <span className="class-name">batch-icon-locked</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-unlocked" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0C3
                    </div>
                    <span className="class-name">batch-icon-unlocked</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-safe" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0C4
                    </div>
                    <span className="class-name">batch-icon-safe</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-spinner" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0C5
                    </div>
                    <span className="class-name">batch-icon-spinner</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-spinner-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0C6
                    </div>
                    <span className="class-name">batch-icon-spinner-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-spinner-alt-2" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0C7
                    </div>
                    <span className="class-name">batch-icon-spinner-alt-2</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-stamp" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0C8
                    </div>
                    <span className="class-name">batch-icon-stamp</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-stamp-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0C9
                    </div>
                    <span className="class-name">batch-icon-stamp-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-mail" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0CA
                    </div>
                    <span className="class-name">batch-icon-mail</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-mail-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0CB
                    </div>
                    <span className="class-name">batch-icon-mail-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-mail-alt-2" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0CC
                    </div>
                    <span className="class-name">batch-icon-mail-alt-2</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-address-book" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0CD
                    </div>
                    <span className="class-name">batch-icon-address-book</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-address-book-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0CE
                    </div>
                    <span className="class-name">
                      batch-icon-address-book-alt
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-book" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0D0
                    </div>
                    <span className="class-name">batch-icon-book</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-book-lines" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0D1
                    </div>
                    <span className="class-name">batch-icon-book-lines</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-book-alt-" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0D2
                    </div>
                    <span className="class-name">batch-icon-book-alt-</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-book-alt-lines" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0D3
                    </div>
                    <span className="class-name">
                      batch-icon-book-alt-lines
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-paper-roll" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0D4
                    </div>
                    <span className="class-name">batch-icon-paper-roll</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-paper-roll-ripped" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0D5
                    </div>
                    <span className="class-name">
                      batch-icon-paper-roll-ripped
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-paper-ripped" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0D6
                    </div>
                    <span className="class-name">batch-icon-paper-ripped</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-database" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0D7
                    </div>
                    <span className="class-name">batch-icon-database</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-database-add" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0D8
                    </div>
                    <span className="class-name">batch-icon-database-add</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-database-remove" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0D9
                    </div>
                    <span className="class-name">
                      batch-icon-database-remove
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-support" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0DA
                    </div>
                    <span className="class-name">batch-icon-support</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-support-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0DB
                    </div>
                    <span className="class-name">batch-icon-support-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-support-alt-2" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0DC
                    </div>
                    <span className="class-name">batch-icon-support-alt-2</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-podcast" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0DD
                    </div>
                    <span className="class-name">batch-icon-podcast</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-podcast-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0DE
                    </div>
                    <span className="class-name">batch-icon-podcast-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-folder" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0E0
                    </div>
                    <span className="class-name">batch-icon-folder</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-folder-add" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0E1
                    </div>
                    <span className="class-name">batch-icon-folder-add</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-folder-remove" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0E2
                    </div>
                    <span className="class-name">batch-icon-folder-remove</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-folder-duplicate" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0E3
                    </div>
                    <span className="class-name">
                      batch-icon-folder-duplicate
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-folder-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0E4
                    </div>
                    <span className="class-name">batch-icon-folder-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-folder-alt-add" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0E5
                    </div>
                    <span className="class-name">
                      batch-icon-folder-alt-add
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-folder-alt-remove" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0E6
                    </div>
                    <span className="class-name">
                      batch-icon-folder-alt-remove
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-folder-alt-duplicate" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0E7
                    </div>
                    <span className="class-name">
                      batch-icon-folder-alt-duplicate
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-cloud" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0E8
                    </div>
                    <span className="class-name">batch-icon-cloud</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-cloud-upload" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0E9
                    </div>
                    <span className="class-name">batch-icon-cloud-upload</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-cloud-download" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0EA
                    </div>
                    <span className="class-name">
                      batch-icon-cloud-download
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-cloud-add" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0EB
                    </div>
                    <span className="class-name">batch-icon-cloud-add</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-cloud-remove" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0EC
                    </div>
                    <span className="class-name">batch-icon-cloud-remove</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-cloud-alt-add" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0ED
                    </div>
                    <span className="class-name">batch-icon-cloud-alt-add</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-cloud-alt-remove" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0EE
                    </div>
                    <span className="class-name">
                      batch-icon-cloud-alt-remove
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-store" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F100
                    </div>
                    <span className="class-name">batch-icon-store</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-store-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F101
                    </div>
                    <span className="class-name">batch-icon-store-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-credit-card" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F102
                    </div>
                    <span className="class-name">batch-icon-credit-card</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-credit-card-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F103
                    </div>
                    <span className="class-name">
                      batch-icon-credit-card-alt
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-credit-card-alt-2" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F104
                    </div>
                    <span className="class-name">
                      batch-icon-credit-card-alt-2
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-credit-card-alt-3" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F105
                    </div>
                    <span className="class-name">
                      batch-icon-credit-card-alt-3
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-wallet" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F106
                    </div>
                    <span className="class-name">batch-icon-wallet</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-wallet-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F107
                    </div>
                    <span className="class-name">batch-icon-wallet-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-newspaper" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F108
                    </div>
                    <span className="class-name">batch-icon-newspaper</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-newspaper-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F109
                    </div>
                    <span className="class-name">batch-icon-newspaper-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-document" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F10A
                    </div>
                    <span className="class-name">batch-icon-document</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-document-add" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F11B
                    </div>
                    <span className="class-name">batch-icon-document-add</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-document-remove" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F10C
                    </div>
                    <span className="class-name">
                      batch-icon-document-remove
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-attachment" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F10D
                    </div>
                    <span className="class-name">batch-icon-attachment</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-attachment-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F10E
                    </div>
                    <span className="class-name">
                      batch-icon-attachment-alt
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-align-top-edges" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F110
                    </div>
                    <span className="class-name">
                      batch-icon-align-top-edges
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-align-vertical-centers" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F111
                    </div>
                    <span className="class-name">
                      batch-icon-align-vertical-centers
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-align-bottom-edges" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F112
                    </div>
                    <span className="class-name">
                      batch-icon-align-bottom-edges
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-align-left-edges" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F113
                    </div>
                    <span className="class-name">
                      batch-icon-align-left-edges
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-align-horizontal-centers" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F114
                    </div>
                    <span className="class-name">
                      batch-icon-align-horizontal-centers
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-align-right-edges" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F115
                    </div>
                    <span className="class-name">
                      batch-icon-align-right-edges
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-distribute-top-edges" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F116
                    </div>
                    <span className="class-name">
                      batch-icon-distribute-top-edges
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-distribute-vertical-centers" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F117
                    </div>
                    <span className="class-name">
                      batch-icon-distribute-vertical-centers
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-distribute-bottom-edges" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F118
                    </div>
                    <span className="class-name">
                      batch-icon-distribute-bottom-edges
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-distribute-left-edges" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F119
                    </div>
                    <span className="class-name">
                      batch-icon-distribute-left-edges
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-distribute-right-edges" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F11A
                    </div>
                    <span className="class-name">
                      batch-icon-distribute-right-edges
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-distribute-horizontal-centers" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F11B
                    </div>
                    <span className="class-name">
                      batch-icon-distribute-horizontal-centers
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-unite" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F11C
                    </div>
                    <span className="class-name">batch-icon-unite</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-subtract" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F11D
                    </div>
                    <span className="class-name">batch-icon-subtract</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-intersect" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F11E
                    </div>
                    <span className="class-name">batch-icon-intersect</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-exclude" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F120
                    </div>
                    <span className="class-name">batch-icon-exclude</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-layout-left-sidebar" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F121
                    </div>
                    <span className="class-name">
                      batch-icon-layout-left-sidebar
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-layout-center-column" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F122
                    </div>
                    <span className="class-name">
                      batch-icon-layout-center-column
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-layout-right-sidebar" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F123
                    </div>
                    <span className="class-name">
                      batch-icon-layout-right-sidebar
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-layout-content-left" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F124
                    </div>
                    <span className="class-name">
                      batch-icon-layout-content-left
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-layout-content-right" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F125
                    </div>
                    <span className="class-name">
                      batch-icon-layout-content-right
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-layout-alt-content-left" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F126
                    </div>
                    <span className="class-name">
                      batch-icon-layout-alt-content-left
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-layout-alt-content-right" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F127
                    </div>
                    <span className="class-name">
                      batch-icon-layout-alt-content-right
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-rulers" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F128
                    </div>
                    <span className="class-name">batch-icon-rulers</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-swatch" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F129
                    </div>
                    <span className="class-name">batch-icon-swatch</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-swatches" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F12A
                    </div>
                    <span className="class-name">batch-icon-swatches</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-crop" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F12B
                    </div>
                    <span className="class-name">batch-icon-crop</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-bulb" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F12C
                    </div>
                    <span className="class-name">batch-icon-bulb</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-bulb-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F12D
                    </div>
                    <span className="class-name">batch-icon-bulb-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-droplet" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F12E
                    </div>
                    <span className="class-name">batch-icon-droplet</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-print" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F0130
                    </div>
                    <span className="class-name">batch-icon-print</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-shred" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F131
                    </div>
                    <span className="class-name">batch-icon-shred</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-bell" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F132
                    </div>
                    <span className="class-name">batch-icon-bell</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-bell-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F133
                    </div>
                    <span className="class-name">batch-icon-bell-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-bell-mute" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F134
                    </div>
                    <span className="class-name">batch-icon-bell-mute</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-bell-mute-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F135
                    </div>
                    <span className="class-name">batch-icon-bell-mute-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-nib" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F136
                    </div>
                    <span className="class-name">batch-icon-nib</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-quill" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F137
                    </div>
                    <span className="class-name">batch-icon-quill</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-quill-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F138
                    </div>
                    <span className="class-name">batch-icon-quill-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-pencil" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F139
                    </div>
                    <span className="class-name">batch-icon-pencil</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-pen" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F13A
                    </div>
                    <span className="class-name">batch-icon-pen</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-compose" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F13B
                    </div>
                    <span className="class-name">batch-icon-compose</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-compose-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F13C
                    </div>
                    <span className="class-name">batch-icon-compose-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-compose-alt-2" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F13D
                    </div>
                    <span className="class-name">batch-icon-compose-alt-2</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-compose-alt-3" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F13E
                    </div>
                    <span className="class-name">batch-icon-compose-alt-3</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-bullet" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F140
                    </div>
                    <span className="class-name">batch-icon-bullet</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-ellipsis" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F141
                    </div>
                    <span className="class-name">batch-icon-ellipsis</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-timeline" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F142
                    </div>
                    <span className="class-name">batch-icon-timeline</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-link" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F143
                    </div>
                    <span className="class-name">batch-icon-link</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-link-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F144
                    </div>
                    <span className="class-name">batch-icon-link-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-anchor" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F145
                    </div>
                    <span className="class-name">batch-icon-anchor</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-asterisk" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F146
                    </div>
                    <span className="class-name">batch-icon-asterisk</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-compass" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F147
                    </div>
                    <span className="class-name">batch-icon-compass</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-arrow-up" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F148
                    </div>
                    <span className="class-name">batch-icon-arrow-up</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-arrow-down" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F149
                    </div>
                    <span className="class-name">batch-icon-arrow-down</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-arrow-left" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F14A
                    </div>
                    <span className="class-name">batch-icon-arrow-left</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-arrow-right" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F14B
                    </div>
                    <span className="class-name">batch-icon-arrow-right</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-add" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F14C
                    </div>
                    <span className="class-name">batch-icon-add</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-remove" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F14D
                    </div>
                    <span className="class-name">batch-icon-remove</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-delete" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F14E
                    </div>
                    <span className="class-name">batch-icon-delete</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-mail-alt-3" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F150
                    </div>
                    <span className="class-name">batch-icon-mail-alt-3</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-at" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F151
                    </div>
                    <span className="class-name">batch-icon-at</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-envelope" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F152
                    </div>
                    <span className="class-name">batch-icon-envelope</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-mail-outgoing" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F153
                    </div>
                    <span className="class-name">batch-icon-mail-outgoing</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-mail-incoming" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F154
                    </div>
                    <span className="class-name">batch-icon-mail-incoming</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-bin-alt-2" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F155
                    </div>
                    <span className="class-name">batch-icon-bin-alt-2</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-outgoing-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F156
                    </div>
                    <span className="class-name">batch-icon-outgoing-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-reply-all" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F157
                    </div>
                    <span className="class-name">batch-icon-reply-all</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-reply" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F158
                    </div>
                    <span className="class-name">batch-icon-reply</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-options" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F159
                    </div>
                    <span className="class-name">batch-icon-options</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-spam" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F15A
                    </div>
                    <span className="class-name">batch-icon-spam</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-spam-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F15B
                    </div>
                    <span className="class-name">batch-icon-spam-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-star" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F15C
                    </div>
                    <span className="class-name">batch-icon-star</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-star-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F15D
                    </div>
                    <span className="class-name">batch-icon-star-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-flag" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F15E
                    </div>
                    <span className="class-name">batch-icon-flag</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-flag-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F160
                    </div>
                    <span className="class-name">batch-icon-flag-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-home" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F161
                    </div>
                    <span className="class-name">batch-icon-home</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-home-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F162
                    </div>
                    <span className="class-name">batch-icon-home-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-home-alt-2" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F163
                    </div>
                    <span className="class-name">batch-icon-home-alt-2</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-tick" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F164
                    </div>
                    <span className="class-name">batch-icon-tick</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-cross" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F165
                    </div>
                    <span className="class-name">batch-icon-cross</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-alarm-clock" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F166
                    </div>
                    <span className="class-name">batch-icon-alarm-clock</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-stopwatch" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F167
                    </div>
                    <span className="class-name">batch-icon-stopwatch</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-previous" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F168
                    </div>
                    <span className="class-name">batch-icon-previous</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-rewind" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F169
                    </div>
                    <span className="class-name">batch-icon-rewind</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-stop" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F16A
                    </div>
                    <span className="class-name">batch-icon-stop</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-play" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F16B
                    </div>
                    <span className="class-name">batch-icon-play</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-pause" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F16C
                    </div>
                    <span className="class-name">batch-icon-pause</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-fast-forward" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F16D
                    </div>
                    <span className="class-name">batch-icon-fast-forward</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-next" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F16E
                    </div>
                    <span className="class-name">batch-icon-next</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-user-alt-3" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F170
                    </div>
                    <span className="class-name">batch-icon-user-alt-3</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-user-alt-add" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F171
                    </div>
                    <span className="class-name">batch-icon-user-alt-add</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-user-alt-remove" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F172
                    </div>
                    <span className="class-name">
                      batch-icon-user-alt-remove
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-user-alt-add-2" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F173
                    </div>
                    <span className="class-name">
                      batch-icon-user-alt-add-2
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-user-alt-remove-2" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F174
                    </div>
                    <span className="class-name">
                      batch-icon-user-alt-remove-2
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-fork" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F175
                    </div>
                    <span className="class-name">batch-icon-fork</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-pull" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F176
                    </div>
                    <span className="class-name">batch-icon-pull</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-commit" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F177
                    </div>
                    <span className="class-name">batch-icon-commit</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-watch" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F178
                    </div>
                    <span className="class-name">batch-icon-watch</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-watch-alt" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F179
                    </div>
                    <span className="class-name">batch-icon-watch-alt</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-unwatch" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F17A
                    </div>
                    <span className="class-name">batch-icon-unwatch</span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-settings-alt-3" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F17B
                    </div>
                    <span className="class-name">
                      batch-icon-settings-alt-3
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="batch-icon batch-icon-revert" />
                    </div>
                    <div className="glyph batch-icon">
                      <span className="glyph-caption">Glyph:</span> F17C
                    </div>
                    <span className="class-name">batch-icon-revert</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <Footer />
          </div>
        </div>
      </main>
    );
  }
}

export default UIIconsBatchIcons;
