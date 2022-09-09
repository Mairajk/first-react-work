import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Resume() {
   return <div>
      {/* <img src="./dp.jpg" alt="" /> */}
      <div className='head'>
         <h1> Hi ! </h1>
         <h1> I am <span className='name'> Mairaj Khan</span></h1>
         <h1 className='secHead'>Web Developer</h1>

      </div>


      <div className='main'>
         <div className="fisrt">
            <h3 className='divHead'>Personal Info :</h3>
            <div className='pInfoTxt'><h5>Name :</h5> <p> Mairaj Khan </p></div>
            <div className='pInfoTxt'><h5>Age : </h5> <p> 22 </p></div>
            <div className='pInfoTxt'> <h5>Gender : </h5><p>Male </p></div>

            <h3 className='divHead'>Qualifications : </h3>
            <ul>
               <li>Matriculation </li>
               <li>Intermediate</li>
               <li>Web and App Development at (Saylani Mass IT Training)</li>
            </ul>
         </div>

         <div className='second'>
            <h3 className='divHead'> Skills : </h3>
            <ul>
               <li>HTML 5</li>
               <li>CSS 3</li>
               <li>JavaScript ES6</li>
               <li>Bootstrap</li>
               <li>React.js</li>
            </ul>

            <h3 className='divHead'>Contact :</h3>
            <ul>
               <li><a href="mailto:mairajkhan597@gmail.com">Email</a></li>
               <li><p>Phone No. : 03112533227</p> </li>
            </ul>

            <h3 className='divHead'>Links : </h3>
            <ul>
               <li><a href="https://github.com/Mairajk" target="_blank" rel="noopener noreferrer">Github</a></li>
               <li><a href="https://www.linkedin.com/in/mairaj-khan-589051234/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
         </div>

      </div>
   </div>
}


ReactDOM.render(<Resume />, document.querySelector(`#root`));