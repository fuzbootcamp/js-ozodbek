const nav = [
  {
    id: 1,
    link: "Home",
  },

  {
    id: 2,
    link: "About",
  },

  {
    id: 3,
    link: "Html",
  },

  {
    id: 4,
    link: "Blog",
  },
];

let nMain = document.querySelector(".n-main");

const htmlga = nav.map((student) => {
  let p = document.createElement("p");
  p.innerHTML = student.link;
  nMain.appendChild(p);

  nMain.style.display = "flex";
  nMain.style.alignItems = "center";
  nMain.style.justifyContent = "space-evenly";
  p.style.gap = "30px";
  nMain.style.background = "brown";
  nMain.style.width = "100%";
  nMain.style.height = "100px"

  p.onclick = function () {
    nMain.removeChild(p);
    alert("P KETTI!!!");
  };
});

let headerEl = document.querySelector(".n-header");

const header = [
  {
    id: 1,
    name: "OZODBEK",
    image:
      "https://i.pinimg.com/originals/24/30/e3/2430e374a7b453ef90eef88077324d06.png",
  },
  {
    id: 2,
    name: "OZODBEK",
    image:
      "https://i.pinimg.com/originals/24/30/e3/2430e374a7b453ef90eef88077324d06.png",
  },
  {
    id: 3,
    name: "OZODBEK",
    image:
      "https://i.pinimg.com/originals/24/30/e3/2430e374a7b453ef90eef88077324d06.png",
  },

  {
    id: 4,
    name: "OZODBEK",
    image:
      "https://i.pinimg.com/originals/24/30/e3/2430e374a7b453ef90eef88077324d06.png",
  },

  {
    id: 5,
    name: "OZODBEK",
    image:
      "https://i.pinimg.com/originals/24/30/e3/2430e374a7b453ef90eef88077324d06.png",
  },
];

const htmlga1 = header.map((student) => {
  let h1 = document.createElement("h1");
  let img = document.createElement("img");
  h1.innerHTML = student.name;
  img.setAttribute("src", `${student.image}`);
  headerEl.appendChild(h1);
  headerEl.appendChild(img);

  headerEl.style.display = "flex";
  headerEl.style.flexWrap = "wrap";
  headerEl.style.gap = "40px";
  img.style.width = "250px";

  img.onclick = function () {
    headerEl.removeChild(img);
    alert("IMG KETTI!!!");
  };

  h1.onclick = function () {
    headerEl.removeChild(h1);
    alert("h1 KETTI!!!");
  };

});
