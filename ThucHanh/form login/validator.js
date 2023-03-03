function validator(selectorForm, selectorGroup, selectorMessage) {
  let formElement = document.querySelector(`#${selectorForm}`);
  let inputs = formElement.querySelectorAll("[name][rules]");
  let formRules = {};
  // get element parent from class parent
  function getParent(currentElement, selector) {
    while (currentElement.parentElement) {
      if (currentElement.parentElement.matches(selector)) {
        return currentElement.parentElement;
      }
      currentElement = currentElement.parentElement;
    }
  }
  //rules function
  functionRules = {
    required: function (value) {
      return value ? undefined : "vui lòng nhập trường này";
    },
    email: function (value) {
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regexEmail.test(value) ? undefined : "Vui lòng nhập Email";
    },
    min: function (min) {
      return function (value) {
        return value.length >= min
          ? undefined
          : `Vui lòng nhập ít nhất ${min} kí tự`;
      };
    },
    max: function (max) {
      return function (value) {
        return value.length <= min
          ? undefined
          : `Vui lòng nhập tối đa ${max} kí tự`;
      };
    },
    same: function (value) {},
  };

  //handles data
  if (formElement) {
    inputs = Array.from(inputs);
    inputs.forEach((input) => {
      let ruleFun;
      let rules = input.getAttribute("rules").split("|");
      for (let rule of rules) {
        if (rule.includes(":")) {
          let ruleLength = rule.split(":");
          rule = ruleLength[0];
          ruleFun = functionRules[rule](ruleLength[1]);
        } else {
          ruleFun = functionRules[rule];
        }
        if (Array.isArray(formRules[input.name])) {
          formRules[input.name].push(ruleFun);
        } else {
          formRules[input.name] = [ruleFun];
        }
      }
      function validate(event) {
        let currentValue = event.target.value.trim();
        let inputRules = formRules[event.target.name];
        let formGroup = getParent(event.target, `.${selectorGroup}`);
        let formMessage = formGroup.querySelector(`.${selectorMessage}`);
        let errorMessage;
        for(let rule of inputRules) {
          errorMessage = rule(currentValue);
          if(errorMessage)break;
        }
        if (errorMessage) {
          formGroup.classList.add("invalid");
          formMessage.innerText = errorMessage;
        } else {
          formGroup.classList.remove("invalid");
          formMessage.innerText = "";
        }
        return !errorMessage
      }
      //handle events
      input.onblur = function (event) {
        validate(event);
      };
      formElement.onsubmit = function (event) {
        event.preventDefault();
        let isValid = true;
        for(let input of inputs){
          validate({
            target: input
          });
        }
        if(!validate({target: input})){
          isValid = false;
        }

        if(isValid){
          formElement.submit();
        }
      };
    });
  }
  console.log(this)
  this.onSubmit = function (event) {
    return this
  }
}
