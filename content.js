exists = $('.fork-flag .text a');

if (exists != undefined) {
    isFork = exists.html()
    if (isFork !== null) {
        createForkElement(isFork);
    }
}

function createForkElement(forkLink) {
    gitlink = 'git@github.com:' + forkLink + '.git';
    upstreamLi = $('<li/>');
    upstreamLi.attr('class', 'upstream_clone_url');
    upstreamLiA = $('<a/>');
    upstreamLiA.attr('href', gitlink);
    upstreamLiA.attr('data-permissions', 'Read+Write');
    upstreamLiA.html('Upstream');

    upstreamLiA.bind('click', function() {
        var sel = $(this);
        $('.clone-urls li.selected').removeClass('selected');

        $('.url-box input.url-field').val(gitlink);

        upstreamLi.addClass('selected');

        return false;
    });

    upstreamLi.append(upstreamLiA);


    $('.clone-urls').append(upstreamLi);
}
