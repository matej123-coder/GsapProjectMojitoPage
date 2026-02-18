"use-client";

import { useRef, useState } from "react";
import { sliderLists } from "../constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef();
  const goToSlide = (index) => {
    const newIndex = (index + sliderLists.length) % sliderLists.length;
    setCurrentIndex(newIndex);
  };
  const getCocktailAt = (offset) => {
    const index =
      (currentIndex + offset + sliderLists.length) % sliderLists.length;
    return sliderLists[index];
  };
  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" },
    );
    gsap.fromTo(
      ".details h2",
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, duration: 1, ease: "power1.inOut" },
    );
    gsap.fromTo(
      ".details p",
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, duration: 1, ease: "power1.inOut" },
    );
  }, [currentIndex]);
  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="Left leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-left-leaf.png"
        alt="Left leaf"
        id="m-left-leaf"
      />
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu{" "}
      </h2>
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={item.id}
              className={
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }
              onClick={() => goToSlide(index)}
            >
              {item.name}
            </button>
          );
        })}
      </nav>
      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>prevcocktailname</span>
            <img
              src="/images/right-arrow.png"
              alt="Right arrow"
              aria-hidden="true"
            />
          </button>

          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>nextcocktailname</span>
            <img
              src="/images/left-arrow.png"
              alt="Left arrow"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="cocktail">
          <img
            src={currentCocktail.image}
            alt={currentCocktail.name}
            className="object-contain"
          />
        </div>
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>
          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
