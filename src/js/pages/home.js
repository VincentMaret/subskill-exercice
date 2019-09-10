app.pages.Home = class {
  constructor() {
    this.formData = {
      Q1: { val: '', type: 'checkbox', errorMsg: 'Faites un choix' },
      Q2: { val: '', type: 'checkbox', errorMsg: 'Faites un choix' },
      Q3: { val: '', type: 'checkbox', errorMsg: 'Faites un choix' },
      Q4: { val: [], type: 'checkbox', errorMsg: 'Faites un choix' },
      LastName: { val: '', type: 'text', regex: 'name', errorMsg: 'Vous devez indiquer votre nom' },
      FirstName: { val: '', type: 'text', regex: 'name', errorMsg: 'Vous devez indiquer votre prénom' },
      Phone: { val: '', type: 'text', regex: 'phone', errorMsg: 'Vous devez indiquer votre numéro de téléphone' },
      Mail: { val: '', type: 'text', regex: 'mail', errorMsg: 'Vous devez indiquer votre adresse mail' },
      Acceptation: { val: '', type: 'checkbox', errorMsg: 'Acceptez les conditions générales d\'utilisation' }
    };
    this.url = 'assets/phpParts/pages/home/home-form-request.php';
  }
  init() {
    this.accordion = new app.common.Accordion(500);
    this.formManager = new app.common.FormManager(this.formData, '#HomeForm', this.url, this.errorCallback);

    this.accordion.init();
    this.setEvents();
  }

  setEvents() {
    const t = this;

    $('#HomeSubmit').on('click', e => {
      e.preventDefault();
      t.formManager.validateFormAndSendMail(this.mailCallback);
    });
  }

  mailCallback(data) {
    if (data === 'mail sent') {
      $('#ThirdSlideBox .section-contents').css('display', 'none');
      $('#Home .home-section-3 .form-answer').css('display', 'block');
      app.pageInstance.accordion.refreshOpenedFrame();
    } else {
      console.log('no mail sent');
    }
  }

  errorCallback() {
    app.pageInstance.accordion.refreshOpenedFrame();
  }

}