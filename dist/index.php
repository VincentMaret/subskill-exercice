<!doctype html>

<html lang="fr">

<head>
  <meta charset="utf-8">
  <title>Subskill Exercice</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="...">
  <meta name="author" content="VM">

  <link rel="icon" type="image/png" href="favicon.png" />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <link rel="stylesheet" href="lib/bootstrap/bootstrap.min.css">
  <link rel="stylesheet" href="style.min.css">
</head>

<body id="Home">

  <?php
    $homePath = 'assets/phpParts/pages/home/';

    include 'assets/phpParts/global/menu.php';
    include 'assets/phpParts/pages/home/header.php';
  ?>

  <!------------------------------------
    accordion skeleton
  ------------------------------------->
  <div class="accordion-container">
    <section id="FirstSlideBox" class="ac home-section-1">
      <div class="ac-q" tabindex="0">
        <h2>QU’EST-CE QUE
          LE CPF DE TRANSITION
          PROFESSIONNELLE&nbsp;?</h2>
      </div>
      <div class="ac-a">
        <?php include $homePath.'home-section-1.php'; ?>
      </div>
    </section>

    <section id="SecondSlideBox" class="ac home-section-2">
      <div class="ac-q" tabindex="0">
        <h2>COMMENT R&Eacute;ALISER
          VOTRE PROJET DE RECONVERSION&nbsp;?</h2>
      </div>
      <div class="ac-a">
        <?php include $homePath.'home-section-2.php'; ?>
      </div>
    </section>

    <section id="ThirdSlideBox" class="ac home-section-3">
      <div class="ac-q" tabindex="0">
        <h2>DISCUTER AVEC UN CONSEILLER</h2>
      </div>
      <div class="ac-a">
        <?php include $homePath.'home-section-3.php'; ?>
      </div>
    </section>
  </div>
  <!----------------------------------->

  <?php
    include 'assets/phpParts/global/footer.php';
  ?>

  <script src="lib/jquery/jquery-3.4.1.min.js"></script>
  <script src="script.min.js"></script>
</body>

</html>