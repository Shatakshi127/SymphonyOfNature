import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Q1.jpeg";
import projImg2 from "../assets/img/Q2.jpeg";
import projImg3 from "../assets/img/Q3.jpeg";
import projImg4 from "../assets/img/Q4.jpeg";
import projImg5 from "../assets/img/Q5.jpeg";
import projImg6 from "../assets/img/Q6.jpeg";
import projImg7 from "../assets/img/Q7.jpeg";
import projImg8 from "../assets/img/Q8.jpeg";
import projImg9 from "../assets/img/Q9.jpeg";
import projImg10 from "../assets/img/Q10.jpeg";
import projImg11 from "../assets/img/Q11.jpeg";
import projImg12 from "../assets/img/Q12.jpeg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Dawn breaks, nature awakens.",
      imgUrl: projImg1,
    },
    {
      title: "Sun's journey, blooming life.",
      imgUrl: projImg2,
    },
    {
      title: "Sunflowers blooms, river flows.",
      imgUrl: projImg3,
    },
    {
      title: "Human presence, nature reacts.",
      imgUrl: projImg4,
    },
    {
      title: "Sun's descent, twilight whispers",
      imgUrl: projImg5,
    },
    {
      title: "Sunset Hues",
      imgUrl: projImg6,
    },
    {
      title: "Tranquil coexistence",
      imgUrl: projImg7,
    },
    {
      title: "Moon emerges",
      imgUrl: projImg8,
    },
    {
      title: "Day's end, nocturnal embrace.",
      imgUrl: projImg9,
    },
    {
      title: "Night's embrace, celestial spectacle.",
      imgUrl: projImg10,
    },
    {
      title: "Tides whisper, nocturnal rhythm.",
      imgUrl: projImg11,
    },
    {
      title: "Dawn's promise, eternal cycle",
      imgUrl: projImg12,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Documentation</h2>
                <p>Presented below is the documentation for our project, which showcases the exquisite allure of nature.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Overview</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Objectives</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Challenges</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Methodology</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Source of Inspiration</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">Resources and Assets</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="first">
                      <p>Symphony of Nature is a computer graphics project that aims to depict the beauty and rhythm of everyday nature scenes. Through a series of carefully crafted scenes, the project showcases the dynamic interactions between elements of nature such as the sun, flowers, birds, and human presence.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
  <p style={{ textAlign: "justify" }}>
    <strong style={{ color: "rgb(200, 160, 255)" }}>Objectives:</strong><br/>
    1. To develop visually stunning nature scenes that authentically depict the beauty and dynamism of everyday natural phenomena.<br/>
    2. To implement interactive elements such as sun movement, flower blossoming, bird activity, and human presence to enhance realism and engagement.<br/>
    3. To achieve seamless synchronization between visual elements and interactive music to create a captivating and immersive experience.<br/>
    4. To ensure that each scene effectively communicates the rhythm and harmony inherent in nature, captivating audiences with its authenticity and aesthetic appeal.<br/>
    5. To utilize advanced computer graphics techniques to achieve high-quality visual effects and realistic rendering, enhancing overall realism and immersion.
  </p>
</Tab.Pane>
<Tab.Pane eventKey="second">
  <p style={{ textAlign: "justify" }}>
    <strong style={{ color: "rgb(200, 160, 255)" }}>Key Learnings:</strong><br/>
    <strong>1. Canvas Drawing and Rendering:</strong><br/>
    Understanding the fundamental concepts of canvas drawing in HTML5, including rendering images, shapes, and text onto the canvas element.<br/>
    Learning how to manipulate canvas contexts to perform transformations such as translation, rotation, scaling, and shearing to create dynamic visual effects.<br/>
    <strong>2. Animation Techniques:</strong><br/>
    Implementing animation loops using requestAnimationFrame to achieve smooth and efficient animations within the canvas.<br/>
    Exploring strategies for updating and rendering animated elements based on time intervals, user input, or predefined conditions to create engaging visual experiences.<br/>
    <strong>3. Image Manipulation and Composition:</strong><br/>
    Gaining proficiency in working with image assets within the canvas context, including loading, positioning, and transforming images to compose complex scenes.<br/>
    Experimenting with blending modes and composite operations to overlay, mask, or blend multiple images and shapes effectively.<br/>
    <strong>4. Event Handling and Interactivity:</strong><br/>
    Incorporating event listeners to detect user interactions to trigger music.<br/>
    Implementing interactive elements within the canvas to enhance user engagement and interactivity.
  </p>
</Tab.Pane>

<Tab.Pane eventKey="third">
  <p style={{ textAlign: "justify" }}>
    <strong style={{ color: "rgb(200, 160, 255)" }}>Challenges:</strong><br/>
    <strong>1. River Flowing Animation:</strong><br/>
    <strong>S</strong>ituation: The project requires the implementation of realistic water flow animations in computer-generated nature scenes.<br/>
    <strong>T</strong>ask: Redraw the image to create a continuous flow effect while maintaining visual coherence and realism.<br/>
    <strong>A</strong>ction: Reset the x-coordinates of the water flow image frames to ensure smooth animation transitions and seamless integration with other visual elements.<br/>
    <strong>R</strong>esult: Achieving a convincing water flow animation enhances the overall realism and immersion of the nature scenes, enriching the viewer's experience.<br/><br/>

    <strong>2. Bird's Flying Animation:</strong><br/>
    <strong>S</strong>ituation: Incorporating lifelike bird animations into computer-generated nature scenes requires precise control over wing movement and animation.<br/>
    <strong>T</strong>ask: Develop a method to capture frames and implement frame changes to realistically showcase wing movement during bird flight.<br/>
    <strong>A</strong>ction: Utilize keyframe animation techniques to animate the bird's wings, ensuring smooth transitions between frames for natural-looking flight motion.<br/>
    <strong>R</strong>esult: Realistic bird flight animations enhance the visual appeal and authenticity of the nature scenes, captivating the audience with lifelike animations.<br/><br/>

    <strong>3. People Walking:</strong><br/>
    <strong>S</strong>ituation: To create dynamic computer-generated nature scenes, the project requires realistic animations of walking individuals.<br/>
    <strong>T</strong>ask: Capture frames and implement frame changes to depict the movement of a walking person within the scene.<br/>
    <strong>A</strong>ction: Employ skeletal animation techniques to rig and animate the walking person model, frequently updating the source image to simulate fluid movement.<br/>
    <strong>R</strong>esult: Realistic animations of walking individuals add depth and realism to the nature scenes, enriching the viewer's experience with lifelike character animations.<br/><br/>

    <strong>4. Sunflower Blooming:</strong><br/>
    <strong>S</strong>ituation: The project aims to illustrate the natural cycle of sunflower blooming and waning through computer-generated animations.<br/>
    <strong>T</strong>ask: Capture frames and implement frame changes to depict the stages of sunflower growth and decay in synchronization with day and night cycles.<br/>
    <strong>A</strong>ction: Utilize morph target animation techniques to animate the sunflower model, updating frame textures to simulate blooming and waning stages.<br/>
    <strong>R</strong>esult: Realistic sunflower animations contribute to the visual richness of the nature scenes, enhancing the viewer's appreciation of natural phenomena depicted in the project.<br/><br/>

    <strong>Audio Integration:</strong><br/>
    <strong>S</strong>ituation: Enhancing user engagement in computer-generated nature scenes requires the seamless integration of interactive audio elements.<br/>
    <strong>T</strong>ask: Implement interactive controls to enable users to start and stop music playback upon clicking.<br/>
    <strong>A</strong>ction: Utilize audio scripting and event handling techniques to synchronize user input with music playback, ensuring seamless integration and responsiveness.<br/>
    <strong>R</strong>esult: Interactive audio integration enriches the user experience, adding an extra layer of immersion and engagement to the computer-generated nature scenes.<br/>
  </p>
</Tab.Pane>

<Tab.Pane eventKey="fourth">
  <p style={{ textAlign: "justify" }}>
    <strong style={{ color: "rgb(200, 160, 255)" }}>Methodology:</strong><br/>
    <strong>Scene Initialization:</strong><br/>
    Set up the canvas element for rendering the scene.<br/>
    Load all necessary image assets required for the animation, such as sky, land, water, sun, moon, boat, bird, and flower.<br/><br/>

    <strong>Frame Rendering Function:</strong><br/>
    Define a function called draw() responsible for rendering the entire scene.<br/>
    Utilize the Canvas API to draw background elements such as the sky and land using the loaded image assets.<br/>
    Implement transformations like translation, scaling, and rotation to position and scale elements correctly on the canvas.<br/>
    Draw dynamic elements such as the boat, bird, flower, and sun/moon based on their current positions and states.<br/><br/>

    <strong>Animation Control:</strong><br/>
    Implement an animate() function to control the animation loop.<br/>
    Inside the animation loop, update the positions of moving elements such as the boat, bird, and sun/moon based on predefined motion parameters.<br/>
    Utilize frame-based animation techniques to animate the bird's wings and the sunflower's blooming stages.<br/><br/>

    <strong>Day-Night Transition and Effects:</strong><br/>
    Manage transitions between day and night by adjusting the position and visibility of the sun and moon.<br/>
    Apply visual effects such as darkening the scene during nighttime using functions like darkenImages().<br/><br/>

    <strong>Interactive Elements:</strong><br/>
    Integrate user interaction by implementing controls to start and stop music playback upon clicking.<br/>
    Use event handling techniques to synchronize user input with audio playback, enhancing the interactive experience of the animation.<br/><br/>

    <strong>Optimization and Performance:</strong><br/>
    Employ optimization techniques such as preloading image assets and asynchronous loading to improve performance.<br/>
    Utilize requestAnimationFrame for smooth animation rendering and efficient resource utilization.<br/>
  </p>
</Tab.Pane>

<Tab.Pane eventKey="fifth">
  <p style={{ textAlign: "justify" }}>
    <strong style={{ color: "rgb(200, 160, 255)" }}>Source of Inspiration:</strong><br/>
    <strong>Nature Documentaries:</strong><br/>
    There are documentaries like BBC's "Planet Earth" series or "Our Planet" on Netflix which aim to capture the beauty and rhythm of nature in stunning detail, providing inspiration for our project's scenes and animations.<br/><br/>

    <strong>Artists and Animators:</strong><br/>
    There are plentiful works of artists from ancient to medieval to the modern world like Vincent van Gogh, Abanindranath Tagore, etc., who specialized in nature-themed artwork. They were indeed an inspiration for us.<br/><br/>

    <strong>Photography:</strong><br/>
    We found profound inspiration in capturing the exquisite beauty of natural landscapes. In today's age, the reflex response to encountering such beauty is often to reach for a mobile phone and capture the moment through photography.<br/><br/>

    <strong>Music and Soundscapes:</strong><br/>
    In a world characterized by relentless pace and relentless comparison, our project seeks to offer an oasis of tranquility through carefully crafted music and soundscapes. By incorporating elements inspired by nature such as birdsong, rustling leaves, and flowing water, we aim to transport listeners to serene environments, allowing them to immerse themselves fully in the experience.<br/><br/>

    <strong>Literature and Poetry:</strong><br/>
    Upon delving into the rich tapestry of global art and culture, one cannot overlook the pervasive influence of nature within literature, prose, and poetry. This timeless theme has served as a wellspring of inspiration for our project.<br/><br/>

    <strong>Environmental Conservation:</strong><br/>
    Against the backdrop of pressing environmental concerns, our project endeavors to foster a deeper sense of environmental stewardship among individuals. We are driven by a sincere desire to contribute to the preservation of our natural world, drawing inspiration from the urgent need for conservation efforts in today's world.<br/>
  </p>
</Tab.Pane>

<Tab.Pane eventKey="sixth">
  <p style={{ textAlign: "justify" }}>
    <strong style={{ color: "rgb(200, 160, 255)" }}>Resources and Assets:</strong><br/>
    We utilized various resources and assets in our project to enhance its functionality and visual appeal. Below is a breakdown of the resources and assets used:<br/><br/>

    <strong>Audio:</strong><br/>
    We incorporated audio files to enrich the user experience. The audio file, audio.mpeg, provides auditory cues within the application.<br/><br/>

    <strong>Icons:</strong><br/>
    For visual elements, we utilized ionicons from unpkg.com. Specifically, we employed the "download" icon to enhance the user interface.<br/><br/>

    <strong>Fonts:</strong><br/>
    The project utilizes the Arial font for text elements, ensuring consistent and readable typography throughout the application.<br/><br/>

    <strong>Images:</strong><br/>
    We sourced images and GIFs from the internet to complement the project's visuals. These images were meticulously extracted frame by frame and are accessible through the provided <a href="https://drive.google.com/drive/u/1/folders/1OJa-SszBH_-tkSMnUlcaUAAT1AP3_Kz_">link</a>.<br/><br/>

    <strong>Design:</strong><br/>
    Canva served as a valuable tool for designing various graphical elements within the project, contributing to its overall aesthetic appeal.<br/><br/>

    <strong>References:</strong><br/>
    <ul>
      <li>i) Image Conversion: Images were converted from JPEG to PNG format using <a href="https://www.cleverpdf.com/gif-to-png">CleverPDF</a> to ensure compatibility and optimize file sizes.</li>
      <li>ii) Audio Sources: Audio files were obtained from <a href="https://soundcloud.com">SoundCloud</a>, enriching the project with diverse auditory content.</li>
      <li>iii) HTML5 Animation: The project utilizes canvas animation techniques as demonstrated in the tutorials by <a href="https://www.youtube.com/watch?v=yq2au9EfeRQ&ab_channel=ChrisCourses">Chris Courses</a> and <a href="https://www.w3schools.com/jsref/dom_obj_canvas.asp">W3Schools</a>, enabling dynamic visual effects.</li>
      <li>iv) JavaScript Canvas Transformation: Techniques for adding images and performing transformations on the HTML5 canvas were learned from tutorials such as <a href="https://www.youtube.com/watch?v=STdbrEojilM">this one</a>, enhancing the project's graphical capabilities.</li>
      <li>v) Dawn to Dusk Transition: The transition effect implemented in the project was inspired by tutorials like <a href="https://www.youtube.com/watch?v=aEwRRVUGLJo&pp=ygUkZGF5IHRvIG5pZ2h0IGNvbXB1dGVyIGdyYXBoaWNzIHdlYmds">this one</a>, adding a visually appealing dynamic to the interface.</li>
      <li>vi) Image Rendering: Techniques for image rendering were explored through resources such as academic articles like <a href="https://www.sciencedirect.com/topics/computer-science/image-rendering">this one</a>, optimizing image quality and performance.</li>
      <li>vii) Event Handling: The process of adding event listeners in JavaScript was learned from resources like <a href="https://www.w3schools.com/jsref/met_document_addeventlistener.asp">W3Schools</a>, enabling interactive functionality within the project.</li>
      <li>viii) Audio Embedding: Guidance on embedding audio files was sought from resources like <a href="https://forum.freecodecamp.org/t/how-to-play-mp3-in-the-background-music-automatically/308554">this forum discussion</a>, ensuring seamless integration of audio elements into the project.</li>
      <li>ix) WebGL documentation: We referred to the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API">WegGL documentation</a> for better understanding of the transformations. </li>
    </ul>
  </p>
</Tab.Pane>


                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
