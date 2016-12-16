

 <?php
  /*
  https://sos-api-qa.herokuapp.com/testimonies
  static create(req, res, next) {
    Model.create(req.body, (err, doc) => {
      helpers.handleResponse(res, err, doc, next);
    });
  }*/


 if(isset($_POST['enviar'])){
    $name= $post['name-field'];
    $lastname= $post['lastname-field'];
    $email= $post['email-field'];
    $text= $post['textmsj-field'];

    $array = array('name' => $name, 'lastname' => $lastname, 'email' => $email, 'text' => $text);

    $data=json_encode($array);
    //create($data);
    echo($data);
 }

 ?>      
        <div id="fh5co-subscribe" data-section="testimonies_insert">
          <div class="container">
            <div class="row animate-box">
              <form id="testimony-form" action="" method="post">
                <div class="row">
                  <div class="col-md-6 col-md-offset-3">
                     <h2 class="fh5co-lead animate-single faqs-animate-1 fadeIn animated">
                      Dejanos tu testimonio
                      </h2>
                  </div>
                </div>
                 <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                      <div class="form-group">
                        <input id="email-field" name="email-field" type="email" class="form-control" placeholder="email" required="Por favor ingresa un email">
                      </div> 
                    </div>
                 </div>
                 <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                      <div class="form-group">
                        <input id="name-field" name="name-field" type="text" class="form-control" placeholder="nombre" required="Por favor ingrese su nombre">
                      </div> 
                    </div>
                 </div>
                 <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                      <div class="form-group">
                        <input id="lastname-field" name="lastname-field" type="text" class="form-control" placeholder="apellido" required="Por favor ingresa un apellido">
                      </div> 
                    </div>
                 </div>
                 <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                      <div class="form-group">
                        <input id="textmsj-field" name="textmsj-field" type="text" class="form-control" placeholder="Testimonio" required="Por favor ingrese su mensaje">
                      </div>
                    </div>
                 </div>               
                 <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                      <div class="form-group">
                        <input name="enviar" type="submit" class="btn btn-primary form" value="Enviar">
                      </div>
                    </div>
                 </div>
              </form>
            </div>
          </div>
        </div>