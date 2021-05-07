import React, { useEffect, useState } from "react";
import "../Styles/Projects.css";
import Grid from "@material-ui/core/Grid";

const Projects = () => {
  const [popUpCanned, setPopUpCanned] = useState(false);
  const [popUpSpaceman, setPopUpSpaceman] = useState(false);
  const [popUpRecipe, setPopUpRecipe] = useState(false);
  const [popUpPoke, setPopUpPoke] = useState(false);
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

  function handlesetPopUpPoke() {
    setPopUpPoke(!popUpPoke);
    setPopUp(!popUp);
  }

  console.log(popUp);

  return (
    <div className="projects-main" id="Projects">
      <h1 className="project-title thin">Portfolio</h1>
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
                target="_blank"
                rel="noreferrer"
                href="https://canned-project.herokuapp.com/"
              >
                Go to the app
              </a>
              <p className="close-box" onClick={handlesetPopUpCanned}>
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
                target="_blank"
                rel="noreferrer"
                href="https://rwilliams94.github.io/Space-Man-Game-Project/"
              >
                Go to the game
              </a>
              <p className="close-box" onClick={handlesetPopUpSpaceman}>
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
              Recipe finder web app created using NodeJs, ExpressJs, Handlebars, MongoDB and Axios. The app
              allows any users to search through recipes with an interactive search bar and look through a recipes
              page with filters. 
              Signed up users can add friends with their dietary requirements to their profile. If that friend is 
              coming to dinner, simply click their name and the recipes will 
              filter accordingly to their needs. More excitingly, signed in users can use the "what's in your fridge?" 
              tool, which allows them to input ingredients they have in their fridge and see what recipes they 
              can cook up using them.
              Made using the Spoontacular API.             
              
            </p>
            <div className="popup-close-box">
              <a
                className="popup-link"
                target="_blank"
                rel="noreferrer"
                href="https://super-recipes.herokuapp.com/"
              >
                Go to the site
              </a>
              <p className="close-box" onClick={handlesetPopUpRecipe}>
                <h1 className="close">X</h1>
              </p>
            </div>
          </div>
        </div>
          

        <div className={`projects-popup ${popUpPoke ? "" : "hide"}`}>
            <img
                className="popup-image"
                src="https://res.cloudinary.com/dahzswwzk/image/upload/v1619704735/Pokemon_n9qs0g.png"
                alt="recipe"
            />
            <div className="popup-description-box">
                <h1 className="popup-title">PokemonAPI Test</h1>
                <h2 className="popup-subtitle">Quick React project</h2>
                <p className="popup-description">
                A three day challenge set to myself to create a full-stack app using the Pokemon API.
                Consisting of a list and details card, with a settings page to switch between light 
                and dark theme and to change list length. The project was aimed to practice and demonstrate 
                the use of Context, Hooks, Pagintaion, complex API handling and React. Back end is built 
                using NodeJS, ExpressJS and MongoDB.
                </p>
                <div className="popup-close-box">
                <a
                    className="popup-link"
                    target="_blank"
                    rel="noreferrer"
                    href=" https://pokeapp-test.herokuapp.com/"
                >
                    Go to the site
                </a>
                <p className="close-box" onClick={handlesetPopUpPoke}>
                    <h1 className="close">X</h1>
                </p>
                </div>
            </div>
        </div>



         
        
      </div>
      <div className="projects-links">
        <Grid container spacing={1} justify="center">
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
          <Grid item>
            <div className="projects-link-box">
              <img
                onClick={handlesetPopUpPoke}
                className="projects-link-box"
                src="https://res.cloudinary.com/dahzswwzk/image/upload/v1619705110/poke_vkcsib.png"
                alt="pokeapi"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Projects;
