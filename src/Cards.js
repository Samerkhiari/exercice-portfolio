import Images2 from "./1_BPSx-c--z6r7tY29L19ukQ.png";
import Image3 from "./github.png";
import Image4 from "./html.jpg";
import Image5 from"./css.jpg";

const Cards = () => {
  const project =[
    {projectName:"Project1",Imagesrc:Images2,text:"Javascript projects",Link:"https://github.com/Samerkhiari/Recursion"},
    {projectName:"Project2",Imagesrc:Image3,text:"Github directory withh all the links",Link:"https://github.com/Samerkhiari/Data-Structures-and-Procedural-programming"},
    {projectName:"Project3",Imagesrc:Image4,text:"html projects",Link:"https://github.com/Samerkhiari/Data-Structures-and-Procedural-programming"},
    {projectName:"Project4",Imagesrc:Image5,text:"css projects",Link:"https://github.com/Samerkhiari/Data-Structures-and-Procedural-programming"}
];
    return (
        <>
         <section id="projects">
      <h2 class="text-important">Projects</h2>
      <div class="projects-container">
      {project.map((el)=>(
      <div class="project-card">
          <img src={el.Imagesrc} alt="project" />
          <h3>{el.projectName}</h3>
          <p>{el.text}</p>
          <p><a href={el.Link} target="_blank">Github Link</a></p>
        </div>

      ))}
    </div>
  </section>
  </>
    )
}

export default Cards;