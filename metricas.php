<?php
$users = json_decode(file_get_contents('https://sos-api-qa.herokuapp.com/users'));
$volunteers = json_decode(file_get_contents('https://sos-api-qa.herokuapp.com/users?volunteers=true'));
$incidents = json_decode(file_get_contents('https://sos-api-qa.herokuapp.com/incidents?all=true'));
?>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="fh5co-hero-wrap">
        <div class="fh5co-hero-intro text-center to-animate counter-animate">
          <div class="col-md-4 text-center">
            <span class="fh5co-counter js-counter" data-from="0" data-to="<?php echo sizeof($volunteers); ?>" data-speed="5000" data-refresh-interval="50"></span>
            <span class="fh5co-counter-label">Voluntarios</span>

          </div>
          <div class="col-md-4 text-center">
            <span class="fh5co-counter js-counter" data-from="0" data-to="<?php echo sizeof($incidents); ?>" data-speed="5000" data-refresh-interval="50"></span>
            <span class="fh5co-counter-label">Incidentes</span>
          </div>
          <div class="col-md-4 text-center">
            <span class="fh5co-counter js-counter" data-from="0" data-to="<?php echo sizeof($users); ?>" data-speed="5000" data-refresh-interval="50"></span>
            <span class="fh5co-counter-label">Civiles</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>