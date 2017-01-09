$(document).ready(function () {
    var offset = 0;
    var limit = 100;
    var totalInsertedRow = 0;

    $('#btnStart').click(function () {
        start();
    });
    $('#btnResetOffset').click(function () {
        offset = 0;
        $('#btnStart').val('Start');
    });

    function start() {
        $.ajax({
            type: 'JSON',
            method: 'POST',
            url: apiPath,
            data: {
                offset: offset,
                limit: limit,
                _token: _token
            }
        }).done(function(response) {
            if(response.countOriginData > 0){
                // increase offset
                offset = offset + limit;
                totalInsertedRow += response.insertedRows;
                $('#processingRow').text(offset);
                $('#inserting').text(response.insertedRows);
                $('#inserted').text(totalInsertedRow);

                setTimeout(start, 100);
            }else{
                $('#btnStart').val('Finish');
            }
        });
    }
});