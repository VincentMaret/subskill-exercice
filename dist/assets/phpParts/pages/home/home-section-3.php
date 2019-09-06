<?php include 'home-form.php'; ?>

<div class="section-contents">
  <h3>
    VOUS SOUHAITEZ EN SAVOIR PLUS SUR LE CPF DE TRANSITION
    PROFESSIONNELLE OU PRÉPARER VOTRE PROJET DE FORMATION ?
    <br>
    LAISSEZ-NOUS VOUS CONTACTER.
  </h3>

  <form id="HomeForm" action="assets/phpParts/global/form-validator.php" method="post" target="_blank">
    <ul>
      <li id="Q1Container">
        <div>1.&nbsp;</div>
        <div>
          <P class="form-part-title">
            Avez-vous déjà contacté le Fongecif Île-de-France et/ou avez-vous déjà créé votre espace personnel sur
            <a class="link-txt" href="http://www.fongecif-idf.fr" rel="noopener"
              target="_blank">www.fongecif-idf.fr</a>&nbsp;?
          </P>

          <p class="error-message"></p>

          <?php
            foreach($homeFdConfig['checkBoxValues']['Q1'] as $val){
              ?>
          <div class="cb-container">
            <label>
              <input type="radio" name="Q1" value="<?php echo $val; ?>">
              <span class="fake-cb"></span>
              <span class="label-txt"><?php echo $val; ?></span>
            </label>
          </div>
          <?php
            }
          ?>
        </div>
      </li>

      <li id="Q2Container">
        <div>2.&nbsp;</div>
        <div>
          <P class="form-part-title">
            Vous êtes en :
          </P>

          <p class="error-message"></p>

          <?php
            foreach($homeFdConfig['checkBoxValues']['Q2'] as $val){
              ?>
          <div class="cb-container">
            <label>
              <input type="radio" name="Q2" value="<?php echo $val; ?>">
              <span class="fake-cb"></span>
              <span class="label-txt"><?php echo $val; ?></span>
            </label>
          </div>
          <?php
            }
          ?>

        </div>
      </li>

      <li id="Q3Container">
        <div>3.&nbsp;</div>
        <div>
          <P class="form-part-title">
            Vous avez un projet de reconversion professionnelle :
          </P>

          <p class="error-message"></p>

          <?php
            foreach($homeFdConfig['checkBoxValues']['Q3'] as $val){
              ?>
          <div class="cb-container">
            <label>
              <input type="radio" name="Q3" value="<?php echo $val; ?>">
              <span class="fake-cb"></span>
              <span class="label-txt"><?php echo $val; ?></span>
            </label>
          </div>
          <?php
            }
          ?>
        </div>
      </li>

      <li id="Q4Container">
        <div>4.&nbsp;</div>
        <div>
          <P class="form-part-title">
            &Agrave; quel moment de la journée souhaitez-vous être appelé&nbsp;?
          </P>

          <p class="error-message"></p>

          <?php
            foreach($homeFdConfig['checkBoxValues']['Q4'] as $val){
              ?>
          <div class="cb-container">
            <label>
              <input type="checkbox" name="Q4" value="<?php echo $val; ?>">
              <span class="fake-cb"></span>
              <span class="label-txt"><?php echo $val; ?></span>
            </label>
          </div>
          <?php
            }
          ?>
        </div>
      </li>

      <li class="form-info">
        <div>5.&nbsp;</div>
        <div>
          <P class="form-part-title">
            Vos informations
          </P>

          <label id="LastNameContainer">
            <span>Nom</span>
            <p class="error-message"></p>
            <input type="text" name="LastName">
          </label>

          <label id="FirstNameContainer">
            <span>Prénom</span>
            <p class="error-message"></p>
            <input type="text" name="FirstName">
          </label>

          <label id="PhoneContainer">
            <span>Numéro de téléphone</span>
            <p class="error-message"></p>
            <input type="text" name="Phone">
          </label>

          <label id="MailContainer">
            <span>Adresse email</span>
            <p class="error-message"></p>
            <input type="text" name="Mail">
          </label>
        </div>
      </li>

      <li id="AcceptationContainer" class="acceptation">
        <P class="form-part-title">
          Que faites-vous de mes données&nbsp;?
        </P>

        <p class="error-message"></p>

        <div class="cb-container">
          <label>
            <input type="checkbox" name="Acceptation"
              value="<?php echo $homeFdConfig['checkBoxValues']['Acceptation'][0]; ?>">
            <span class="fake-cb"></span>
            <span class="label-txt">
              En soumettant ce formulaire, j’accepte que les informations saisies soient
              exploitées dans le cadre de la demande.
            </span>
          </label>
        </div>

        <input id="HomeSubmit" type="submit" value="ENVOYER">
      </li>
    </ul>
  </form>
</div>

<div class="form-answer">
  <p>
    MERCI D’AVOIR PRIS LE TEMPS DE
    R&Eacute;PONDRE &Agrave; CES QUELQUES QUESTIONS.
  </p>
  <p>
    UN DE NOS CONSEILLERS VOUS CONTACTERA DANS UN D&Eacute;LAI MAXIMUM DE 72 HEURES.
  </p>
</div>