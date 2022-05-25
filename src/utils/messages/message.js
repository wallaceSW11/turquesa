import Vue from "vue";

function information(type, title, text) {
    var sweetAlert = new Vue().$swal;

    sweetAlert({
        icon: type,
        title: title,
        text: text,
        confirmButtonColor: "#002984",
        animate: true,
    });
}
function confirm(title, text) {
    var sweetAlert = new Vue().$swal;

    return sweetAlert({
        icon: "question",
        title: title,
        text: text,
        confirmButtonColor: "#002984",
        showCancelButton: true,
        confirmButtonText: "Yes",
        animate: true,
    });
}

export default {
    information,
    confirm,
};
