import { Link } from "react-router-dom";
import "./styles.css"; // Uncommented the styles import since we're now including the CSS
import Abouthead from "../aboutus/Abouthead"



export default function Aboutus() {
  function fok() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kof() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function gok() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kog() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function hok() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function koh() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  window.onscroll = function () {
    jet();
  };

  function jet() {
    var ilake = document.getElementById("head");
    ilake.style.top = "0px";
    ilake.style.position = "sticky";
  }

  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var wnd = window.innerHeight;
      var rtop = reveals[i].getBoundingClientRect().top;
      var rpoint = 100;

      if (rtop < wnd - rpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });
  return (
    <>
    <Abouthead/>
      {/* You can add your own header component here */}
      <div className="Aboutus">
     
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          text-decoration: none;
        }

        /* Main Content */
        main {
          display: flex;
          flex-direction: column;
          vertical-align: middle;
          background: transparent;
        }

        #front {
          height: auto;
          width: 100%;
          padding: 3% 0%;
          text-align: center;
          background: rgb(5, 134, 219);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }

        #front h1 {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          color: rgb(255, 255, 255);
          font-size: 250%;
          font-family: cursive;
          text-shadow: 1px 1px 20px rgb(41, 41, 41);
        }

        #front p {
          margin-top: -8%;
          text-align: center;
          color: rgb(255, 255, 255);
          font-size: 130%;
          padding: 0px 10%;
          font-family: Georgia, "Times New Roman", Times, serif;
          letter-spacing: 0.04cm;
        }

        #front img {
          margin-top: -5%;
          height: 70%;
          width: 70%;
        }

        #first {
          width: 90%;
          height: auto;
          padding: 5% 5%;
          background: transparent;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          display: flex;
          justify-content: space-between;
        }

        #first div {
          text-align: left;
        }

        #first p {
          font-size: 120%;
          padding-top: 3%;
          color: rgb(0, 0, 0);
        }

        #first h2 {
          padding: 2%;
          padding-top: 4%;
        }

        #first h1 {
          padding: 0;
        }

        .comm {
          width: 100%;
          background: rgb(247, 189, 189);
          height: 2%;
          padding: 0.5%;
        }

        #comm1 {
          width: 0%;
          height: 100%;
          background: rgb(255, 23, 23);
          transition: all 5s ease;
        }

        .reveal.active #comm1 {
          width: 90%;
        }

        .reveal.active #comm2 {
          width: 85%;
        }

        .reveal.active #comm3 {
          width: 70%;
        }

        #comm2 {
          width: 0%;
          height: 100%;
          background: rgb(241, 44, 44);
          transition: all 5s ease;
        }

        #comm3 {
          width: 0%;
          height: 100%;
          background: rgb(250, 61, 61);
          transition: all 5s ease;
        }

        #second {
          width: 90%;
          height: auto;
          padding: 0px 5%;
          padding-top: 7%;
          background: transparent;
          transition: 1s all;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }

        .container {
          display: flex;
          text-align: left;
          line-height: 200%;
        }

        .container img {
          width: 30%;
          height: 20%;
          margin-top: 5%;
        }

        .container h1 {
          font-size: 220%;
        }

        .container h2 {
          padding-top: 1%;
          font-size: 170%;
        }

        .container p {
          font-size: 110%;
          padding-top: 1%;
        }

        #third {
          width: 100%;
          height: auto;
          margin-top: 5%;
          background: rgba(65, 132, 255, 0.897);
          padding: 5% 0%;
        }

        #third h1,
        h3 {
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }

        #third_cards {
          display: flex;
          justify-content: space-around;
          padding: 5%;
        }

        #third_cards div {
          margin: 0% 2%;
          padding: 2% 2%;
          background: linear-gradient(30deg, rgb(60, 200, 255), rgb(72, 255, 72));
          border-radius: 20px;
          line-height: 160%;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        #third_cards div:hover {
          color: white;
        }

        #third_cards div:before {
          content: "";
          position: absolute;
          margin-top: -28px;
          height: 41%;
          width: 26.5%;
          margin-left: -23px;
          border-radius: 20px;
          z-index: 1;
          opacity: 0.2;
        }
        #third_cards div:hover:before {
          background: rgb(43, 117, 255);
        }

        #third_cards div h2 {
          padding: 8% 0px;
          font-size: 140%;
          text-align: center;
          color: rgb(255, 255, 255);
        }

        #third_cards div p {
          font-size: 120%;
          text-align: center;
          color: rgb(234, 255, 247);
        }

        #fourth {
          height: auto;
          width: 100%;
          padding: 4% 0%;
          background: rgba(65, 132, 255, 0.897);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }

        #fourth h2,
        h1 {
          text-align: center;
          padding: 2% 20%;
        }

        #fourth_cards {
          display: flex;
          justify-content: space-evenly;
          padding: 1% 5%;
        }

        #fourth_cards div {
          margin: 0% 1%;
          padding: 5% 5%;
          color: white;
          box-shadow: 0px 0px 10px 0px rgba(2, 101, 167, 0.801);
          background: linear-gradient(
            45deg,
            rgba(193, 193, 247, 0.74),
            rgb(0, 91, 165) 30%
          );
          text-align: center;
          transition: all 0.5s ease;
        }

        #fourth_cards div p {
          padding-top: 20px;
          font-weight: bolder;
        }

        #fourth_cards div:hover {
          background: linear-gradient(
            40deg,
            rgb(2, 54, 133) 80%,
            rgba(109, 135, 255, 0.74) 80%
          );
          border-bottom-right-radius: 10%;
          border-left: 2px rgb(255, 255, 255) solid;
          border-bottom: 2px rgb(255, 255, 255) solid;
        }

        #fifth {
          background: rgb(5, 134, 219);
          padding: 50px 40px;
        }

        #fifth div {
          display: flex;
          justify-content: space-around;
        }

        #fifth a {
          display: flex;
          justify-content: space-around;
          color: white;
          text-decoration: none;
          margin: 0px 1%;
        }

        #fifth img {
          margin-right: 7%;
        }

        #fifth h1 {
          font-size: 230%;
          text-align: center;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          padding-bottom: 5%;
          color: rgb(255, 255, 255);
        }

        /* FOOTER */
        #foote {
          display: flex;
          justify-content: space-around;
          background: rgb(5, 134, 219);
          padding: 0px 50px;
          padding-top: 20px;
        }
        #foote ul {
          height: auto;
          width: 100%;
          padding-left: 5%;
          list-style: none;
        }

        #foote ul li {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          font-size: 110%;
          padding: 5% 2%;
          text-decoration: none;
        }

        #foote ul li a:before {
          content: "";
          width: 0%;
          margin-top: 25px;
          height: 2px;
          z-index: 1;
          position: absolute;
          background: rgb(255, 127, 127);
          transition: all 0.2s ease-in;
        }

        #foote li a:hover:before {
          width: 5.7%;
        }

        li a {
          color: white;
          text-decoration: none;
        }

        li a:hover {
          color: rgb(157, 183, 255);
        }

        #foote div {
          text-align: center;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        #foote div h2 {
          padding: 5%;
          color: white;
          text-decoration: none;
          font-family: sans-serif;
        }

        #foote div span a {
          padding: 10px 10px;
          transition: all 2s;
        }

        #foote div span a img {
          padding: 0.5%;
          height: 80%;
          width: 10%;
        }

        #foote div span a :hover {
          transform: rotate(10deg);
        }

        .reveal {
          transform: translateY(150px);
          opacity: 0;
          transition: all 2s ease;
        }

        .reveal.active {
          transform: translateY(0px);
          opacity: 1;
        }
      `}</style>
      
     
      <main>
        <div id="front">
          <h1 style={{ textAlign: "center" }}>Welcome,To BOOK CIRCLE</h1>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-1805547-1537820.png"
            alt="font"
            />
          <p>
            " Dear readers,


We offer a huge collection of books from diverse categories of Fiction, Non-fiction, Biographies, History, Religion, Self-Help, etc. We also offer a collection of Investments and Management, Computers, Engineering, Medical, College and School text reference books.

We strive for customer satisfaction by offering a user-friendly search engine, efficient payment options. Apart from all this, we also provide great deals and discounts on our products.

All the Publishers, Distributors and Authors around the country are welcome to partner with us and grow the Bookcircle family. We would like to thank our customers for shopping with us. You can write to us on our e-mail id to share any suggestions or feedback you might have regarding our website or services. "
          </p>
        </div>

        <div id="first" className="reveal">
          <img className="rounded-4xl relative right-16"
            src="https://thumbs.dreamstime.com/b/hand-holding-open-book-people-line-up-to-read-knowledge-sharing-concept-328441988.jpg"
            alt=""
          />
          <div>
    <h1>📖 Your Trusted Marketplace for Books – Where Readers & Sellers Connect!</h1>
            <p>
             At BookCircle, we believe in the power of stories and knowledge. Our platform bridges the gap between book lovers and sellers, offering a seamless, affordable, and eco-friendly way to buy and sell books. Whether you're a reader hunting for rare titles or a seller looking to reach a wider audience, BookCircle is your perfect literary hub.</p>
            <h2>Fiction & Literature (90%)</h2>
            <div className="comm">
              <div id="comm1"></div>
            </div>
            <h2>Academic & Textbooks (85%)</h2>
            <div className="comm">
              <div id="comm2"></div>
            </div>
            <h2>Regional Language Books(70%)</h2>
            <div className="comm">
              <div id="comm3"></div>
            </div>
          </div>
        </div>

        <div id="fourth" className="reveal">
          <h2 style={{ color: "white" }}>🌍 Our Mission</h2>
          <h1 style={{ color: "white" }}>
          At BookCircle, we're more than just a marketplace—we're a movement to:</h1>
          <div id="fourth_cards">
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/data-analysis-27-681042.png"
                alt=" "
              />
              <p>Democratize Reading</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/ui-ux-designer-2755964-2289563.png"
                alt=" "
              />
              <p>Promote Sustainability</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/web-development-3-478143.png"
                alt=" "
              />
              <p>Empower Through Knowledge </p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/qa-testing-3919162-3246433.png"
                alt=" "
              />
              <p>Innovate for Convenience</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/team-135-386667.png"
                alt=" "
                />
              <p>Build a Literary Community</p>
              
            </div>
          </div>
        </div>

        <div id="second" className="reveal">
          <div className="container">
            <div>
              <h1>🌟 Why Choose BookCircle?</h1>
              <h2>For Readers:
              </h2>
              <div className="  text-balance">
              <p>✅ Huge Collection: Discover new, used, and rare books across genres—fiction, academics, comics, and more!</p>
              <p>✅ Best Prices: Buy directly from sellers at competitive rates.</p>
              <p>✅ Easy Search: Filter by genre, author, condition, or price.</p>
              <p>✅ Secure Payments: 100% safe transactions with multiple payment options.</p>
              </div>
            </div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/055/040/450/non_2x/book-club-gathering-illustration-with-people-sharing-books-and-ideas-in-a-flat-cartoon-style-vector.jpg"
              alt=""
            />
          </div>
          <div className="container">
            <div className="relative top-20">
              {/* <h1>WE HAVE</h1> */}
              <h2>For Sellers:</h2>
              <div className="text-balance">
             <p>📦 Easy Listing: Sell your books in minutes with our seller dashboard.</p>
              <p>🛒 Wider Reach: Connect with thousands of readers nationwide.</p>
              <p>💸 Fast Payouts: Get paid securely and quickly.</p>
              <p>🌱 Sustainable: Give pre-loved books a second life!</p>
              </div>
            </div>
            <img className="relative left-74"
              src="https://img.freepik.com/free-vector/group-people-reading-borrowing-books_53876-43122.jpg?semt=ais_hybrid&w=740"
              style={{ marginTop: "50px" }}
             
            />
          </div>
          <div className="container">
            <div className="text-balance relative top-24">
              <h1 className="whitespace-nowrap relative right-22">📚 Our Book Categories</h1>

              {/* <h2>Explore a world of stories with:</h2> */}
              <p>-Fiction & Literature (Bestsellers, Classics, Contemporary)</p>
              <p>-Academic & Textbooks (School, College, Competitive Exams)</p>
              <p>-Children's Books (Picture Books, Young Adult)</p>
              <p>-Rare & Collectibles (Signed Editions, Limited Prints)</p>
              <p>-Regional Language Books (Hindi, Tamil, Bengali, etc.)</p>
            </div>
            <img className="relative left-90"
              src="https://www.shutterstock.com/image-vector/human-hands-holding-books-readers-600nw-2479838065.jpg"
              style={{ marginTop: "80px" }}
              alt=""
            />
          </div>
          <div className="container">
            <div className="relative top-34">
              <h1 className="whitespace-nowrap relative right-30">🏆 What Makes Us Unique?</h1>
              {/* <h2>Intelligent Use of Technology and Human Resource</h2> */}
              
              <p>✔ Curated Quality: Every seller is verified to ensure genuine books.</p>
                <p>✔ Price Comparison: Find the best deals across sellers in one place.</p>
               <p>✔ Book Exchange Program: Trade your old books for credits! (Optional feature)</p>
               <p>✔ Gift a Book: Surprise someone with a handwritten note + delivery.</p>
            </div>
            <img  className="relative left-62 rounded-3xl"
              src="https://thumbs.dreamstime.com/b/businessman-staying-pile-books-sky-top-looking-distance-71576736.jpg"
              alt=""
            />
          </div>
        </div>

        <div id="third" className="reveal">
          <h3 style={{ textAlign: "center" }}>WHY WORK WITH US?</h3>
          <h1 style={{ textAlign: "center" }}>
            Driving Client Results Utilizing New Innovation Points of view
          </h1>
          <div id="third_cards">
            <div>
              <h2>Personal and Professional Growth</h2>
              <p>
              Bookchor, at its core, believes in growing its team members to become future leaders. We push for growth from within, allowing each team member to assume different roles and responsibilities. This preserves our company culture and continuity in leadership. </p>
            </div>
            <div>
              <h2>Reach Your True Potential</h2>
              <p>
              Bookchor challenges team members to learn, grow, and innovate. We learn from our successes and failures and grow together as a company. We truly enable team members to innovate within their respective professions and foster an atmosphere of clock builders, not time tellers.


              </p>
            </div>
            <div>
              <h2>Positive Corporate Culture</h2>
              <p>
              We strongly believe that the right environment brings out the best in the individual. Our sense of openness and passion for growth welcomes new ideas and innovation. We work hard, but take time to enjoy the fruits of our labor; offering a well-balanced professional life.
              </p>
            </div>
          </div>
        </div>

        <div id="fifth" className="reveal">
          <h1>BOOK CIRCLE</h1>
          <div>
            <Link to="/address">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/address-blue-circle-location-map-marker-navigation-icon-45868.png"
                alt=" "
              />
              <span>
                <h3>Address</h3>
                <p>3/24 Mahanagar EXTENSION,LUCKNOW,226006,INDIA</p>
              </span>
            </Link>
            <Link to="/contact">
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/phone-2666572-2212584.png"
                alt=" "
              />
              <span>
                <h3>Phone</h3>
                <p>+919628192156</p>
              </span>
            </Link>
            <Link to="/email">
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/gmail-2489176-2082900.png"
                alt=" "
              />
              <span>
                <h3>E-mail</h3>
                <p>umendraps1999@gmail.com</p>
              </span>
            </Link>
          </div>
        </div>
      </main>

     
      
      <p
        style={{
          color: "white",
          textAlign: "center",
          background: "rgb(27, 27, 27)",
          padding: "10px 0px"
        }}
      >
        &copy;Copyright <b>bookcircle</b>. All Rights Reserved
      </p>
    </div>
    {/* You can add your own footer component here */}
    </>
  );
}