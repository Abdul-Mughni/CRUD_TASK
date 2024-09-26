import React from 'react'

const Footer = () => {
  return (

    <footer class="footer">

        <div class="section-seperator">
            <div class="content-md container">
                <div class="row">
                    <div class="col-sm-2 sm-margin-b-30">
  
                        <ul class="list-unstyled footer-list">
                            <li class="footer-list-item"><a href="#body">Home</a></li>
                            <li class="footer-list-item"><a href="#about">Team</a></li>
                            <li class="footer-list-item"><a href="#work">Credentials</a></li>
                            <li class="footer-list-item"><a href="#contact">Contact</a></li>
                        </ul>
   
                    </div>
                    <div class="col-sm-2 sm-margin-b-30">
                      
                        <ul class="list-unstyled footer-list">
                            <li class="footer-list-item"><a href="#">Twitter</a></li>
                            <li class="footer-list-item"><a href="#">Facebook</a></li>
                            <li class="footer-list-item"><a href="#">Instagram</a></li>
                            <li class="footer-list-item"><a href="#">YouTube</a></li>
                        </ul>
                    
                    </div>
                    <div class="col-sm-3">
               
                        <ul class="list-unstyled footer-list">
                            <li class="footer-list-item"><a href="#">Subscribe to Our Newsletter</a></li>
                            <li class="footer-list-item"><a href="#">Privacy Policy</a></li>
                            <li class="footer-list-item"><a href="#">Terms &amp; Conditions</a></li>
                        </ul>
                        
                    </div>
                </div>
             
            </div>
        </div>


   
        <div class="content container">
            <div class="row">
                <div class="col-xs-6">
                    <img class="footer-logo" src="img/logo-dark.png" alt="flameonepage Logo"/>
                </div>
                <div class="col-xs-6 text-right">
                    <p class="margin-b-0"><a class="fweight-700" href="#">FlameOnePage</a> Theme Powered by: <a class="fweight-700" href="http://ft-seo.ch/">FairTech Studio</a></p>
                </div>
            </div>
            
        </div>
       
    </footer>
    
  )
}

export default Footer