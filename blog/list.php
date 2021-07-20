<!doctype html>
<?php
	require_once("db/conn.php");
	session_start();
	$data = array();
	$product = array();
	$time = array();
	
	if (isset($_GET['id']))
	{
		$sn = $_GET['id'];
			
		if ($_store == "db")
		{
			$data = $conn->select("SELECT * FROM HW2 WHERE sn = '{$sn}'");
			$time = (array)json_decode($data['time']);
			$product = (array)json_decode($data['product']);
		}
		else
		{
			/*******************************
			/* dat stored in file         */
			$filename = "db/".$sn.".dat";
			
			$myfile = fopen($filename, "r") or die("Unable to open file!");
			$content = fread($myfile, filesize($filename));
			fclose($myfile);
			$data = (array)json_decode($content);
			$product = $data['product'];
			$time = $data['time'];
			/***********************************/
		}
		
	}
	else
		echo error;
?>
<html lang="en">
  <head>
    <title>Asia Cement Corporation</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900|Rubik:300,400,700" rel="stylesheet">

    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">

    <link rel="stylesheet" href="fonts/ionicons/css/ionicons.min.css">
    <link rel="stylesheet" href="fonts/fontawesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/magnific-popup.css">

    <!-- Theme Style -->
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    
    <header role="banner">
     
      <nav class="navbar navbar-expand-md navbar-dark bg-light">
        <div class="container">
          <a class="navbar-brand" href="index.html">Ya Tung</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse navbar-light" id="navbarsExample05">
            <ul class="navbar-nav ml-auto pl-lg-5 pl-0">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
			  <li class="nav-item">
                <a class="nav-link" href="blog.html">News</a>
              </li>
               <li class="nav-item cta">
                <a class="nav-link" href="booknow.html"><span>Reserve Now</span></a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </header>
    <!-- END header -->

    <section class="site-hero site-hero-innerpage overlay" data-stellar-background-ratio="0.5" style="background-image: url(images/pic.jpg);">
      <div class="container">
        <div class="row align-items-center site-hero-inner justify-content-center">
          <div class="col-md-12 text-center">

            <div class="mb-5 element-animate">
              <h1>Reservation</h1>
              <p>Discover our world's #1 Cement.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
    <!-- END section -->

    <section class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p style="font-size:20pt; color:#000000;"><strong>Reservation Result</strong></p>
          <form action="#" method="post">
                  
                      <div>
                          <?php echo "<label for=''> Shop : ".$data['shop']."</label>"; ?>
                      </div>

                      <div>
						  <?php echo "<label for=''> Name : ".$data['name']."</label>"; ?>
                      </div>
 
                      <div>
						  <?php echo "<label for=''> Phone : ".$data['phone']."</label>"; ?>
                      </div>

                      <div>
						  <?php echo "<label for=''> License plate : ".$data['car']."</label>"; ?>
                      </div>

                      <div >
                          <?php echo "<label for=''> Product : ".$product[0]."</label>"; 
								for ($i=1; $i<count($product); $i++)
									echo " & ".$product[$i]."";
						  ?>
                      </div>
					  <div>
						  <?php echo "<label for=''> Amount : ".$data['amount']."</label>"; ?>
                      </div>
                  
                      <div >
                          <?php echo "<label for=''> Date : ".$data['date']."</label>"; ?>
                      </div>
                      <div >
						  <?php echo "<label for=''> Time : ".$data['times']."".$time[0]." </label>"; ?>
                      </div>
                  
                    <div >
                     
					  <?php echo "<label for=''> Email : ".$data['email']."</label>"; ?>
                    </div>
                  
					<div>
                     
					  <?php echo "<label for=''> Note : ".$data['message']."</label>"; ?>
                    </div>
					
                     
                    
                </form>
              </div>
        </div>
      </div>
    </section>
    <!-- END section -->


    <!-- END section -->
   
    <footer class="site-footer">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-4">
            <h3>Phone Support</h3>
            <p>09:00 ~ 23:00</p>
            <p class="lead"><a href="tel://">+ 886-2-2733-8000 </a></p>
          </div>
		  <div class="col-md-4">
            <h3>Address</h3>
            <p>30F., No.207, Sec. 2, Dunhua S. Rd., Da’an Dist., Taipei City 106, Taiwan (R.O.C.)</p>
          </div>
          <div class="col-md-4">
            <h3>Connect With Us</h3>
            <p>We are socialized. Follow us</p>
            <p>
              <a href="https://www.facebook.com/yatungConcrete/" class="pl-0 p-3"><span class="fa fa-facebook"></span></a>
              <a href="https://www.youtube.com/channel/UCjkTGwQbvQMUkLgQ6sYr07w" class="p-3"><span class="fa fa-youtube-play"></span></a>
            </p>
          </div>
          
        </div>
        <div class="row justify-content-center">
          <div class="col-md-7 text-center">
            &copy; 
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | by Colorlib - More Templates YuHsin - Collect from YuHsin</a>

          </div>
        </div>
      </div>
    </footer>
    <!-- END footer -->
    
    <!-- loader -->
    <div id="loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#f4b214"/></svg></div>

    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/jquery-migrate-3.0.0.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.waypoints.min.js"></script>
    <script src="js/jquery.stellar.min.js"></script>

    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/magnific-popup-options.js"></script>

    <script src="js/main.js"></script>
  </body>
</html>