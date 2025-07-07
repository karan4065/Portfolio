 import React from 'react'
 import '../skill.css'
 const Skill = () => {
   return (
     <div id='mainskill' style={{ background: 'linear-gradient(to bottom,#011825 )', color: 'white' }}
> 
      <section id="skill" class="skills-section">
    <h1 class="skills-title">Skills</h1>
    <div class="skills-grid">
      <div class="skill-card hover-orange"><img src="html1.png" alt="HTML" /><p>HTML</p></div>
      <div class="skill-card hover-blue"><img src="css2.png" alt="CSS" /><p>CSS</p></div>
      <div class="skill-card hover-yellow"><img src="js3.png" alt="JavaScript" /><p>JavaScript</p></div>
         <div class="skill-card hover-olive"><img src="chatGPT.png" alt="ChatGPT" /><p>ChatGPT</p></div>
       
      <div class="skill-card hover-green"><img src="mg.png" alt="MongoDB" /><p>MongoDB</p></div>
      <div class="skill-card hover-gray"><img src="exp4.png" alt="Express.js" /><p>Express.js</p></div>
       <div class="skill-card hover-cyan"><img src="react5.png" alt="React.js" /><p>React.js</p></div>
      <div class="skill-card hover-lime"><img src="node6.png" alt="Node.js" /><p>Node.js</p></div>
      <div class="skill-card hover-teal"><img src="tali.png" alt="Tailwind" /><p>Tailwind</p></div>
    
      <div class="skill-card hover-black"><img src="git7.png" alt="Git/Github" /><p>Git/Github</p></div>
      <div class="skill-card hover-yb"><img src="python8.png" alt="Python" /><p>Python</p></div>
      <div class="skill-card hover-semiblue"><img src="c.png" alt="C++" /><p>C++</p></div> 
    </div>
 
  </section>
     </div>
   )
 }
 
 export default Skill