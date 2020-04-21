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


document.addEventListener("DOMContentLoaded", function(event) {     
  for (l = 0; l < skills.length; l++) {
    const listItem = document.createElement("li");
    const text = skills[l];
    
    console.log(listItem);
    
    listItem.value = text;
    listItem.innerHTML = text;

    listItem.classList.add("skills-list-item");

    document.getElementById('skillsList').append(listItem);  
  
  }
});