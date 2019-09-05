'use strict';

app.pages.Home = class {
  constructor() {
    this.formData = {
      Q1: '',
      Q2: '',
      Q3: '',
      Q4: [],
      LastName: '',
      FirstName: '',
      Phone: '',
      Mail: '',
      Acceptation: ''
    };
    this.errorMessages = {
      Q1: 'Faites un choix',
      Q2: 'Faites un choix',
      Q3: 'Faites un choix',
      Q4: 'Faites un choix',
      LastName: 'Vous devez indiquer votre nom',
      FirstName: 'Vous devez indiquer votre prénom',
      Phone: 'Vous devez indiquer votre numéro de téléphone',
      Mail: 'Vous devez indiquer votre adresse mail',
      Acceptation: 'Acceptez les conditions générales d\'utilisation'
    };
    this.url = 'assets/phpParts/pages/home/home-form-request.php';
  }
  init() {
    this.accordion = new app.common.Accordion(500);
    this.formManager = new app.common.FormManager(this.formData, this.errorMessages, '#HomeForm', this.url);

    this.accordion.init();
    this.setEvents();
  }

  setEvents() {
    const t = this;

    $('#HomeSubmit').on('click', e => {
      e.preventDefault();
      t.formManager.formValidator();
    });
  }

}