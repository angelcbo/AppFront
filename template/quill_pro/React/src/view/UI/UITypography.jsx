import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";

class UITypography extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Typography</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Headings</div>
              <div className="card-body">
                <h1>
                  h1. Bootstrap heading{" "}
                  <span className="badge badge-default">Badge</span>
                </h1>
                <h2>
                  h2. Bootstrap heading{" "}
                  <span className="badge badge-default">Badge</span>
                </h2>
                <h3>
                  h3. Bootstrap heading{" "}
                  <span className="badge badge-default">Badge</span>
                </h3>
                <h4>
                  h4. Bootstrap heading{" "}
                  <span className="badge badge-default">Badge</span>
                </h4>
                <h5>
                  h5. Bootstrap heading{" "}
                  <span className="badge badge-default">Badge</span>
                </h5>
                <h6>
                  h6. Bootstrap heading{" "}
                  <span className="badge badge-default">Badge</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Headings</div>
              <div className="card-body">
                <h1 className="display-1">Display 1</h1>
                <h1 className="display-2">Display 2</h1>
                <h1 className="display-3">Display 3</h1>
                <h1 className="display-4">Display 4</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">Text</div>
              <div className="card-body">
                <p className="lead">
                  The is the Lead Text. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor. Duis mollis, est non commodo
                  luctus.
                </p>
                <p>
                  This is the text body. Nullam quis risus eget urna{" "}
                  <strong>mollis ornare vel eu leo</strong>. Cum sociis natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus, nullam id dolor.
                </p>
                <p>
                  <em>
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus, nullam id dolor
                  </em>
                  .
                </p>
                <p>
                  <abbr
                    title="HyperText Markup Language"
                    className="initialism"
                  >
                    HTML
                  </abbr>
                  Maecenas sed diam eget risus varius blandit sit amet non
                  magna. Donec id elit non mi porta gravida at eget metus. Duis
                  mollis, est non commodo luctus, nisi erat porttitor ligula,
                  eget.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Emphasis Classes</div>
              <div className="card-body">
                <p className="text-primary">
                  text-primary : Nullam id dolor id nibh ultricies vehicula ut
                  id elit.
                </p>
                <p className="text-secondary">
                  text-secondary : Fusce dapibus, tellus ac cursus commodo,
                  tortor mauris nibh.
                </p>
                <p className="text-success">
                  text-success : Duis mollis, est non commodo luctus, nisi erat
                  porttitor ligula.
                </p>
                <p className="text-danger">
                  text-danger : Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
                <p className="text-warning">
                  text-warning : Etiam porta sem malesuada magna mollis euismod.
                </p>
                <p className="text-info">
                  text-info : Maecenas sed diam eget risus varius blandit sit
                  amet non magna.
                </p>
                <p className="text-dark">
                  text-dark : Maecenas sed diam eget risus varius blandit sit
                  amet non magna.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Address</div>
              <div className="card-body">
                <address>
                  <strong>Twitter, Inc.</strong>
                  <br />
                  795 Folsom Ave, Suite 600
                  <br />
                  San Francisco, CA 94107
                  <br />
                  <abbr title="Phone">P:</abbr> (123) 456-7890
                </address>
                <address>
                  <strong>Teal&#39;c Jafar</strong>
                  <br />
                  <a href="mailto:#">first.last@example.com</a>
                  <br />
                  <a to="#!">@shova_tealc</a>
                </address>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Inline Text Elements</div>
              <div className="card-body">
                <p>
                  You can use the mark tag to <mark>highlight</mark> text.
                </p>
                <p>
                  <del>
                    This line of text is meant to be treated as deleted text.
                  </del>
                </p>
                <p>
                  <s>
                    This line of text is meant to be treated as no longer
                    accurate.
                  </s>
                </p>
                <p>
                  <ins>
                    This line of text is meant to be treated as an addition to
                    the document.
                  </ins>
                </p>
                <p>
                  <u>This line of text will render as underlined</u>
                </p>
                <p>
                  <small>
                    This line of text is meant to be treated as fine print.
                  </small>
                </p>
                <p>
                  <strong>This line rendered as bold text.</strong>
                </p>
                <p>
                  <em>This line rendered as italicized text.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Blockquotes (Default)</div>
              <div className="card-body">
                <blockquote className="blockquote">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Blockquotes (Center)</div>
              <div className="card-body">
                <blockquote className="blockquote text-center">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Blockquotes (Right)</div>
              <div className="card-body">
                <blockquote className="blockquote text-right">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Unstyled &amp; Inline Lists</div>
              <div className="card-body">
                <h4>Unstyled List</h4>
                <ul className="list-unstyled">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>
                    Nulla volutpat aliquam velit
                    <ul>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ul>
                <br />
                <br />
                <h4>Inline List</h4>
                <ul className="list-inline">
                  <li className="list-inline-item">Lorem ipsum</li>
                  <li className="list-inline-item">Phasellus iaculis</li>
                  <li className="list-inline-item">Nulla volutpat</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Description List Alignment</div>
              <div className="card-body">
                <dl className="row">
                  <dt className="col-sm-3">Description lists</dt>
                  <dd className="col-sm-9">
                    A description list is perfect for defining terms.
                  </dd>

                  <dt className="col-sm-3">Euismod</dt>
                  <dd className="col-sm-9">
                    <p>
                      Vestibulum id ligula porta felis euismod semper eget
                      lacinia odio sem nec elit.
                    </p>
                    <p>Donec id elit non mi porta gravida at eget metus.</p>
                  </dd>

                  <dt className="col-sm-3">Malesuada porta</dt>
                  <dd className="col-sm-9">
                    Etiam porta sem malesuada magna mollis euismod.
                  </dd>

                  <dt className="col-sm-3 text-truncate">
                    Truncated term is truncated
                  </dt>
                  <dd className="col-sm-9">
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                  </dd>

                  <dt className="col-sm-3">Nesting</dt>
                  <dd className="col-sm-9">
                    <dl className="row">
                      <dt className="col-sm-4">Nested definition list</dt>
                      <dd className="col-sm-8">
                        Aenean posuere, tortor sed cursus feugiat, nunc augue
                        blandit nunc.
                      </dd>
                    </dl>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">Text Alignment</div>
              <div className="card-body">
                <p className="text-left">Left aligned text.</p>
                <p className="text-center">Center aligned text.</p>
                <p className="text-right">Right aligned text.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Inline Code</div>
              <div className="card-body">
                <blockquote>
                  In this example, <code>&lt;section&gt;</code> should be
                  wrapped as inline.
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Code Block</div>
              <div className="card-body">
                <blockquote>
                  <pre>
                    &lt;p&gt;Sample text here...&lt;/p&gt;
                    <br />
                    &lt;p&gt;Another sample text here...&lt;/p&gt;
                    <br />
                    &lt;p&gt;Yet another sample text here...&lt;/p&gt;
                  </pre>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">Prettify</div>
              <div className="card-body">
                <pre className="prettyprint linenums">
                  {`
<div className='col-md-6 col-sm-6'>

  <div className='block block-size-normal' data-url='test-data/ui-blocks/block-content/medium-chunk.txt'>
  
    <div className='block-heading'>
      <div className='main-text h2'>
        Block With Controls
      </div>
      <div className='block-controls'></div>
    </div>
    <div className='block-content-outer'>
      <div className='block-content-inner'>
        <p>Efficiently unleash cross-media information without cross-media value.</p>
      </div>
    </div>
  </div>
</div>
`}
                </pre>
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

export default UITypography;
