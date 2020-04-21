const skills = [
  "Javascript",
  "HTML5",
  "CSS",
  "SQL",
  "MongoDb",
  "React",
  "NodeJs",
  "QA Testing",
  "Rest/Api",
  "SEO",
  "Agile Mehodologies",
  "Express",
  "Java",
  "Bootstrap",
  "Materialize",
  "Handlebars",
  "EJS",
  "Firebase",
];

for (l = 0; l < skills.length; l++) {
  let listItem = document.createElement("li");
  listItem.innerText = skills[l];
  listItem.classList.add("skills-list-item");
  document.querySelector("skills-list").append(listItem);
  console.log(listI`tem);

  // console.log(skills[l])


}
