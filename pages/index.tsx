import { useEffect } from "react";
import Comment from "@/components/comment"

export default function Home() {
  useEffect(() => {
    var loader = document.querySelector(".loader");
    var now = document.querySelector(".now");
    var body = document.body;
    now!.innerHTML = " " + new Date().toString().substr(0, 24) + " ";
    loader!.classList.remove("hidden");
    for (var i = 1; i <= 7; i++) {
      (function (i) {
        setTimeout(function () {
          body.classList.remove("step-" + (i - 1));
          body.classList.add("step-" + i);
        }, i * 250 + ~~(Math.random() * 50));
      })(i);
    }
  }, []);

  return (
    <>
    <div className="loader hidden">
      <div className="line">
        <span>
          Last login: <span className="now"></span> on ttys001
        </span>
      </div>
      <div className="line">
        <span className="path">~/charlievillarino</span>
        <span className="branch"> main</span>
        <span className="command"></span>
        <span className="args"></span>
      </div>
    </div>
    <div id="view" className="hidden">
      <Comment/>
    </div>
    </>
  );
}
