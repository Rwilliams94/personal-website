import React, { useEffect, useState } from "react";
import "../Styles/Projects.css";
import Grid from "@material-ui/core/Grid";

const Projects = () => {
  const [popUpCanned, setPopUpCanned] = useState(false);
  const [popUpSpaceman, setPopUpSpaceman] = useState(false);
  const [popUpRecipe, setPopUpRecipe] = useState(false);
  const [popUp, setPopUp] = useState(false);

  function handlesetPopUpCanned() {
    setPopUpCanned(!popUpCanned);
    setPopUp(!popUp);
  }

  function handlesetPopUpSpaceman() {
    setPopUpSpaceman(!popUpSpaceman);
    setPopUp(!popUp);
  }

  function handlesetPopUpRecipe() {
    setPopUpRecipe(!popUpRecipe);
    setPopUp(!popUp);
  }

  console.log(popUp);

  return (
    <div className="projects-main">
      <div className={`projects-popup-container ${popUp ? "" : "hide"}`}>
        <div className={`projects-popup ${popUpCanned ? "" : "hide"}`}>
          <img
            className="popup-image"
            src="https://res.cloudinary.com/dahzswwzk/image/upload/v1619692143/canned_demo_h2eici.png"
            alt="canned"
          />
          <div className="popup-description-box">
            <h1 className="popup-title">Canned!</h1>
            <h2 className="popup-subtitle">Beer search and sharing app</h2>
            <p className="popup-description">
              Search and discover beers and breweries with this beer sharing and
              rating app. With the aim of trying as many unique beers as
              possible, interactive beer search lets you view beers with their
              user comments and images and an interactive map lets you explore
              your area for new exciting breweries. Save beers to your profile,
              rate, comment, photograph and grow this beer community!
            </p>
            <div className="popup-close-box">
              <a
                className="popup-link"
                href="https://canned-project.herokuapp.com/"
              >
                Go to the app
              </a>
              <p onClick={handlesetPopUpCanned}>
                <h1 className="close">X</h1>
              </p>
            </div>
          </div>
        </div>

        <div className={`projects-popup ${popUpSpaceman ? "" : "hide"}`}>
          <img
            className="popup-image"
            src="https://res.cloudinary.com/dahzswwzk/image/upload/v1619692916/sapceman_screen_lapwig.png"
            alt="spaceman"
          />
          <div className="popup-description-box">
            <h1 className="popup-title">Spaceman</h1>
            <h2 className="popup-subtitle">High Score Arcade Game</h2>
            <p className="popup-description">
              Spaceman's space craft has been overrun by enemy aliens and
              they've destroyed the ship... Help Spaceman collect
              as much energy as possible so he can shoot off into the stars to
              safety. In SPRINT mode you have 3 MINUTES to get off the ship.
              collect as much energy as you can in the time limit but WATCH OUT FOR THOSE EVIL
              ALIENS! In MARATHON mode you have all
              the time you can handle but Spaceman is not invincible... The Aliens are angry and 
              once you've collected each lot of energy they're only going to get angrier... And faster... YOU ONLY
              HAVE 3 LIVES SO BE CAREFUL AND GOOD LUCK!
            </p>
            <div className="popup-close-box">
              <a
                className="popup-link"
                href="https://rwilliams94.github.io/Space-Man-Game-Project/"
              >
                Go to the game
              </a>
              <p onClick={handlesetPopUpSpaceman}>
                <h1 className="close">X</h1>
              </p>
            </div>
          </div>
        </div>

        <div className={`projects-popup ${popUpRecipe ? "" : "hide"}`}>
          <img
            className="popup-image"
            src="https://res.cloudinary.com/dahzswwzk/image/upload/v1619693290/recipe_screen_xypia9.png"
            alt="recipe"
          />
          <div className="popup-description-box">
            <h1 className="popup-title">Recipe Hunter</h1>
            <h2 className="popup-subtitle">Recipe finder with "what's in your fridge?" and dietary requirement search tools</h2>
            <p className="popup-description">
              Spaceman's space craft has been overrun by enemy aliens and
              they've destroyed the ship... Help Spaceman collect
              as much energy as possible so he can shoot off into the stars to
              safety. In SPRINT mode you have 3 MINUTES to get off the ship.
              collect as much energy as you can in the time limit but WATCH OUT FOR THOSE EVIL
              ALIENS! In MARATHON mode you have all
              the time you can handle but Spaceman is not invincible... The Aliens are angry and 
              once you've collected each lot of energy they're only going to get angrier... And faster... YOU ONLY
              HAVE 3 LIVES SO BE CAREFUL AND GOOD LUCK!
            </p>
            <div className="popup-close-box">
              <a
                className="popup-link"
                href="https://super-recipes.herokuapp.com/"
              >
                Go to the site
              </a>
              <p onClick={handlesetPopUpRecipe}>
                <h1 className="close">X</h1>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-links">
        <Grid container spacing={4} justify="flex-start">
          <Grid item>
            <div className="projects-link-box">
              <img
                onClick={handlesetPopUpCanned}
                className="projects-link-box"
                src="https://res.cloudinary.com/dahzswwzk/image/upload/v1619635476/Canned_mjymvf.png"
                alt="canned"
              />
            </div>
          </Grid>
          <Grid item>
            <div className="projects-link-box">
              <img
                onClick={handlesetPopUpSpaceman}
                className="projects-link-box"
                src="https://res.cloudinary.com/dahzswwzk/image/upload/v1619635665/spaceman_tqzvl7.png"
                alt="spaceman"
              />
            </div>
          </Grid>
          <Grid item>
            <div className="projects-link-box">
              <img
                onClick={handlesetPopUpRecipe}
                className="projects-link-box"
                src="https://res.cloudinary.com/dahzswwzk/image/upload/v1619638051/recipehunt_z2g40r.png"
                alt="recipehunt"
              />
            </div>
          </Grid>
          {/* <Grid item>
                        <div className='contact-link-box'><a className='contact-link' href="https://www.linkedin.com/in/rowan-mt-williams/"></a><TwitterIcon style={{fontSize: 80}}/></div>
                    </Grid> */}
        </Grid>
      </div>
    </div>
  );
};

export default Projects;
