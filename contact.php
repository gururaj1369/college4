
<?php include 'header.php'; ?>

	
          <style>


 .example-image-link{ padding:5px 10px; border:1px solid #ddd;	 background:#efeef; display:block;}

  .widget-event .date .day {
    background-color: #0102d9;
    color: #ffffff;
    font-size: 24px;


}

p{
  text-align:justify;
}

.img-responsive,
.thumbnail > img,
.thumbnail a > img,
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>

     <div class="page-title" style="background-color: rgb(1 2 217); ">
			<div class="grid-row">
				<h1 style="color: #000;">Contact Us</h1>
				<nav class="bread-crumb">
					<a href="/">Home</a>
					<i class="fas fa-long-arrow-alt-right"></i>
				
					<a href="contact.php">Contact Us</a>
				</nav>
			</div>
		</div>



<div class="row page-content woocommerce">
	
		<!-- contact form section -->
		<div class="grid-row clear-fix">
			<div class="grid-col-row">
				<div class="grid-col grid-col-8">
					<section>
						<h2>Contact us</h2>
						<div class="widget-contact-form">
							<!-- contact-form -->
							<div class="info-boxes error-message alert-boxes error-alert" id="feedback-form-errors">
								<div class="message"></div>
							</div>
							<div class="email_server_responce"></div>
							<form method="post">
								<input type="text" name="name" value="" size="40" placeholder="Your Name" aria-invalid="false" aria-required="true">
								<input type="text" name="email" value="" size="40" placeholder="Your Email" aria-required="true">
								<input type="text" name="subject" value="" size="40" placeholder="Subject" aria-invalid="false" aria-required="true">
								<textarea name="message" cols="40" rows="3" placeholder="Your Message" aria-invalid="false" aria-required="true"></textarea>
								<input type="submit" value="Send" class="cws-button border-radius alt">
							</form>
							<!--/contact-form -->
						</div>
					</section>
				</div>
				<div class="grid-col grid-col-4 widget-address">
					<section>
						<h2>Our Offices</h2>
						<address>
							<p><strong class="fs-18">Address:</strong><br>Vijay Rural Engineering College<br>

             Rochis Valley, Manikbhandar,  <br> National Highway 16, Borgaon
             <br>Nizamabad - 503 003 Telanagana</p>
							<p><strong class="fs-18">Phone number:</strong><br>
								<a href="tel:8462-280157">Phone :- +91-8462-280157 </a><br>
								<a href="tel:9848884300">Mobile :- +91-984 888 4300</a>
							</p>
							<p><strong class="fs-18">E-mail:</strong><br>
								<a href="mailto:vrec.29.nzb@gmail.com"> vrec.29.nzb@gmail.com</a><br>
							</p>
						</address>
					</section>
				</div>
			</div>
		</div>
		<!-- / contact form section -->
	</div>


	<div class="row page-content woocommerce">
		<!-- map -->
		<div class="container clear-fix">
		  <div class="grid-col col-lg-6">
			  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60462.948810075664!2d78.22885880426738!3d18.711759326899323!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcfd3a69c06280fa4!2sVijay+Rural+Engineering+College!5e0!3m2!1sen!2sin!4v1403254568208" width="100%" height="545" frameborder="0" style="border:0"></iframe>
		  </div>
		  <div class="grid-col col-lg-4">
		    
		    <img src="index_files/route-map.jpg" width="100%">
		  </div>
		</div>
		<!-- / map -->
	
	</div>

<?php include 'footer.php'; ?>