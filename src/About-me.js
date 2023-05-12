import Image from "./XDAC-John-Doe.jpg";

function Aboutme () {
    return (
        <section id="about-me">
      <h1>
        Hello, my name is
        <span class="rotate text-important">John doe</span>,<br />
        and i make horrible websites.
      </h1>
      
      <img class="avatar" src={Image} alt="" />
    </section>
    )
}
export default Aboutme;