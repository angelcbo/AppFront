/* eslint-disable */

/**
 * This file for demo purposes only. It contains additional functions, triggers and random code that allow the demo function as it should.
 *
 * You can use the code as you wish but will require some tweaking to work with your project.
 */
import { qpFormValidation } from "../utils/misc";

export function qpDemoFormValidation() {
  $("#validate").on("click", function(e) {
    e.preventDefault();

    var submitForm = true;

    if (qpFormValidation("#email", "email") !== true) {
      submitForm = false;
    }

    if (qpFormValidation("#username", "alphanumeric") !== true) {
      submitForm = false;
    }

    if (qpFormValidation("#password1", "password") !== true) {
      submitForm = false;
    }

    if (qpFormValidation("#birth", "alphanumeric") !== true) {
      submitForm = false;
    }

    if (qpFormValidation("#country", "alphabet") !== true) {
      submitForm = false;
    }

    if (qpFormValidation("#presentation", "", 1, 3, 100) !== true) {
      submitForm = false;
    }

    if (submitForm) {
      $(this)
        .closest("form")
        .submit();
    }
  });
}

// B5B Documentation:
// All data within the qpFormMaskInput() function are for demo purposes only.
// You will need to follow the jQuery Mask Plugin documentaion linked below to...
// ...create your own based on your needs:
// https://igorescobar.github.io/jQuery-Mask-Plugin/docs.html
export function qpFormMaskInput() {
  if ($(".ip_address").length) {
    $(".date").mask("00/00/0000");
    $(".time").mask("00:00:00");
    $(".date_time").mask("00/00/0000 00:00:00");
    $(".cep").mask("00000-000");
    $(".phone").mask("0000-0000");
    $(".phone_with_ddd").mask("(00) 0000-0000");
    $(".phone_us").mask("(000) 000-0000");
    $(".mixed").mask("AAA 000-S0S");
    $(".cpf").mask("000.000.000-00", { reverse: true });
    $(".cnpj").mask("00.000.000/0000-00", { reverse: true });
    $(".money").mask("000,000,000,000,000.00", { reverse: true });
    $(".money2").mask("#.##0,00", { reverse: true });
    $(".ip_address").mask("0ZZ.0ZZ.0ZZ.0ZZ", {
      translation: {
        Z: {
          pattern: /[0-9]/,
          optional: true
        }
      }
    });
    $(".ip_address").mask("099.099.099.099");
    $(".percent").mask("##0,00%", { reverse: true });
    $(".clear-if-not-match").mask("00/00/0000", { clearIfNotMatch: true });
    $(".placeholder").mask("00/00/0000", { placeholder: "__/__/____" });
    $(".fallback").mask("00r00r0000", {
      translation: {
        r: {
          pattern: /[\/]/,
          fallback: "/"
        },
        placeholder: "__/__/____"
      }
    });
    $(".selectonfocus").mask("00/00/0000", { selectOnFocus: true });
  }
}

export function qpTagsInput() {
  // Type 1
  $(".input-tags-1").tagsinput();

  // Type 2
  /* Input Tags - Color-Coded */
  var cities = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace("text"),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: "assets/plugins/typeahead/json/data-sample-cities.json"
  });
  cities.initialize();

  var elt = $(".input-tags-2");
  elt.tagsinput({
    tagClass: function(item) {
      switch (item.continent) {
        case "Europe":
          return "badge badge-primary";
        case "America":
          return "badge badge-danger";
        case "Australia":
          return "badge badge-success";
        case "Africa":
          return "label label-info";
        case "Asia":
          return "badge badge-warning";
      }
    },
    itemValue: "value",
    itemText: "text",
    typeaheadjs: {
      name: "cities",
      displayKey: "text",
      source: cities.ttAdapter()
    }
  });
  elt.tagsinput("add", { value: 1, text: "Amsterdam", continent: "Europe" });
  elt.tagsinput("add", {
    value: 4,
    text: "Washington",
    continent: "America"
  });
  elt.tagsinput("add", { value: 7, text: "Sydney", continent: "Australia" });
  elt.tagsinput("add", { value: 10, text: "Beijing", continent: "Asia" });
  elt.tagsinput("add", { value: 13, text: "Cairo", continent: "Africa" });
}

// B5B Documentation:
// All data within this file are for demo purposes only.
// You will need to follow the documentaion linked below to...
// ...create your own based on your needs:
// https://codeseven.github.io/toastr/
export function qpNotificationToastr() {
  var i = -1;
  var toastCount = 0;
  var $toastlast;

  var getMessage = function() {
    var msgs = [
      "My name is Inigo Montoya. You killed my father. Prepare to die!",
      '<div><input class="input-small" value="textbox"/>&nbsp;<a href="http://johnpapa.net" target="_blank">This is a hyperlink</a></div><div><button type="button" id="okBtn" class="btn btn-primary">Close me</button><button type="button" id="surpriseBtn" class="btn" style="margin: 0 8px 0 8px">Surprise me</button></div>',
      "Are you the six fingered man?",
      "Inconceivable!",
      "I do not think that means what you think it means.",
      "Have fun storming the castle!"
    ];
    i++;
    if (i === msgs.length) {
      i = 0;
    }

    return msgs[i];
  };
  $("#showtoast").click(function() {
    var shortCutFunction = $("#toastTypeGroup input:radio:checked").val();
    var msg = $("#message").val();
    var title = $("#title").val() || "";
    var $showDuration = $("#showDuration");
    var $hideDuration = $("#hideDuration");
    var $timeOut = $("#timeOut");
    var $extendedTimeOut = $("#extendedTimeOut");
    var $showEasing = $("#showEasing");
    var $hideEasing = $("#hideEasing");
    var $showMethod = $("#showMethod");
    var $hideMethod = $("#hideMethod");
    var toastIndex = toastCount++;

    toastr.options = {
      closeButton: $("#closeButton").prop("checked"),
      debug: $("#debugInfo").prop("checked"),
      progressBar: $("#progressBar").prop("checked"),
      positionClass:
        $("#positionGroup input:radio:checked").val() || "toast-top-right",
      onclick: null
    };

    if ($("#addBehaviorOnToastClick").prop("checked")) {
      toastr.options.onclick = function() {
        alert("You can perform some custom action after a toast goes away");
      };
    }

    if ($showDuration.val().length) {
      toastr.options.showDuration = $showDuration.val();
    }

    if ($hideDuration.val().length) {
      toastr.options.hideDuration = $hideDuration.val();
    }

    if ($timeOut.val().length) {
      toastr.options.timeOut = $timeOut.val();
    }

    if ($extendedTimeOut.val().length) {
      toastr.options.extendedTimeOut = $extendedTimeOut.val();
    }

    if ($showEasing.val().length) {
      toastr.options.showEasing = $showEasing.val();
    }

    if ($hideEasing.val().length) {
      toastr.options.hideEasing = $hideEasing.val();
    }

    if ($showMethod.val().length) {
      toastr.options.showMethod = $showMethod.val();
    }

    if ($hideMethod.val().length) {
      toastr.options.hideMethod = $hideMethod.val();
    }

    if (!msg) {
      msg = getMessage();
    }

    $("#toastrOptions").text(
      "Command: toastr[" +
        shortCutFunction +
        ']("' +
        msg +
        (title ? '", "' + title : "") +
        '")\n\ntoastr.options = ' +
        JSON.stringify(toastr.options, null, 2)
    );

    var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
    $toastlast = $toast;
    if ($toast.find("#okBtn").length) {
      $toast.delegate("#okBtn", "click", function() {
        alert("you clicked me. i was toast #" + toastIndex + ". goodbye!");
        $toast.remove();
      });
    }
    if ($toast.find("#surpriseBtn").length) {
      $toast.delegate("#surpriseBtn", "click", function() {
        alert(
          "Surprise! you clicked me. i was toast #" +
            toastIndex +
            ". You could perform an action here."
        );
      });
    }
  });

  function getLastToast() {
    return $toastlast;
  }

  $("#clearlasttoast").click(function() {
    toastr.clear(getLastToast());
  });

  $("#cleartoasts").click(function() {
    toastr.clear();
  });
}
