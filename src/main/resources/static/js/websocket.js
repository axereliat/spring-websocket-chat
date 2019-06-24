var websocket = new WebSocket('ws://localhost:8080/messages');

$('#messageForm').on('submit', function (e) {
    e.preventDefault();

    var message = $('#message').val();
    $('#message').val('');

    $('#messages').append(
        $('<div class="row">')
            .append(
                $('<div class="col-md-6">')
                    .append(
                        $('<div class="btn btn-block btn-danger mt-1">' + message + '</div>')
                    )
            )
            .append(
                $('<div class="col-md-6">')
            )
    );
    websocket.send(message);
});

websocket.onmessage = function (ev) {
    var message = ev.data;

    $('#messages').append(
        $('<div class="row">')
            .append(
                $('<div class="col-md-6">')
            )
            .append(
                $('<div class="col-md-6">')
                    .append(
                        $('<div class="btn btn-block btn-info mt-1">' + message + '</div>')
                    )
            )
    );
};