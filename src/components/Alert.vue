<template>
<div v-bind:id="containerid" >
</div>
</template>

<script>

const timeout = 1500;

export default {
  name: 'Alert',
  props: {
      containerid: String,
    //   alertClass: String
  },
  methods: {
    showAlert(containerid, msg, alertClass = 'alert-success') {
        // console.log(containerid, msg);
        
        let template = `<div class="alert ${alertClass}" role="alert"> ${msg} \
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">\
                    <span aria-hidden="true">×</span>\
                </button>`;
        let myElement = document.getElementById(containerid);
        // console.log(template);
        myElement.innerHTML = template;
    },
    showAlertTimeout(containerid, msg, alertClass = 'alert-success'){
        this.showAlert(containerid, msg, alertClass);
        setTimeout(function(){
            let myElement = document.getElementById(containerid);
            myElement.innerHTML = '';
        }, timeout)
    }
  },
};
</script>