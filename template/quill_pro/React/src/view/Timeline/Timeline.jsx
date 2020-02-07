import React, { Component } from "react";
import { qpTimeline } from "../../utils/misc";
import Footer from "../../layout/Footer/Footer";
import "./Timeline.css";

class Timeline extends Component {
  componentDidMount() {
    qpTimeline();
  }

  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Timeline</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="timeline">
                  <h2>2017</h2>
                  <ul className="timeline-items">
                    <li className="timeline-item">
                      <h3>Title</h3>
                      <hr />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet cupiditate, delectus deserunt doloribus earum
                        eveniet explicabo fuga iste magni maxime mollitia nemo
                        neque, perferendis quod reprehenderit ut, vel veritatis
                        voluptas?
                      </p>
                      <hr />
                      <time>Date</time>
                    </li>
                    <li className="is-hidden timeline-item inverted">
                      <h3>Title</h3>
                      <hr />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet cupiditate, delectus deserunt doloribus earum
                        eveniet explicabo fuga iste magni maxime mollitia nemo
                        neque, perferendis quod reprehenderit ut, vel veritatis
                        voluptas?
                      </p>
                      <hr />
                      <time>Date</time>
                    </li>
                  </ul>
                  <h2>2018</h2>
                  <ul className="timeline-items">
                    <li className="is-hidden timeline-item">
                      <h3>Title</h3>
                      <hr />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Adipisci alias aspernatur consequuntur culpa
                        deserunt ea esse est inventore, ipsa laborum officia,
                        quam quia quidem, rem sunt tempora tenetur ullam
                        voluptatem.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dicta dolore harum iure quod ut! Accusamus
                        aspernatur corporis est excepturi facere laudantium
                        nesciunt nihil optio, quaerat quos rerum sunt suscipit
                        voluptate?.
                      </p>
                      <hr />
                      <time>Mars 2014</time>
                    </li>
                    <li className="is-hidden timeline-item inverted">
                      <h3>Title</h3>
                      <hr />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Adipisci alias aspernatur consequuntur culpa
                        deserunt ea esse est inventore, ipsa laborum officia,
                        quam quia quidem, rem sunt tempora tenetur ullam
                        voluptatem.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dicta dolore harum iure quod ut! Accusamus
                        aspernatur corporis est excepturi facere laudantium
                        nesciunt nihil optio, quaerat quos rerum sunt suscipit
                        voluptate?.
                      </p>
                      <hr />
                      <time>Mars 2014</time>
                    </li>
                    <li className="is-hidden timeline-item centered">
                      <h3>Title</h3>
                      <hr />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Blanditiis, cupiditate dicta dignissimos dolorem
                        doloribus ducimus eos error ex molestiae nobis odio odit
                        optio placeat quasi repudiandae, unde velit voluptate
                        voluptatem!
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ab commodi consectetur cupiditate ea, eius
                        excepturi expedita illum, incidunt ipsam iste modi
                        obcaecati optio repellendus! Dolore dolores pariatur
                        sint veniam voluptates!
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Adipisci consequatur distinctio doloremque eos eum
                        eveniet fuga molestiae mollitia nesciunt nisi nobis
                        nostrum, odio omnis pariatur praesentium quibusdam sequi
                        sint voluptates.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A aliquam, aspernatur commodi consequuntur
                        corporis dicta, distinctio enim eos expedita, id iste
                        laborum maxime nesciunt quaerat sed temporibus veniam
                        vero voluptatem.
                      </p>
                      <p>
                        <a href="http://gamejolt.com/games/slender-the-cursed-forest/30950">
                          Link
                        </a>
                      </p>
                      <hr />
                      <time>Date</time>
                    </li>
                    <li className="is-hidden timeline-item inverted">
                      <h3>Title</h3>
                      <hr />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Adipisci alias aspernatur consequuntur culpa
                        deserunt ea esse est inventore, ipsa laborum officia,
                        quam quia quidem, rem sunt tempora tenetur ullam
                        voluptatem.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dicta dolore harum iure quod ut! Accusamus
                        aspernatur corporis est excepturi facere laudantium
                        nesciunt nihil optio, quaerat quos rerum sunt suscipit
                        voluptate?.
                      </p>
                      <hr />
                      <time>Mars 2014</time>
                    </li>
                    <li className="is-hidden timeline-item">
                      <h3>Title</h3>
                      <hr />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Adipisci alias aspernatur consequuntur culpa
                        deserunt ea esse est inventore, ipsa laborum officia,
                        quam quia quidem, rem sunt tempora tenetur ullam
                        voluptatem.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dicta dolore harum iure quod ut! Accusamus
                        aspernatur corporis est excepturi facere laudantium
                        nesciunt nihil optio, quaerat quos rerum sunt suscipit
                        voluptate?.
                      </p>
                      <hr />
                      <time>Mars 2014</time>
                    </li>
                    <li className="is-hidden timeline-item centered">
                      <h3>Title</h3>
                      <hr />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Blanditiis, cupiditate dicta dignissimos dolorem
                        doloribus ducimus eos error ex molestiae nobis odio odit
                        optio placeat quasi repudiandae, unde velit voluptate
                        voluptatem!
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ab commodi consectetur cupiditate ea, eius
                        excepturi expedita illum, incidunt ipsam iste modi
                        obcaecati optio repellendus! Dolore dolores pariatur
                        sint veniam voluptates!
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Adipisci consequatur distinctio doloremque eos eum
                        eveniet fuga molestiae mollitia nesciunt nisi nobis
                        nostrum, odio omnis pariatur praesentium quibusdam sequi
                        sint voluptates.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A aliquam, aspernatur commodi consequuntur
                        corporis dicta, distinctio enim eos expedita, id iste
                        laborum maxime nesciunt quaerat sed temporibus veniam
                        vero voluptatem.
                      </p>
                      <p>
                        <a href="http://gamejolt.com/games/slender-the-cursed-forest/30950">
                          Link
                        </a>
                      </p>
                      <hr />
                      <time>Date</time>
                    </li>
                  </ul>
                </div>
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

export default Timeline;
