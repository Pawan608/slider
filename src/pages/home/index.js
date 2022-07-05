import { useState, useEffect, useRef } from "react";
import { useFetch } from "./useFetch";
import "./../../css/style.css";
import { useCookies } from "react-cookie";
const Home = ({ setAuth }) => {
  const [cookies, removeCookie, setCookie] = useCookies("user");
  const [page, changePage] = useState(1);
  let url = `https://randomuser.me/api/?results=30`;
  const { loading, products, loadingScript, setLoadingscript } = useFetch(url);
  const results = products.results;
  console.log(products, results);
  useEffect(() => {
    if (loadingScript !== null) {
      const script = document.createElement("script");
      script.src = require("./script");
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [loadingScript]);
  const handleChange = (e) => {
    e.preventDefault();
    removeCookie("user");
    setAuth(false);
    window.location.reload(false);
  };
  return (
    <>
      {/* <div className="main__container"></div> */}
      <section className="section">
        <ul className="section__navbar">
          <a href="/" className="section__navbar__list">
            Hey, Pawan
          </a>
          <a
            href="/"
            className="section__navbar__list navbar__list--logout"
            onClick={handleChange}
          >
            Logout
          </a>
        </ul>
        <div className="section__container">
          <div className="section__profile">
            {/* {refrenceChildren && refrenceChildren[1]} */}
            {!loading &&
              results.map((el, i) => {
                return (
                  <div
                    className={`${
                      i === 4
                        ? "section__profile__user center"
                        : "section__profile__user"
                    }`}
                  >
                    <div className="section__profile__user__photo">
                      <div className="section__profile__user__photo__gallery">
                        <img
                          src={el.picture.medium}
                          alt=""
                          style={{
                            objectFit: "cover",
                            width: "inherit",
                            height: "inherit",
                          }}
                        />
                      </div>
                    </div>
                    <div className="section__profile__user__detail">
                      <div
                        className="section__profile__user__detail--1 active"
                        id="user__name"
                      >
                        <div className="detail__titile">Hey, I am</div>
                        <div className="detail__information">
                          {el.name.first + " " + el.name.last}
                        </div>
                      </div>
                      <div
                        className="section__profile__user__detail--1"
                        id="user__mail"
                      >
                        <div className="detail__titile">
                          My email address is
                        </div>
                        <div className="detail__information">{el.email}</div>
                      </div>
                      <div
                        className="section__profile__user__detail--1"
                        id="user__cake"
                      >
                        <div className="detail__titile">My, birthdate is</div>
                        <div className="detail__information">
                          {new Date(el.dob.date).toLocaleDateString("en-GB")}
                        </div>
                      </div>
                      <div
                        className="section__profile__user__detail--1"
                        id="user__map"
                      >
                        <div className="detail__titile">My, address is</div>
                        <div className="detail__information">
                          {el.location.city + ", " + el.location.country}
                        </div>
                      </div>
                      <div
                        className="section__profile__user__detail--1"
                        id="user__phone"
                      >
                        <div className="detail__titile">
                          Hey, phone number is
                        </div>
                        <div className="detail__information">{el.phone}</div>
                      </div>
                    </div>
                    <div className="section__profile__user__icons">
                      <a href="#user__name" className="">
                        <button className="icon__button btn">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            className="user__icon icon"
                          >
                            <title>user</title>
                            <path d="M7.725 2.146c-1.016 0.756-1.289 1.953-1.239 2.59 0.064 0.779 0.222 1.793 0.222 1.793s-0.313 0.17-0.313 0.854c0.109 1.717 0.683 0.976 0.801 1.729 0.284 1.814 0.933 1.491 0.933 2.481 0 1.649-0.68 2.42-2.803 3.334-2.13 0.918-4.326 2.073-4.326 4.073v1h18v-1c0-2-2.197-3.155-4.328-4.072-2.123-0.914-2.801-1.684-2.801-3.334 0-0.99 0.647-0.667 0.932-2.481 0.119-0.753 0.692-0.012 0.803-1.729 0-0.684-0.314-0.854-0.314-0.854s0.158-1.014 0.221-1.793c0.065-0.817-0.398-2.561-2.3-3.096-0.333-0.34-0.558-0.881 0.466-1.424-2.24-0.105-2.761 1.067-3.954 1.929z"></path>
                          </svg>
                        </button>
                      </a>
                      <a href="#user__mail" className="">
                        <button className="icon__button btn">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            className="mail__icon icon"
                          >
                            <title>mail</title>
                            <path d="M1.574 5.286c0.488 0.262 7.248 3.894 7.5 4.029s0.578 0.199 0.906 0.199c0.328 0 0.654-0.064 0.906-0.199s7.012-3.767 7.5-4.029c0.489-0.263 0.951-1.286 0.054-1.286h-16.919c-0.897 0-0.435 1.023 0.053 1.286zM18.613 7.489c-0.555 0.289-7.387 3.849-7.727 4.027s-0.578 0.199-0.906 0.199-0.566-0.021-0.906-0.199-7.133-3.739-7.688-4.028c-0.39-0.204-0.386 0.035-0.386 0.219s0 7.293 0 7.293c0 0.42 0.566 1 1 1h16c0.434 0 1-0.58 1-1 0 0 0-7.108 0-7.292s0.004-0.423-0.387-0.219z"></path>
                          </svg>
                        </button>
                      </a>
                      <a href="#user__cake" className="">
                        <button className="icon__button btn">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            className="cake__icon icon"
                          >
                            <title>cake</title>
                            <path d="M9.584 6.036c1.952 0 2.591-1.381 1.839-2.843-0.871-1.693 1.895-3.155 0.521-3.155-1.301 0-3.736 1.418-4.19 3.183-0.339 1.324 0.296 2.815 1.83 2.815zM14.796 14.987l-0.444-0.383c-0.487-0.42-1.25-0.418-1.735 0l-0.442 0.382c-0.62 0.534-1.397 0.801-2.174 0.801s-1.554-0.267-2.173-0.8l-0.444-0.384c-0.487-0.418-1.249-0.419-1.734 0.001l-0.444 0.383c-1.193 1.028-2.967 1.056-4.204 0.1v3.913c0 0.552 0.448 1 1 1h16c0.552 0 1-0.448 1-1v-3.912c-1.237 0.954-3.011 0.929-4.206-0.101zM10 7c-7.574 0-9 3.361-9 5v0.469l1.164 1.003c0.486 0.421 1.249 0.417 1.735 0l0.444-0.383c1.237-1.065 3.105-1.066 4.345 0l0.444 0.384c0.484 0.417 1.245 0.42 1.735-0.001l0.442-0.382c1.24-1.067 3.107-1.067 4.346-0.001l0.444 0.383c0.487 0.421 1.25 0.417 1.735 0l1.166-1.003v-0.469c0-1.639-1.426-5-9-5z"></path>
                          </svg>
                        </button>
                      </a>
                      <a href="#user__map" className="">
                        <button className="icon__button btn">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            className="map__icon icon"
                          >
                            <title>map</title>
                            <path d="M19.447 3.718l-6-3c-0.281-0.141-0.613-0.141-0.895 0l-5.63 2.815-5.606-1.869c-0.306-0.102-0.64-0.051-0.901 0.138s-0.415 0.49-0.415 0.811v13.001c0 0.379 0.214 0.725 0.553 0.894l6 3c0.141 0.070 0.294 0.106 0.447 0.106s0.307-0.035 0.447-0.106l5.63-2.814 5.606 1.869c0.305 0.1 0.64 0.049 0.901-0.139s0.415-0.49 0.415-0.81v-13.002c0.001-0.379-0.213-0.725-0.552-0.894zM8 5.231l4-2v11.763l-4 2v-11.763zM2 4l4 1.333v11.661l-4-2v-10.994zM18 16.227l-4-1.334v-11.662l4 2v10.996z"></path>
                          </svg>
                        </button>
                      </a>
                      <a href="#user__phone" className="">
                        <button className="icon__button btn">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            className="phone__icon icon"
                          >
                            <title>old-phone</title>
                            <path d="M17.256 12.253c-0.096-0.667-0.611-1.187-1.274-1.342-2.577-0.604-3.223-2.088-3.332-3.734-0.457-0.085-1.27-0.177-2.65-0.177s-2.193 0.092-2.65 0.177c-0.109 1.646-0.755 3.13-3.332 3.734-0.663 0.156-1.178 0.675-1.274 1.342l-0.497 3.442c-0.175 1.212 0.715 2.305 1.953 2.305h11.6c1.237 0 2.128-1.093 1.953-2.305l-0.497-3.442zM10 15.492c-1.395 0-2.526-1.12-2.526-2.5s1.131-2.5 2.526-2.5 2.526 1.12 2.526 2.5-1.132 2.5-2.526 2.5zM19.95 6c-0.024-1.5-3.842-3.999-9.95-4-6.109 0.001-9.927 2.5-9.95 4s0.021 3.452 2.535 3.127c2.941-0.381 2.76-1.408 2.76-2.876 0-1.024 2.392-1.271 4.655-1.271s4.654 0.247 4.655 1.271c0 1.468-0.181 2.495 2.76 2.876 2.513 0.325 2.558-1.627 2.535-3.127z"></path>
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>
                );
              })}
            {loading &&
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => {
                return el !== 5 ? (
                  <div className="section__profile__user"></div>
                ) : (
                  <div className="section__profile__user center"></div>
                );
              })}
          </div>
          <div className="navigation">
            <div className="btn btn__navigation navigation__left">&larr;</div>
            <div className="btn btn__navigation navigation__right">&rarr;</div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
