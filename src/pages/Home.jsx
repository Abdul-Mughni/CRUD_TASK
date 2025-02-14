import React from 'react'

const Home = () => {
  return (
    <div><div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <div class="container">
        <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        </ol>
    </div>

    <div class="carousel-inner" role="listbox">
        <div class="item active">
            <img class="img-responsive" src="img/1920x1080/01.jpg" alt="Slider Image"/>
            <div class="container">
                <div class="carousel-centered">
                    <div class="margin-b-40">
                        <h1 class="carousel-title">Hi-End Solutions</h1>
                        <p class="color-white">Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua <br/> enim minim estudiat veniam siad venumus dolore</p>
                    </div>
                    <a href="#" class="btn-theme btn-theme-sm btn-white-brd text-uppercase">Details</a>
                </div>
            </div>
        </div>
        <div class="item">
            <img class="img-responsive" src="img/1920x1080/02.jpg" alt="Slider Image"/>
            <div class="container">
                <div class="carousel-centered">
                    <div class="margin-b-40">
                        <h2 class="carousel-title">Personal Approach</h2>
                        <p class="color-white">Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua <br/> enim minim estudiat veniam siad venumus dolore</p>
                    </div>
                    <a href="#" class="btn-theme btn-theme-sm btn-white-brd text-uppercase">Take a Tour</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="about">
    <div class="content-lg container">

        <div class="masonry-grid row">
            <div class="masonry-grid-sizer col-xs-6 col-sm-6 col-md-1"></div>
            <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-4 sm-margin-b-30">
                <div class="margin-b-60">
                    <h2>Harmonious Planning</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna ut consequat siad esqudiat dolor</p>
                </div>
                <img class="full-width img-responsive wow fadeInUp" src="img/500x500/01.jpg" alt="Portfolio Image" data-wow-duration=".3" data-wow-delay=".2s"/>
            </div>
            <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-4">
                <div class="margin-b-60">
                  <h2>Easy Integration</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna ut consequat siad esqudiat dolor</p>  
                </div>
                 <img class="full-width img-responsive wow fadeInUp" src="img/500x500/02.jpg" alt="Portfolio Image" data-wow-duration=".3" data-wow-delay=".3s"/>
            </div>
            <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-4">
                <div class="margin-t-60 margin-b-60">
                    <h2>Superior Support</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna ut consequat siad esqudiat dolor</p>
                </div>
                <img class="full-width img-responsive wow fadeInUp" src="img/500x500/03.jpg" alt="Portfolio Image" data-wow-duration=".3" data-wow-delay=".4s"/>
            </div>
        </div>
        
    </div>
    
    <div class="bg-color-sky-light">
        <div class="content-lg container">
            <div class="row">
                <div class="col-md-5 col-sm-5 md-margin-b-60">
                    <div class="margin-t-50 margin-b-30">
                        <h2>Why Us?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <a href="#" class="btn-theme btn-theme-sm btn-white-bg text-uppercase">More...</a>
                </div>
                <div class="col-md-5 col-sm-7 col-md-offset-2">
                   
                    <div class="accordion">
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingOne">
                                    <h4 class="panel-title">
                                        <a class="panel-title-child" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Expert Research
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div class="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingTwo">
                                    <h4 class="panel-title">
                                        <a class="collapsed panel-title-child" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Hi-Tech Engineering
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div class="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingThree">
                                    <h4 class="panel-title">
                                        <a class="collapsed panel-title-child" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Outstanding Results
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div class="panel-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
     
        </div>
    </div>
</div>

<div id="products">
    <div class="content-lg container">
        <div class="row margin-b-40">
            <div class="col-sm-6">
                <h2>Recent Projects</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
            </div>
        </div>


        <div class="row">

            <div class="col-sm-4 sm-margin-b-50">
                <div class="margin-b-20">
                    <img class="img-responsive" src="img/970x647/01.jpg" alt="Latest Products Image"/>
                </div>
                <h4><a href="#">Interior</a> <span class="text-uppercase margin-l-20">Architecture</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                <a class="link" href="#">Details</a>
            </div>

            <div class="col-sm-4 sm-margin-b-50">
                <div class="margin-b-20">
                    <img class="img-responsive" src="img/970x647/02.jpg" alt="Latest Products Image"/>
                </div>
                <h4><a href="#">Trend</a> <span class="text-uppercase margin-l-20">Setting</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                <a class="link" href="#">Details</a>
            </div>

            <div class="col-sm-4 sm-margin-b-50">
                <div class="margin-b-20">
                    <img class="img-responsive" src="img/970x647/03.jpg" alt="Latest Products Image"/>
                </div>
                <h4><a href="#">Fresh Style</a> <span class="text-uppercase margin-l-20">Philosophy</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                <a class="link" href="#">Details</a>
            </div>
          
        </div>
    
    </div>
</div>

<div id="pricing">
    <div class="bg-color-sky-light">
        <div class="content-lg container">
            <div class="row row-space-1">
                <div class="col-sm-4 sm-margin-b-2">
                    
                    <div class="pricing">
                        <div class="margin-b-30">
                            <i class="pricing-icon icon-chemistry"></i>
                            <h3>Silver Package <span> - $</span> 74.99</h3>
                            <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                        </div>
                        <ul class="list-unstyled pricing-list margin-b-50">
                            <li class="pricing-list-item">Starter Kit</li>
                            <li class="pricing-list-item">Basic Features</li>
                            <li class="pricing-list-item">Annual Report</li>
                        </ul>
                        <a href="pricing.html" class="btn-theme btn-theme-sm btn-default-bg text-uppercase">Start Now</a>
                    </div>
                    
                </div>
                <div class="col-sm-4 sm-margin-b-2">
                    
                    <div class="pricing pricing-active">
                        <div class="margin-b-30">
                            <i class="pricing-icon icon-badge"></i>
                            <h3>Gold Package <span> - $</span> 199.99</h3>
                            <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                        </div>
                        <ul class="list-unstyled pricing-list margin-b-50">
                            <li class="pricing-list-item">Professional Kit</li>
                            <li class="pricing-list-item">Full Options</li>
                            <li class="pricing-list-item">Bi-anual Report</li>
                        </ul>
                        <a href="pricing.html" class="btn-theme btn-theme-sm btn-default-bg text-uppercase">Start Now</a>
                    </div>
                    
                </div>
                <div class="col-sm-4">
                    
                    <div class="pricing">
                        <div class="margin-b-30">
                            <i class="pricing-icon icon-shield"></i>
                            <h3>Platinum Package <span> - $</span> 500</h3>
                            <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                        </div>
                        <ul class="list-unstyled pricing-list margin-b-50">
                            <li class="pricing-list-item">Complete Kit</li>
                            <li class="pricing-list-item">Advanced Options</li>
                            <li class="pricing-list-item">Monthly Report</li>
                        </ul>
                        <a href="pricing.html" class="btn-theme btn-theme-sm btn-default-bg text-uppercase">Start Now</a>
                    </div>
                   
                </div>
            </div>
            
        </div>
    </div>
</div>

<div id="work">
    <div class="section-seperator">
        <div class="content-md container">
            <div class="row margin-b-40">
                <div class="col-sm-6">
                    <h2>Portfolio</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
                </div>
            </div>

            <div class="masonry-grid row">


                <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-4 md-margin-b-30">

                    <div class="work work-popup-trigger">
                        <div class="work-overlay">
                            <img class="full-width img-responsive" src="img/397x300/01.jpg" alt="Portfolio Image"/>
                        </div>
                        <div class="work-popup-overlay">
                            <div class="work-popup-content">
                                <a href="javascript:void(0);" class="work-popup-close">Hide</a>
                                <div class="margin-b-30">
                                    <h3 class="margin-b-5">Art Of Coding</h3>
                                    <span>Clean &amp; Minimalistic Design</span>
                                </div>
                                <div class="row">
                                    <div class="col-sm-8 work-popup-content-divider sm-margin-b-20">
                                        <div class="margin-t-10 sm-margin-t-0">
                                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                            <ul class="list-inline work-popup-tag">
                                                <li class="work-popup-tag-item"><a class="work-popup-tag-link" href="#">Strategy,</a></li>
                                                <li class="work-popup-tag-item"><a class="work-popup-tag-link" href="#">Implementation,</a></li>
                                                <li class="work-popup-tag-item"><a class="work-popup-tag-link" href="#">Credentials</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="margin-t-10 sm-margin-t-0">
                                            <p class="margin-b-5"><strong>Project Manager:</strong> Boris Becker</p>
                                            <p class="margin-b-5"><strong>Executive:</strong> Heike Macatsch</p>
                                            <p class="margin-b-5"><strong>Architect:</strong> Oliver Pocher</p>
                                            <p class="margin-b-5"><strong>Client:</strong> FairTech</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-4 md-margin-b-30">

                    <div class="work work-popup-trigger">
                        <div class="work-overlay">
                            <img class="full-width img-responsive" src="img/397x300/02.jpg" alt="Portfolio Image"/>
                        </div>
                        <div class="work-popup-overlay">
                            <div class="work-popup-content">
                                <a href="javascript:void(0);" class="work-popup-close">Hide</a>
                                <div class="margin-b-30">
                                    <h3 class="margin-b-5">Art Of Coding</h3>
                                    <span>Clean &amp; Minimalistic Design</span>
                                </div>
                                <div class="row">
                                    <div class="col-sm-8 work-popup-content-divider sm-margin-b-20">
                                        <div class="margin-t-10 sm-margin-t-0">
                                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                            <ul class="list-inline work-popup-tag">
                                                <li class="work-popup-tag-item"><a class="work-popup-tag-link" href="#">Strategy,</a></li>
                                                <li class="work-popup-tag-item"><a class="work-popup-tag-link" href="#">Implementation,</a></li>
                                                <li class="work-popup-tag-item"><a class="work-popup-tag-link" href="#">Credentials</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="margin-t-10 sm-margin-t-0">
                                            <p class="margin-b-5"><strong>Project Manager:</strong> Boris Becker</p>
                                            <p class="margin-b-5"><strong>Executive:</strong> Heike Macatsch</p>
                                            <p class="margin-b-5"><strong>Architect:</strong> Oliver Pocher</p>
                                            <p class="margin-b-5"><strong>Client:</strong> Keenthemes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-4">

                    <div class="work work-popup-trigger">
                        <div class="work-overlay">
                            <img class="full-width img-responsive" src="img/397x300/03.jpg" alt="Portfolio Image"/>
                        </div>
                        <div class="work-popup-overlay">
                            <div class="work-popup-content">
                                <a href="javascript:void(0);" class="work-popup-close">Hide</a>
                                <div class="margin-b-30">
                                    <h3 class="margin-b-5">Art Of Coding</h3>
                                    <span>Clean &amp; Minimalistic Design</span>
                                </div>
                                <div class="row">
                                    <div class="col-sm-8 work-popup-content-divider sm-margin-b-20">
                                        <div class="margin-t-10 sm-margin-t-0">
                                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                            <ul class="list-inline work-popup-tag">
                                                <li class="work-popup-tag-item"><a class="work-popup-tag-link" href="#">Strategy,</a></li>
                                                <li class="work-popup-tag-item"><a class="work-popup-tag-link" href="#">Implementation,</a></li>
                                                <li class="work-popup-tag-item"><a class="work-popup-tag-link" href="#">Credentials</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="margin-t-10 sm-margin-t-0">
                                            <p class="margin-b-5"><strong>Project Manager:</strong> Boris Becker</p>
                                            <p class="margin-b-5"><strong>Executive:</strong> Heike Macatsch</p>
                                            <p class="margin-b-5"><strong>Architect:</strong> Oliver Pocher</p>
                                            <p class="margin-b-5"><strong>Client:</strong> Keenthemes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="masonry-grid-sizer col-xs-6 col-sm-6 col-md-1"></div>
                <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-4 margin-b-30">

                    <div class="work work-popup-trigger">
                        <div class="work-overlay">
                            <img class="full-width img-responsive" src="img/397x415/01.jpg" alt="Portfolio Image"/>
                        </div>
                        <div class="work-popup-overlay">
                            <div class="work-popup-content">
                                <a href="javascript:void(0);" class="work-popup-close">Hide</a>
                                <div class="margin-b-30">
                                    <h3 class="margin-b-5">Art Of Coding</h3>
                                    <span>Clean &amp; Minimalistic Design</span>
                                </div>
                                <div class="row">
                                    <div class="col-sm-8 work-popup-content-divider sm-margin-b-20">
                                        <div class="margin-t-10 sm-margin-t-0">
                                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                            <ul class="list-inline work-popup-tag">
                                                <li class="work-popup-tag-item"><a class="work-popup-tag-link" href="#">Strategy,</a></li>
                                                <li class="work-popup-tag-item"><a class="work-popup-tag-link" href="#">Implementation,</a></li>
                                                <li class="work-popup-tag-item"><a class="work-popup-tag-link" href="#">Credentials</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="margin-t-10 sm-margin-t-0">
                                            <p class="margin-b-5"><strong>Project Manager:</strong> Boris Becker</p>
                                            <p class="margin-b-5"><strong>Executive:</strong> Heike Macatsch</p>
                                            <p class="margin-b-5"><strong>Architect:</strong> Oliver Pocher</p>
                                            <p class="margin-b-5"><strong>Client:</strong> FairTech</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-8 margin-b-30">

                    <div class="work work-popup-trigger">
                        <div class="work-overlay">
                            <img class="full-width img-responsive" src="img/800x400/01.jpg" alt="Portfolio Image"/>
                        </div>
                        <div class="work-popup-overlay">
                            <div class="work-popup-content">
                                <a href="javascript:void(0);" class="work-popup-close">Hide</a>
                                <div class="margin-b-30">
                                    <h3 class="margin-b-5">Art Of Coding</h3>
                                    <span>Clean &amp; Minimalistic Design</span>
                                </div>
                                <div class="row">
                                    <div class="col-sm-8 work-popup-content-divider sm-margin-b-20">
                                        <div class="margin-t-10 sm-margin-t-0">
                                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                            <ul class="list-inline work-popup-tag">
                                                <li class="work-popup-tag-item"><a class="work-popup-tag-link" href="#">Strategy,</a></li>
                                                <li class="work-popup-tag-item"><a class="work-popup-tag-link" href="#">Implementation,</a></li>
                                                <li class="work-popup-tag-item"><a class="work-popup-tag-link" href="#">Credentials</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="margin-t-10 sm-margin-t-0">
                                            <p class="margin-b-5"><strong>Project Manager:</strong> Boris Becker</p>
                                            <p class="margin-b-5"><strong>Executive:</strong> Heike Macatsch</p>
                                            <p class="margin-b-5"><strong>Architect:</strong> Oliver Pocher</p>
                                            <p class="margin-b-5"><strong>Client:</strong> FairTech</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
           
        </div>
    </div>
    

    <div class="content-lg container">

        <div class="swiper-slider swiper-clients">

            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img class="swiper-clients-img" src="img/clients/01.png" alt="Clients Logo"/>
                </div>
                <div class="swiper-slide">
                    <img class="swiper-clients-img" src="img/clients/02.png" alt="Clients Logo"/>
                </div>
                <div class="swiper-slide">
                    <img class="swiper-clients-img" src="img/clients/03.png" alt="Clients Logo"/>
                </div>
                <div class="swiper-slide">
                    <img class="swiper-clients-img" src="img/clients/04.png" alt="Clients Logo"/>
                </div>
                <div class="swiper-slide">
                    <img class="swiper-clients-img" src="img/clients/05.png" alt="Clients Logo"/>
                </div>
                <div class="swiper-slide">
                    <img class="swiper-clients-img" src="img/clients/06.png" alt="Clients Logo"/>
                </div>
            </div>

        </div>
        
    </div>
 
</div>



<div id="services">
    <div class="bg-color-sky-light" data-auto-height="true">
        <div class="content-lg container">
            <div class="row margin-b-40">
                <div class="col-sm-6">
                    <h2>Services</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
                </div>
            </div>
           

            <div class="row row-space-1 margin-b-2">
                <div class="col-sm-4 sm-margin-b-2">
                    <div class="service" data-height="height">
                        <div class="service-element">
                            <i class="service-icon icon-chemistry"></i>
                        </div>
                        <div class="service-info">
                            <h3>Company Formation</h3>
                            <p class="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                        </div>
                        <a href="#" class="content-wrapper-link"></a>    
                    </div>
                </div>
                <div class="col-sm-4 sm-margin-b-2">
                    <div class="service bg-color-base" data-height="height">
                        <div class="service-element">
                            <i class="service-icon color-white icon-screen-tablet"></i>
                        </div>
                        <div class="service-info">
                            <h3 class="color-white">Stuff Management</h3>
                            <p class="color-white margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                        </div>
                        <a href="#" class="content-wrapper-link"></a>    
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="service" data-height="height">
                        <div class="service-element">
                            <i class="service-icon icon-badge"></i>
                        </div>
                        <div class="service-info">
                            <h3>KPI Optimization</h3>
                            <p class="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                        </div>
                        <a href="#" class="content-wrapper-link"></a>    
                    </div>
                </div>
            </div>
  

            <div class="row row-space-1">
                <div class="col-sm-4 sm-margin-b-2">
                    <div class="service" data-height="height">
                        <div class="service-element">
                            <i class="service-icon icon-notebook"></i>
                        </div>
                        <div class="service-info">
                            <h3>Information Security</h3>
                            <p class="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                        </div>
                        <a href="#" class="content-wrapper-link"></a>    
                    </div>
                </div>
                <div class="col-sm-4 sm-margin-b-2">
                    <div class="service" data-height="height">
                        <div class="service-element">
                            <i class="service-icon icon-speedometer"></i>
                        </div>
                        <div class="service-info">
                            <h3>Recrutinment</h3>
                            <p class="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                        </div>
                        <a href="#" class="content-wrapper-link"></a>    
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="service" data-height="height">
                        <div class="service-element">
                            <i class="service-icon icon-badge"></i>
                        </div>
                        <div class="service-info">
                            <h3>Materials Supply</h3>
                            <p class="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                        </div>
                        <a href="#" class="content-wrapper-link"></a>    
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</div>

    

<div id="contact">
   
    <div class="section-seperator">
        <div class="content-lg container">
            <div class="row">
                
                <div class="col-sm-4 sm-margin-b-50">
                    <h3><a href="http://ft-seo.ch/">Zurich</a> <span class="text-uppercase margin-l-20">Human Resources</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                    <ul class="list-unstyled contact-list">
                        <li><i class="margin-r-10 color-base icon-call-out"></i> +41 60 66 555 44 33</li>
                        <li><i class="margin-r-10 color-base icon-envelope"></i> hr@flameonepage.com</li>
                    </ul>
                </div>
             
                <div class="col-sm-4 sm-margin-b-50">
                    <h3><a href="http://ft-seo.ch/">Malta</a> <span class="text-uppercase margin-l-20">Development</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                    <ul class="list-unstyled contact-list">
                        <li><i class="margin-r-10 color-base icon-call-out"></i> +356 7965 1257</li>
                        <li><i class="margin-r-10 color-base icon-envelope"></i> developmemt@flameonepage.com</li>
                    </ul>
                </div>
                
                <div class="col-sm-4 sm-margin-b-50">
                    <h3><a href="http://ft-seo.ch/">Manchester</a> <span class="text-uppercase margin-l-20">CEO</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                    <ul class="list-unstyled contact-list">
                        <li><i class="margin-r-10 color-base icon-call-out"></i> +44 654 583 5518</li>
                        <li><i class="margin-r-10 color-base icon-envelope"></i> ceo@flameonepage.com</li>
                    </ul>
                </div>
              
            </div>
    
        </div>
    </div>

    <div class="map height-300">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.0694570748947!2d7.455080415208266!3d46.94067397914616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39d0cf20e8d1%3A0x9daac4cd3043d067!2sThunstrasse+50%2C+3005+Bern%2C+Switzerland!5e0!3m2!1sen!2sin!4v1496749852928" width="100%" height="100%" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
    </div>
</div>
</div>
  )
}

export default Home