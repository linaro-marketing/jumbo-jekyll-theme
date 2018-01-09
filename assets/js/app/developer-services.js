$(document).ready(function () {

    $('#developer-services-contact-form').validate({
        rules: {
            'lead[full_name]': {
                minlength: 2,
                required: true
            },
            'lead[email]': {
                required: true,
                email: true
            },
            'note_1': {
                minlength: 5,
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function (element) {
            element.closest('.form-group').removeClass('has-error').addClass('has-success');
        }
    });

});
