<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>VoluntarioSOS - El tiempo es vida</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Cada minuto cuenta para salvar una vida." />
  <meta name="keywords" content="" />
  <meta name="author" content="VoluntarioSOS" />

  <!-- Facebook and Twitter integration -->
  <meta property="og:title" content="VoluntarioSOS - El tiempo es vida" />
  <meta property="og:image" content="" />
  <meta property="og:url" content="https://wwww.voluntariosos.org" />
  <meta property="og:site_name" content="VoluntarioSOS - El tiempo es vida" />
  <meta property="og:description" content="Cada minuto cuenta para salvar una vida." />
  <meta name="twitter:title" content="VoluntarioSOS - El tiempo es vida" />
  <meta name="twitter:image" content="" />
  <meta name="twitter:url" content="https://wwww.voluntariosos.org" />
  <meta name="twitter:card" content="" />

  <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
  <link rel="shortcut icon" href="images/sos-icon.ico">

  <!-- Chrome, Firefox OS, Opera and Vivaldi -->
  <meta name="theme-color" content="#f49717" />
  <!-- Windows Phone -->
  <meta name="msapplication-navbutton-color" content="#f49717" />
  <!-- iOS Safari -->
  <meta name="apple-mobile-web-app-status-bar-style" content="#f49717" />

  <!-- Google Webfonts -->
  <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

  <!-- Animate.css -->
  <link rel="stylesheet" href="css/animate.css">
  <!-- Icomoon Icon Fonts-->
  <link rel="stylesheet" href="css/icomoon.css">
  <!-- Simple Line Icons-->
  <link rel="stylesheet" href="css/simple-line-icons.css">
  <!-- Magnific Popup -->
  <link rel="stylesheet" href="css/magnific-popup.css">
  <!-- Owl Carousel -->
  <link rel="stylesheet" href="css/owl.carousel.min.css">
  <link rel="stylesheet" href="css/owl.theme.default.min.css">
  <!-- Theme Style -->
  <link rel="stylesheet" href="css/style.css">
  <!-- Modernizr JS -->
  <script src="js/modernizr-2.6.2.min.js"></script>
  <!-- FOR IE9 below -->
  <!--[if lt IE 9]>
	<script src="js/respond.min.js"></script>
	<![endif]-->
</head>

<body>
  <div id="fh5co-offcanvass">
    <ul>
      <li class="active"><a href="#" data-nav-section="home">Inicio</a></li>
      <li><a href="#" data-nav-section="testimonies">Testimonios</a></li>
      <li><a href="#" data-nav-section="faqs">Preguntas Frecuentes</a></li>
      <li><a href="#" data-nav-section="descargar">Descargá YA!</a></li>
      <li><a href="#" data-nav-section="estadisticas">Números</a></li>
      <li><a href="#" data-nav-section="testimonies_insert">Deja tu testimonio</a></li>
      <li><a href="#" data-nav-section="insert_contact">Contacto</a></li>
      
    </ul>
  </div>

  <?php include_once('nav.php');?>

  <div id="fh5co-page">
    <div id="fh5co-wrap">
      <?php include_once('home.php');?>
      <div id="fh5co-main">
        <?php include_once('testimonios.php'); ?>
        <?php include_once('faqs.php');?>
        <?php include_once('download.php');?>
        <?php include_once('statistics.php');?>
        <?php include_once('insert_testimony.php');?>
        <?php include_once('contact_form.php');?>      
      </div>
    </div>
  </div>

  <!-- jQuery -->
  <script src="js/jquery.min.js"></script>
  <!-- jQuery Easing -->
  <script src="js/jquery.easing.1.3.js"></script>
  <!-- Bootstrap -->
  <script src="js/bootstrap.min.js"></script>
  <!-- Waypoints -->
  <script src="js/jquery.waypoints.min.js"></script>
  <!-- Magnific Popup -->
  <script src="js/jquery.magnific-popup.min.js"></script>
  <!-- Owl Carousel -->
  <script src="js/owl.carousel.min.js"></script>
  <!-- toCount -->
  <script src="js/jquery.countTo.js"></script>
  <!-- Main JS -->
  <script src="js/main.js"></script>

    <script type="text/javascript">
        $('#contact-form').submit(function() {
            $.ajax({
                //nos fijamos si en el form es POST o GET
                type: $(this).attr('method'),
                //traemos el action del form (recursoBuscar.php)
                url: $(this).attr('action'),
                //obtenemos los datos del formulario
                data: $(this).serialize(),

                beforeSend: function () {
                  $('#contact_response').html("<img class='img_preload' src='images/preload.gif'/>");          
                },
                success: function(response) {
                  $('#contact_response').html(response);
                }
            });   
            return false;
        });
    </script>

</body>

</html>