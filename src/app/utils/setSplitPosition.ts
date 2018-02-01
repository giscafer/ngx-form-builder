


export function initSplitEventHandler() {
    $('#h-handler').mousedown(function () {
        window['handler_isDown'] = true;
    });


    $(window).mousemove(function (e) {
        if (window['handler_isDown']) {
            var left = e.clientX / window.innerWidth;
            setSplitPosition(left);
        }
    }).mouseup(function () {
        window['handler_isDown'] = false;
    });

    $(window).resize(function () {

    });
}

// set splitter position by percentage, left should be between 0 to 1
function setSplitPosition(percentage) {
    percentage = Math.min(0.9, Math.max(0.1, percentage));

    var left = percentage * 100;
    $('#code-container').css('width', left + '%');
    $('#view-container').css('width', (100 - left) + '%')
        .css('left', left + '%');
    $('#h-handler').css('left', left + '%');
}