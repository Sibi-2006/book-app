import React from 'react'
import "./About.css"
export default function About() {
  return (
    <div className='aboutPage'>
      <h1>about</h1>
      <p>   Welcome to Book Explorer, your go-to app to search and discover books from all genres using the Google Books API.
            <br />
            📚Just type in a keyword, title, or author, and get instant results with book covers, titles, and more!
            Whether you're a casual reader or a knowledge hunter — start your journey here.
            <br />
           <samp className='api'> Made with 💻 React + 📡 Google Books API</samp></p>

           <h3>Connect with me:</h3>
                 <p className='linkMe'>
                   <a 
                     href="https://github.com/Sibi-2006" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     style={{ marginRight: "20px" }}
                     className='connect'
                   >
                     🔗 GitHub
                   </a>
           
                   <a 
                     href="https://www.instagram.com/_mr._.cb_?utm_source=qr&igsh=MWc1ZXQyZ3NpYXpyZQ==" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className='connect'
                   >
                     📸 Instagram
                   </a>
           
                   <a
                       href="https://www.linkedin.com/in/sibiraj-r-147936336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                       target="_blank"
                       rel="noopener noreferrer"
                       className='connect'
                       >
                      
                        LinkedIn
                   </a>
                   </p>
    </div>
  )
}
