const REGEX = {
  name: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
  // Support wide range of phone number format
  phone: /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/,
  mail: /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/
};
const MIN_LENGTH = 3;

app.common.FormManager = class {
  constructor(formData, formId, url, errorCallback) {
    this.formData = formData;
    this.formId = formId;
    this.url = url;
    this.errorCallback = errorCallback;
  }

  validateFormAndSendMail(mailCallback) {
    this.getFormData();

    const hasError = this.checkFormData();
    if (!hasError) {
      this.sendData(mailCallback);
    }
  }

  getFormData() {
    const formValues = $(this.formId).serializeArray();
    const t = this;

    // reset form data arrays
    $.each(this.formData, (i, x) => {
      if (typeof x.val === 'object') {
        t.formData[i].val = [];
      }
    });

    formValues.forEach(x => {
      // if values are store in object
      if (typeof this.formData[x.name].val === 'object') {
        this.formData[x.name].val.push(x.value);
      }
      else { this.formData[x.name].val = x.value; }
    });
  }
  checkFormData() {
    let errorChecker = false;

    $.each(this.formData, (i, x) => {
      // if no value set
      if (x.val === "" || x.val.length === 0) {
        errorChecker = true;

        // if checkbox
        if (x.type === 'checkbox') {
          this.setError(i, 'click');
        } else {
          this.setError(i, 'keyup');
        }
      } else {
        if (x.type === 'text') {
          const test = REGEX[x.regex].test(x.val);

          // if don't match regex or value too short
          if (!test || x.val.length < MIN_LENGTH) {
            this.setError(i, 'keyup');
            errorChecker = true;
          }
        }
      }
    });
    // launch error callback
    if (this.errorCallback) { this.errorCallback(); }

    return errorChecker;
  }
  // check single data
  checkInputData(e, messageIndex) {
    const targetValue = $(e.target).val();
    // if txt box message
    if (e.type === 'keyup') {

      const test = REGEX[this.formData[messageIndex].regex].test(targetValue);
      // if match name regex and require length
      if (test && targetValue.length >= MIN_LENGTH) {
        this.unsetError(messageIndex, 'keyup');
      }

    } else {
      this.unsetError(messageIndex, 'click');
    }
  }

  setError(messageIndex, type) {
    // write message
    $(`#${messageIndex}Container .error-message`).html(this.formData[messageIndex].errorMsg);
    // set event to remove it
    $(`input[name=${messageIndex}]`).on(type, e => {
      this.checkInputData(e, messageIndex);
    });
  }
  unsetError(messageIndex, type) {
    // write empty message
    $(`#${messageIndex}Container .error-message`).html('');
    // launch error callback
    if (this.errorCallback) { this.errorCallback(); }
    // unset event
    $(`input[name=${messageIndex}]`).off(type);
  }

  sendData(mailCallback) {
    const fd = new FormData();

    $.each(this.formData, (i, x) => {
      fd.append(i, x.val);
    });

    const options = {
      method: 'POST',
      body: fd
    }
    const sendRes = fetch(this.url, options);
    sendRes.then(res => res.text())
      .then(data => {
        console.log(data);
        mailCallback(data);
      });
  }

}