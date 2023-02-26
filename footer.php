

      
      <div class="mgm_footer">
	<div class="container ">
		<div class="row ">
			<div class="col-md-2 mb-3 col-12 ">
				<h5>Quick Links</h5>
				
				<ul>
					<li><a href="index.php"><i class="fas fa-caret-right"></i>Home</a></li>
					 <li><a href="college-profile.php"><i class="fas fa-caret-right"></i>College Profile</a></li>
					 <li><a href="ug-programs.php"><i class="fas fa-caret-right"></i>UG Courses</a></li>				 
					 <li><a href="placements.php"><i class="fas fa-caret-right"></i>Career &amp; Placement</a></li>
					  
					 <li><a href="gallery.php"><i class="fas fa-caret-right"></i>Gallery</a></li>
					 <li><a href="contact.php"><i class="fas fa-caret-right"></i>Contact Us</a></li>
				</ul>
				
			</div>
			<div class="col-md-2 mb-3 col-12 ">
				<h5>Institute</h5>
				<ul> 
				
					<li><a href="admissions.php"><i class="fas fa-caret-right"></i>Admissions</a></li>
					<li><a href="infrastructure.php"><i class="fas fa-caret-right"></i>Infrastructure</a></li>
					<li><a href="placements.php"><i class="fas fa-caret-right"></i>Placements</a></li>
					<li><a href="auditreport.php"><i class="fas fa-caret-right"></i>Audit</a></li>
					<li><a href="commitee.php"><i class="fas fa-caret-right"></i>Managing Committee</a></li>
			
				</ul>
				
				
				
			</div>
			<div class="col-md-3 mb-3 col-12  ">
				<h5>Important Links</h5>
				<ul>
<li><a target="_blank" href="#"><i class="fas fa-caret-right"></i>Governing Body</a></li>
<li><a target="_blank" href="#"><i class="fas fa-caret-right"></i>Academic Council
</a></li>
<li><a target="_blank" href="#"><i class="fas fa-caret-right"></i>Disciplinary Committee
</a></li>
<li><a target="_blank" href="#"><i class="fas fa-caret-right"></i>NAAC Women Protection Cell
</a></li>
<li><a target="_blank" href="#"><i class="fas fa-caret-right"></i>Reconstitute anti-ragging Committee</a></li>
<li><a target="_blank" href="#"><i class="fas fa-caret-right"></i>Student Satisfaction Survey</a></li>
<li><a target="_blank" href="#"><i class="fas fa-caret-right"></i>Grievance Redressed Committee
</a></li>

 

				</ul>
			</div>
			<div class="col-md-3 mb-3 col-12 ">
				<h5>Downloads</h5>
				
				<ul>
					 
     <li><a href="#"><i class="fas fa-caret-right"></i>Mandatory Disclosure</a></li>
        <li><a href="#"><i class="fas fa-caret-right"></i>Approval Letters</a></li>
  	<li><a href="#"><i class="fas fa-caret-right"></i>"B" Category Seats (B.tech)
</a></li>
 	<li><a href="#"><i class="fas fa-caret-right"></i>"B" Category Seats (MBA)
</a></li>
   
    
	
				</ul>
				
			</div>
			<div class="col-md-2 mb-3 col-12  ">
				 
				<h5>Connect With Us</h5>
				<ul>  	 
					<li><a href="#"><i class="fab fa-facebook-square"></i>Facebook</a></li>
					<li><a href="#"><i class="fab fa-twitter-square"></i>Twitter</a></li>
					 <li><a href="#"><i class="fab fa-linkedin"></i>LinkedIn</a></li>
<li><a href="#"><i class="fab fa-instagram"></i>Instagram</a></li>					 
				  </ul>
			</div>
		</div>
	</div>
 </div>
 <div class="mgm_footer_bottom">
	<div class="container ">
		<div class="row">
			<div class="col-md-6">
				<p>@2023. Copyrights VIJAY RURAL ENGINEERING COLLEGE </p>
			</div>
			<div class="col-md-6 text-align-mobile">
				<p> All Rights Reserved.</p>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
 </div>
 <script>

 </script> 
      <script src="./index_files/mgmvalidation.js" type="text/javascript"></script>
      <script type="text/javascript" src="./index_files/bxslider.min.js"></script>
      <script type="text/javascript" src="./index_files/owl.carousel.min.js"></script>
      <script type="text/javascript" src="./index_files/bootstrap.min.js"></script>
      <script>
         $(window).load(function() 
		 { 
		 
		 var current = location.pathname;
    $('.navbar ul li a').each(function() {
        var $this = $(this); 

        // we check comparison between current page and attribute redirection.
        if ($this.attr('href') === current) {
            $this.addClass('active');
        }
    });
			 // var links = $('.navbar ul li a');
			 // $.each(links, function (key, va) 
			 // {
				 // debugger;
				 
				 // if (va.href == document.URL) 
				 // {
					// $(this).addClass('active');
				 // }
				 
				// else
				// { 
					// if(document.URL=="http://mgmiom.org/")
					// {	
						// $(this).addClass('active');
					// }
				// }
			 // });
	 ////////////////// 
	 
	 ///////////////// 
         });
		 
		 
		 
		 
        
         $('.counting').each(function() {
         var $this = $(this),
         countTo = $this.attr('data-count'); 
         $({ countNum: $this.text()}).animate({
         countNum: countTo
         },
         {
         
         duration: 3000,
         easing:'linear',
         step: function() {
         $this.text(Math.floor(this.countNum));
         },
         complete: function() {
         $this.text(this.countNum);
         //alert('finished');
         } 
         }); 
         });
         
         
         
           $(document).ready(function() {
         
                     $("#mgmnotification").modal('show');


                  $('#owl-demo').owlCarousel({
                     autoplay:3000,
                    loop: true,
                    margin: 15,
                    responsiveClass: true,
                    responsive: {
                      0: {
                        items: 1,
                        nav: false,
                         loop: true
                                     },
                                     600: {
                                       items: 3,
                                       nav: false,
                         loop: true
                                     },
                      1000: {
                        items:4,
                        nav: false,
                        loop: true,
                        margin: 15
                      }
                    }
                  })

                   

                  $('#programsdata').owlCarousel({
                     loop:true,
                     autoplay:true,
                     autoplayHoverPause:true,
                     autoplayTimeout: 3000,
                     margin:10,
                     responsiveClass:true,
                     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                     responsive:{
                        0:{
                        items:1,
                        nav:true
                        },
                        600:{
                        items:3,
                        nav:true
                        },
                        1000:{
                        items:4,
                        nav:true,
                        loop:false
                        }
                     }
                  });
                })
         $('.flexslider').bxSlider({ 
         minSlides: 1,
         maxSlides: 1,
         slideMargin: 32,
         auto: true,
         autoControls: false,
         nextText: '<i class="fa fa-angle-right"></i>',
         prevText: '<i class="fa fa-angle-left"></i>'
         });
         
         
      </script>
      <script src="./index_files/jquery.easy-ticker.js"></script> 
      <script>//=========== preloader  ===========/
         $(function(){
         	$('.demo1').easyTicker({
         		direction: 'up',
         		easing: 'swing',		 
         		visible: 5,
         		speed: 'slow',
                 interval: 4000,
                 height: 'auto'
         	}); 
         	 
         });
          
      </script>
   
</body></html>