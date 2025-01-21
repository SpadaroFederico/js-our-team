const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const TeamList = document.querySelector('.teamContainer'); // Use quotes for the ID
let items = ""; // Initialize the items variable

for (let i = 0; i < teamMembers.length; i++) {
  const { name, role, img } = teamMembers[i]; // Use "img" instead of "image"

  items += `
  <div class="teamCard">
      <div class="cardImg">
          <img src="img/${img}" alt="${name}" />
      </div>
  </div>

  <div class="cardText">
      <h3>${name}</h3>
      <p>${role}</p>
  </div>`;

  console.log(items);

}

// output
TeamList.innerHTML = items;