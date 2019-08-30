<!doctype html>

<html lang="fr">

<head>
  <meta charset="utf-8">
  <title>Subskill Exercice</title>
  <meta name="description" content="...">
  <meta name="author" content="VM">

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <link rel="stylesheet" href="lib/bootstrap/bootstrap.min.css">
  <link rel="stylesheet" href="lib/accordion/accordion.min.css">
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
    <section class="ac transition">
      <div id="FirstSlideBox" class="ac-q" tabindex="0">
        <h2 class="ac-target">QU’EST-CE QUE
          LE CPF DE TRANSITION
          PROFESSIONNELLE ?</h2>
      </div>
      <div class="ac-a">
        <?php include $homePath.'transition.php'; ?>
      </div>
    </section>

    <section class="ac reconversion">
      <div id="SecondSlideBox" class="ac-q" tabindex="0">
        <h2 class="ac-target">COMMENT R&Eacute;ALISER
          VOTRE PROJET DE RECONVERSION&nbsp;?</h2>
      </div>
      <div class="ac-a">
        <?php include $homePath.'reconversion.php'; ?>
      </div>
    </section>

    <section class="ac conseille">
      <div id="ThirdSlideBox" class="ac-q" tabindex="0">
        <h2 class="ac-target">DISCUTER AVEC UN CONSEILLER</h2>
      </div>
      <div class="ac-a">
        <?php include $homePath.'conseille.php'; ?>
      </div>
    </section>
  </div>
  <!----------------------------------->

  <?php
    include 'assets/phpParts/global/footer.php';
  ?>

  <script src="lib/jquery/jquery-3.4.1.min.js"></script>
  <script src="lib/accordion/accordion.min.js"></script>
  <script src="script.min.js"></script>
</body>

</html>