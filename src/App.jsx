import "./index.css";
import { useEffect } from "react";
export default function App() {
  const testinomials = [
    {
      name: "-Sami M",
      photoUrl:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "you are never too old to set another goal or to dream a new dream",
    },
    {
      name: "-Mimi",
      photoUrl:
        "https://images.pexels.com/photos/3283568/pexels-photo-3283568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: " to dream a new dream you are never too old to set another goal or",
    },
    {
      name: "-Namya N",
      photoUrl:
        "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "you are never  goal or to dream a new dream",
    },
  ];

  useEffect(() => {
    const imageEle = document.querySelector("img");
    const textEle = document.querySelector(".text");
    const nameEle = document.querySelector(".usename");
    let idx = 0;
    function updateTestimonial() {
      const { name, photoUrl, text } = testinomials[idx];
      imageEle.src = photoUrl;
      textEle.innerText = text;
      nameEle.innerText = name;
      idx++;
      console.log(imageEle.src);
      if (idx === testinomials.length) {
        //make it circular at last index
        idx = 0;
      }
      setTimeout(() => {
        updateTestimonial(); //rest of time its call
      }, 2000);
    }
    updateTestimonial(); //initial time call
  }, []);

  return (
    <div className="App">
      <div className="testimonial-container">
        <img alt="" src="" />
        <p className="text"></p>
        <h4 className="usename"></h4>
      </div>
    </div>
  );
}
