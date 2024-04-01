const pageAnimationOnce = [false, false];

function isVisible(el, percentVisible) {
    let
      rect = el.getBoundingClientRect(),
      windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    return !(
      Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
    )
};

function main() {
    homeFunctionality(); 
    addTravFunctionality();
    experienceTracking();
    projectTracking();
}

async function homeFunctionality() {
  await sleep(100);
  document.getElementById("home_img").style.opacity = 1; 
  await sleep(750); 
  document.querySelector("#home h1").style.top = "70%"; 
  document.querySelector("#home h1").style.opacity = 1; 
}


const sleep = ms => new Promise(r => setTimeout(r, ms));

async function pageAnimation() {
    const banner = document.querySelector("#banner")

    banner.style.width = "100vw";

    await sleep(650);

    banner.style.float = (banner.style.float === "right") ? "left" : "right";
    banner.style.width = "0vw";
}

async function addTravFunctionality() {
    async function changeTheSection(trav_el) {
        await pageAnimation();
        const to_display = document.getElementById(trav_el.innerHTML);
        document.querySelector(".off").classList.remove("off");
        trav_el.classList.add("off");
        document.querySelector(".active").classList.remove("active");
        to_display.classList.add("active");
        await sleep(100);
        if(trav_el.innerHTML === "about") {
          aboutAnimation();
        }
    };

    document.querySelectorAll(".trav").forEach((el) => {
        el.addEventListener("click", () => {
            changeTheSection(el);
        });
    });
}

async function aboutAnimation() {
  document.getElementById("purpose").style.height = "100%";
  document.getElementById("skills").style.width = "100%";
  document.getElementById("education").style.width = "100%";
  await sleep(700);
  document.querySelector("#purpose h1").style.opacity = 1;
  document.querySelector("#skills h1").style.opacity = 1;
  document.querySelector(".skill_holder").style.opacity = 1;
  document.querySelector("#education h1").style.opacity = 1; 
  document.querySelectorAll("#list_of_degrees li").forEach((el) => {
    el.style.marginLeft = 0;
    el.style.opacity = 1;
  });
}



function experienceTracking() {
    const e1 = document.getElementById("nasa");
    const e2 = document.getElementById("sorrentum");
    const e3 = document.getElementById("reslate");
    const e4 = document.getElementById("sachemie");
    const e5 = document.getElementById("researly");

    document.getElementById("exp").addEventListener("scroll", () => {
        if(isVisible(e1, 75)) {
            document.querySelector(".showing").classList.remove("showing");
            document.getElementById("nasa-").classList.add("showing");
        }
        else if(isVisible(e2, 75)) {
            document.querySelector(".showing").classList.remove("showing");
            document.getElementById("sorrentum-").classList.add("showing");
        }
        else if(isVisible(e3, 75)) {
            document.querySelector(".showing").classList.remove("showing");
            document.getElementById("reslate-").classList.add("showing");
        }
        else if(isVisible(e4, 75)) {
            document.querySelector(".showing").classList.remove("showing");
            document.getElementById("sachemie-").classList.add("showing");
        }
        else if(isVisible(e5, 75)) {
            document.querySelector(".showing").classList.remove("showing");
            document.getElementById("researly-").classList.add("showing");
        }
    });
}

function projectTracking() {
  const p1 = document.getElementById("project1");
  const p2 = document.getElementById("project2");
  const p3 = document.getElementById("project3");
  const p4 = document.getElementById("project4");

  document.getElementById("proj").addEventListener("scroll", () => {
    if(isVisible(p1, 75)) {
      document.querySelector(".show").classList.remove("show");
      document.getElementById("p1").classList.add("show");
    }
    else if(isVisible(p2, 75)) {
      document.querySelector(".show").classList.remove("show");
      document.getElementById("p2").classList.add("show");
    }
    else if(isVisible(p3, 75)) {
      document.querySelector(".show").classList.remove("show");
      document.getElementById("p3").classList.add("show");
    }
    else if(isVisible(p4, 75)) {
      document.querySelector(".show").classList.remove("show");
      document.getElementById("p4").classList.add("show");
    }
    else if(isVisible(p5, 75)) {
      document.querySelector(".show").classList.remove("show");
      document.getElementById("p5").classList.add("show");
    }
  });
}

document.addEventListener("DOMContentLoaded", main);
