<?php
$response = file_get_contents('https://sos-api-prod.herokuapp.com/testimonies');
$response = json_decode($response);
?>

<div id="fh5co-testimony" data-section="testimonies">
  <div class="container">
    <div class="row animate-box">

      <div class="owl-carousel">
		<?php
		foreach($response as $mydata){
		?>
        <div class="item">
          <div class="col-md-9 col-sm-9 col-xs-8 col-xxs-12">
            <blockquote>
              <p>&ldquo;<?php echo $mydata->text; ?>&rdquo;</p>
            </blockquote>
            <p class="fh5co-author fh5co-uppercase-sm">
            	<span><?php echo $mydata->name; ?> <?php echo $mydata->lastname; ?></span>, Voluntario</p>
          </div>
        </div>
        <?php } ?>
      </div>
    </div>
  </div>
</div>