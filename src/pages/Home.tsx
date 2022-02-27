import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";
import heart from "assets/images/heart.svg";
import ButtonOutlined from "components/buttons/ButtonOutlined";

const hearts = [
  {id: 1, x: "inset-x-1/4", y: "bottom-20", rotate: "rotate-12", scale: "scale-110"},
  {id: 2, x: "inset-x-3/4", y: "inset-y-3/4", rotate: "-rotate-12", scale: "scale-150"},
  {id: 3, x: "left-12", y: "top-32", rotate: "rotate-30", scale: "scale-85"},
  {id: 4, x: "right-12", y: "top-24", rotate: "-rotate-12", scale: "scale-50"},
]

const Home = () => (
    <section className="fixed inset-0 flex-center gap-3 flex-col py-72">
      {hearts.map(({id, x, y, rotate, scale}) => 
        <img key={id} className={`absolute ${x} ${y} ${rotate} ${scale}`}  alt="" src={heart} />
      )}
      <img alt="" src={logo} />
      <h1 className="font-display text-4xl font-medium">Instalike</h1>
      <span className="text-4xl mt-auto animate-bounce">👇🏼</span>
      <ButtonOutlined disabled={false} type="button" onClick={undefined} >
        <Link className="text-gradient group-hover:text-white group-hover:reset-text-gradient" to="/login">Join in</Link>
      </ButtonOutlined>
    </section>
  );

  export default Home;
