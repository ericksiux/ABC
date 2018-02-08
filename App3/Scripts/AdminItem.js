$(document).ready(function () {
    $("#imageUploadForm").change(function () {
        var formData = new FormData();
        var totalFiles = document.getElementById("imageUploadForm").files.length;
        for (var i = 0; i < totalFiles; i++) {
            var file = document.getElementById("imageUploadForm").files[i];
            formData.append("imageUploadForm", file);
        }
        $.ajax({
            type: "POST",
            url: '/AdminItem/Upload',
            data: formData,
            dataType: 'json',
            contentType: false,
            processData: false,
            success: function (response) {
                $('#ImgView').attr('src', '/Images/' + response)
                $("#Image").attr('value', response)
            }
        });
    });
});


function editItem(id) {
        window.location.href = '/AdminItem/Edit/' + id;
    }

    function deleteItem(id) {
        window.location.href = '/AdminItem/Delete/' + id;
    }

    function newItem()
    {
        window.location.href = '/AdminItem/Create';
    }
