import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Tajmahal() {
  return (
    <div className="tajmahal" style={{ backgroundColor: "white" }}>
      <Carousel
        style={{ maxHeight: "700px", overflow: "hidden" }}
        className="mt-2 ms-5 me-5 mb-5"
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/518256134/photo/charminar.jpg?s=1024x1024&w=is&k=20&c=HRRXep4wM2YFJMilHX24PKI24B9SEeXAFL4Q7MZ1rq4="
            alt="Kitten Slide 1"
          />
          <Carousel.Caption>
            <h3>Kitten Image 1</h3>
            <p>
              Description for Kitten Image 1. Kittens are known for their
              playful behavior and adorable features. This little furball is
              sure to bring a smile to your face.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={charminarcoro}
            alt="Kitten Slide 2"
          />
          <Carousel.Caption>
            <h3>Kitten Image 2</h3>
            <p>
              Description for Kitten Image 2. Explore the cuteness of this
              fluffy kitten as it melts your heart with its innocence and charm.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1158757624/photo/charminar.jpg?b=1&s=612x612&w=0&k=20&c=Qil3jThcEFvILSUr3Otp-_TFkOsczxzd3D3U9uTcNDQ="
            alt="Kitten Slide 3"
          />
          <Carousel.Caption>
            <h3>Kitten Image 3</h3>
            <p>
              Description for Kitten Image 3. Admire the beauty of this lovely
              kitten, and let its adorable presence brighten up your day.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="contentclass text-center">
        <h1
          style={{
            fontWeight: "bolder",
            textshadow: "h-shadow v-shadow blur-radius color",
          }}
        >
          Charminar
        </h1>
        <h5 className="center" style={{ fontWeight: "bolder" }}>
          The Charminar is a historic monument located in the heart of Hyderabad
          , India. Here's a brief history and overview of the Charminar:
        </h5>
        <br></br>
        <img
          src="https://media.istockphoto.com/id/467851707/photo/hyderabad-india.jpg?b=1&s=612x612&w=0&k=20&c=2tTtw9xYm4taxWILDCJt4qCiXdtmb0SGNDqempPHsp0="
          alt="img"
          style={{ boxShadow: "0 0 10px rgba(128,130,130, 10.5)" }}
        />
        <br></br>
        <h1
          style={{
            fontWeight: "bolder",
            textshadow: "h-shadow v-shadow blur-radius color",
          }}
        >
          History
        </h1>
        <h5 className="center" style={{ fontWeight: "bolder" }}>
          Construction: The Charminar was built in 1591 by Muhammad Quli Qutb
          Shah, the fifth ruler of the Qutb Shahi dynasty. It was constructed to
          commemorate the end of a deadly epidemic of plague in the city and
          also to mark the beginning of the new capital city, which was named
          Bhagyanagar, later known as Hyderabad. Architectural Style: The
          Charminar is a fine example of Indo-Islamic architecture with
          influences of Persian and Indian styles. It is known for its four
          grand arches facing in the cardinal directions, each supporting a
          minaret. Purpose: The Charminar, with its four ornate arches, was
          originally intended to serve as a mosque and a monument to celebrate
          the establishment of the new city. It also served as a symbol of unity
          among people of different faiths.
        </h5>
        <br></br>
        <h1
          style={{
            fontWeight: "bolder",
            textshadow: "h-shadow v-shadow blur-radius color",
          }}
        >
          Architecture
        </h1>
        <br></br>
        <h5 className="center" style={{ fontWeight: "bolder" }}>
          Structure: The Charminar is a square-shaped structure with each side
          measuring 20 meters. The four grand arches are 11 meters wide and rise
          to a height of 20 meters. The minarets are 56 meters tall. Materials:
          The monument is built primarily using granite and lime mortar. The
          intricate stucco work and the use of colorful tiles add to the beauty
          of the monument. Grand Balconies: Each of the four arches has a
          double-story balcony with numerous small arched openings that allow
          for ventilation and panoramic views of the city.
        </h5>
      </div>
    </div>
  );
}

export default Tajmahal;
