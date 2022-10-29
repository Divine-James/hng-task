import React from "react";
import Button from "./components/Button";
import Profile from "./components/Profile";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Profile />
        <Button id="twitter" link="https://twitter.com/0ejemeh">
          Twitter Link
        </Button>
        <Button id="btn__zuri" link="https://training.zuri.team/">
          Zuri Team
        </Button>
        <Button id="books" link="http://books.zuri.team/">
          Zuri Books
        </Button>

        <Button
          id="book__python"
          link="https://books.zuri.team/python-for-beginers?ref_id=dprincecoder"
        >
          Python Books
        </Button>
        <Button id="pitch" link="https://background.zuri.team/">
          Background Check for Coders
        </Button>
        <Button id="book__design" link="https://books.zuri.team/design-rules">
          Design Books
        </Button>
        <Socials />
      </div>
      <Footer />
    </div>
  );
}

/*
function App() {
  const links = [
    "Twitter Link",
    "Zuri Team",
    "Zuri Books",
    "Python Books",
    "Background Check For Coders",
    "Design Books",
  ];
  return (
    <div>
      <Profile></Profile>
      <ProfileLink title={links[0]}></ProfileLink>
      <ProfileLink title={links[1]}></ProfileLink>
      <ProfileLink title={links[2]}></ProfileLink>
      <ProfileLink title={links[3]}></ProfileLink>
      <ProfileLink title={links[4]}></ProfileLink>
      <ProfileLink title={links[5]}></ProfileLink>
      <Footer></Footer>
    </div>
  );
}
*/

export default App;
