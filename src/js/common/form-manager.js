'use strict';

app.common.FormManager = class {
  constructor(FormData, errorMessages, formId, url) {
    this.formData = FormData;
    this.errorMessages = errorMessages;
    this.formId = formId;
    this.url = url;

    this.regex = {
      name: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      // Support wide range of phone number format
      phone: /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/,
      mail: /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/
    };
    this.minNameLenth = 3;
  }

  formValidator() {
    this.getFormData();

    const hasError = this.checkFormData();
    if (!hasError) {
      this.sendData();
    }
  }
  getFormData() {
    const formData = $(this.formId).serializeArray();

    // reset Q4 array
    this.formData.Q4 = [];

    formData.forEach(x => {
      if (x.name === 'Q4') { this.formData[x.name].push(x.value); }
      else { this.formData[x.name] = x.value; }
    });
  }
  checkFormData() {
    let errorChecker = false;

    $.each(this.formData, (i, x) => {

      // if no value set
      if (x === "" || x.length === 0) {
        errorChecker = true;

        // if checkbox
        if (i === 'Q1' || i === 'Q2' || i === 'Q3' || i === 'Q4' || i === 'Acceptation') {
          this.setError(i, 'click');
        } else {
          this.setError(i, 'keyup');
        }
      } else {

        // if name type
        if (i === 'LastName' || i === 'FirstName') {
          const test = this.regex.name.test(this.formData[i]);
          // if don't match name regex or name too short
          if (!test || this.formData[i].length < this.minNameLenth) {
            this.setError(i, 'keyup');
            errorChecker = true;
          }
        }

        // if phone type
        if (i === 'Phone') {
          const test = this.regex.phone.test(this.formData[i]);
          // if don't match phone regex
          if (!test) {
            this.setError(i, 'keyup');
            errorChecker = true;
          }
        }

        // if mail type
        if (i === 'Mail') {
          const test = this.regex.mail.test(this.formData[i]);
          // if don't match mail regex
          if (!test) {
            this.setError(i, 'keyup');
            errorChecker = true;
          }
        }

      }

    });

    // refresh opened frame height
    app.pageInstance.accordion.refreshOpenedFrame();

    return errorChecker;
  }

  setError(messageIndex, type) {
    // write message
    $(`#${messageIndex}Container .error-message`).html(this.errorMessages[messageIndex]);
    // set event to remove it
    $(`input[name=${messageIndex}]`).on(type, e => {
      this.checkInputData(e, messageIndex);
    });
  }

  unsetError(messageIndex, type) {
    // write empty message
    $(`#${messageIndex}Container .error-message`).html('');
    // refresh opened frame height
    app.pageInstance.accordion.refreshOpenedFrame();
    // unset event
    $(`input[name=${messageIndex}]`).off(type);
  }

  checkInputData(e, messageIndex) {
    const targetValue = $(e.target).val();
    // if txt box message
    if (e.type === 'keyup') {

      // if name type message
      if (messageIndex === 'LastName' || messageIndex === 'FirstName') {
        const test = this.regex.name.test(targetValue);
        // if match name regex and require length
        if (test && targetValue.length >= this.minNameLenth) {
          this.unsetError(messageIndex, 'keyup');
        }
      }

      // if phone type message
      if (messageIndex === 'Phone') {
        const test = this.regex.phone.test(targetValue);
        // if match phone regex
        if (test) {
          this.unsetError(messageIndex, 'keyup');
        }
      }

      // if mail type message
      if (messageIndex === 'Mail') {
        const test = this.regex.mail.test(targetValue);
        // if match mail regex
        if (test) {
          this.unsetError(messageIndex, 'keyup');
        }
      }

    } else {
      this.unsetError(messageIndex, 'click');
    }
  }

  sendData() {
    const fd = new FormData();

    $.each(this.formData, (i, x) => {
      fd.append(i, x);
    });

    const options = {
      method: 'POST',
      body: fd
    }
    const sendRes = fetch(this.url, options);
    sendRes.then(res => res.text())
      .then(data => {
        console.log(data);
        if (data === 'mail sent') {
          $('#Home .home-section-3 .form-answer').css('display', 'block');
        } else {
          console.log('no mail sent')
        }
      });
  }

}