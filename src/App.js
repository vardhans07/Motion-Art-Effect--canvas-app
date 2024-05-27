// src/App.js
import React, { useEffect, useRef } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';


function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let w, h, balls = [];
    let mouse = {
      x: undefined,
      y: undefined
    };
    const rgb = [
      "rgb(26, 188, 156)",
      "rgb(46, 204, 113)",
      "rgb(52, 152, 219)",
      "rgb(155, 89, 182)",
      "rgb(241, 196, 15)",
      "rgb(230, 126, 34)",
      "rgb(231, 76, 60)"
    ];

    function init() {
      resizeReset();
      animationLoop();
    }

    function resizeReset() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function animationLoop() {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      drawBalls();

      let temp = [];
      for (let i = 0; i < balls.length; i++) {
        if (balls[i].time <= balls[i].ttl) {
          temp.push(balls[i]);
        }
      }
      balls = temp;

      requestAnimationFrame(animationLoop);
    }

    function drawBalls() {
      for (let i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].draw();
      }
    }

    function mousemove(e) {
      mouse.x = e.x;
      mouse.y = e.y;

      for (let i = 0; i < 13; i++) {
        balls.push(new Ball());
      }
    }

    function mouseout() {
      mouse.x = undefined;
      mouse.y = undefined;
    }

    function getRandomInt(min, max) {
      return Math.round(Math.random() * (max - min)) + min;
    }

    function easeOutQuart(x) {
      return 1 - Math.pow(1 - x, 1);
    }

    class Ball {
      constructor() {
        this.start = {
          x: mouse.x + getRandomInt(1, 50),
          y: mouse.y + getRandomInt(1, 50),
          size: getRandomInt(1, 1)
        };
        this.end = {
          x: this.start.x + getRandomInt(3, 50),
          y: this.start.y + getRandomInt(3, 50)
        };

        this.x = this.start.x;
        this.y = this.start.y;
        this.size = this.start.size;

        this.style = rgb[getRandomInt(0, rgb.length - 1)];

        this.time = 0;
        this.ttl = 120;
      }
      draw() {
        ctx.fillStyle = this.style;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 8);
        ctx.closePath();
        ctx.fill();
      }
      update() {
        if (this.time <= this.ttl) {
          let progress = 1 - (this.ttl - this.time) / this.ttl;

          this.size = this.start.size * (1 - easeOutQuart(progress));
          this.x = this.x + (this.end.x - this.x) * 0.01;
          this.y = this.y + (this.end.y - this.y) * 0.01;
        }
        this.time++;
      }
    }

    window.addEventListener("resize", resizeReset);
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseout", mouseout);

    init();

    return () => {
      window.removeEventListener("resize", resizeReset);
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseout", mouseout);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <canvas ref={canvasRef} id="canvas"></canvas>

      <img src="MotionArtEffect-logo.png" alt="Logo" className="MotionArt-logo" />
      
      <div className="MotionArt-sec-2">
        <button className="MotionArt-button">Purchase me</button>
      </div>

       {/* New section using RadialGradient */}
       <div className="MotionArt-sec-3">
        <h4 className="Attract-Your-Visitors-txt-30"> <span style={{ color: ' #e18c6d' }}>Tran</span>
        <span style={{ color: ' #532db4' }}>s </span><span style={{ color: ' #532db4' }}>form</span></h4>
        <h4 className="Attract-Your-Visitors-txt-30"> <span style={{ color: ' #e18c6d' }}>You</span>
        <span style={{ color: ' #532db4' }}>r</span><span style={{ color: ' #532db4' }}>Website</span></h4>  
       
      </div>

      <div className="MotionArt-sec-4">
      <h4 className="Attract-Your-Visitors-txt-30">With Motion</h4>
      <h4 className="Attract-Your-Visitors-txt-30">Art Effect</h4>
      </div>


      <div className="Attract-Your-Visitors">
        <h1 className="Attract-Your-Visitors-txt-1">Attract Your Visitors</h1>
        <h1 className="Attract-Your-Visitors-txt-2">Attention With Colorful</h1>
        <h1 className="Attract-Your-Visitors-txt-5">
      <span style={{ color: ' #e18c6d' }}>Motio</span>
      <span style={{ color: ' #532db4' }}>n </span><span style={{ color: ' #532db4' }}>Art
      Effect frtst</span>
    </h1>
        <h4 className="Attract-Your-Visitors-txt-3">Unleash the power of creativity with Motion Art for Elementor - your ultimate solution</h4>
       <h4 className="Attract-Your-Visitors-txt-4"> for seamlessly integrating captivating animations into your website.</h4>
      </div>

      <div className="review">
        <div className="review-score">
          Trusted by thousands of users around the world
        </div>

        <div className="review-list">
          <div className="review-item">
            <img src="motionarteffect-img2.png" alt="Logo" className="review-logo" />
            <div class="review-content">
              <div className="stars">★★★★☆</div>
              <div className="stars-1">
                <p>4.5 Score, 9 Reviews</p>
              </div>
            </div>
          </div>

          <div className="review-item">
            <img src="motionarteffect-img1.png" alt="Logo" className="review-logo" />
            <div class="review-content">
              <div className="stars">★★★★☆</div>
              <div className="stars-1">
                <p>4.5 Score, 9 Reviews</p>
              </div>
            </div>
          </div>

          <div className="review-item">
            <img src="motionarteffect-img3.png" alt="Logo" className="review-logo" />
            <div class="review-content">
              <div className="stars">★★★★☆</div>
              <div className="stars-1">
                <p>4.5 Score, 9 Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <h1 className="Attract-Your-Visitors-txt-6">Turn Your Cursor Into A Colorful Magic</h1>
      <h1 className="Attract-Your-Visitors-txt-7">Wand & Charm Your Visitors</h1>
      <h6 className="Attract-Your-Visitors-txt-8">Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse</h6>
      <h6 className="Attract-Your-Visitors-txt-9">your website with visually stunning motion art elements.</h6>
   
        <button className="MotionArt-button-1">Purchase From Envato →</button>

        <div className="Turn-Your-Cursor">
    <img src="motionarteffect-img5.png" alt="Logo" class="review-logo" />
  </div>

        <h1 className="Attract-Your-Visitors-txt-10">Apply On Any Section Or Enable For <br></br>Whole Page</h1>
       
        <div class="flex-container-1">
  <div class="image-box-1">
    <img src="motionarteffect-img11.png" alt="Logo" class="review-logo" />
  </div>
  <div class="image-box-2">
    <img src="motionarteffect-img10.png" alt="Logo" class="review-logo" />
  </div>
</div>

<div class="Supported">
<h1 className="Attract-Your-Visitors-txt-6">Supported by All Popular Browsers</h1>
<h6 className="Attract-Your-Visitors-txt-8">Rest assured, Motion Art is designed to be compatible</h6>
<h6 className="Attract-Your-Visitors-txt-8">with all major web browsers.</h6>

  <div class="image-box-3">
  <img src="motionarteffect-img8.png" alt="Logo" class="review-logo" />
  </div>
</div>


<div class="Supported-1">
<h1 className="Attract-Your-Visitors-txt-6">An All-Round Plugin With Powerful</h1>
<h1 className="Attract-Your-Visitors-txt-6">Features</h1>
<p className="Attract-Your-Visitors-txt-8">Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>

</div>

<div class="flex-container">
  <div> <img src="motionarteffect-img9.png" alt="Logo" className="review-logo" /> <h6 className="Light-Weight">
    Light Weight</h6> 
     <h6 className="Light-Weight-p">Motion Art for Elementor is designed to be lightweight. </h6></div>
 
   
  <div> <img src="motionarteffect-img6.png" alt="Logo" className="review-logo" />
  <h6 className="Light-Weight">100% Responsive</h6>
  <h6 className="Light-Weight-p">Create a consistent visual experience across all devices. </h6></div>

   
  <div> <img src="motionarteffect-img7.png" alt="Logo" className="review-logo" />
  <h6 className="Light-Weight">User Friendly Interface</h6>
  <h6 className="Light-Weight-p">Ensure a smooth experience for both applicants and administrators. </h6></div> 
 
    

</div>

      <Footer />
    </div>
  );
}

export default App;
