$(document).ready(function(){

    if(/myfiles/i.test(location.href)) {

        $('main > .row > .col-md-12').prepend(
            '<div role="tabpanel">'+
                '<ul class="nav nav-tabs" role="tablist">'+
                    '<li role="presentation"><a href="/#send-files"><i class="fa fa-fw fa-send"></i> Envoyer des fichiers</a></li>'+
                    '<li role="presentation" ><a href="/#send-url"><i class="fa fa-fw fa-link"></i> Envoyer depuis une URL</a></li>'+
                    '<li role="presentation" class="active pull-right"><a href="/myfiles"><i class="fa fa-fw fa-history"></i> Mes images</a></li>'+
                '</ul>'+
            '</div>'
        );

        $('h4').addClass('h2'); // devrait être en h2 si on respecte la hierarchie

        $('main > .row > .col-md-12 p:eq(0)').addClass('alert alert-info');

        $('table th').attr('scope','col'); // accessibilité
        $('table').addClass('table-bordered');

        setTimeout(function() {
            $('#myfiles tr td:nth-child(1) input').css('margin-left','-10px');

            // Lien d'affichage
            $('#myfiles tr td:nth-child(3) a').html(function(){
                if($(this).parent().parent('tr').find('td:eq(4) .icon-ok').length) {
                    return '<i class="fa fa-fw fa-eye"></i><span class="sr-only">'+$(this).attr('href')+'</span>';
                } else {
                    return '<img src="'+$(this).attr('href')+'" alt="'+$(this).attr('href')+'"/>';
                }
            })

            // Lien de suppression
            $('#myfiles tr td:nth-child(8) a').html(function(){
                return '<i class="fa fa-fw fa-trash text-danger"></i><span class="sr-only">'+$(this).attr('href')+'</span>';
            })

            $('#myfiles tr td:nth-child(3),#myfiles tr td:nth-child(8)').addClass('text-center');
        },1000)

    } else if(/gallery/i.test(location.href)) {

        $('#download-all').removeClass('col-sm-12').parent().addClass('text-center');

    } else {

        $('main > .row > .col-md-12 > .jsonly')
            .wrapInner('<div class="tab-content"></div>')
            .prepend(
                '<div role="tabpanel">'+
                    '<ul class="nav nav-tabs" role="tablist">'+
                        '<li role="presentation" class="active"><a href="#send-files" aria-controls="send-files" role="tab" data-toggle="tab" aria-expanded="true"><i class="fa fa-fw fa-send"></i> Envoyer des fichiers</a></li>'+
                        '<li role="presentation" ><a href="#send-url" aria-controls="send-url" role="tab" data-toggle="tab" aria-expanded="false"><i class="fa fa-fw fa-link"></i> Envoyer depuis une URL</a></li>'+
                        '<li role="presentation" class="pull-right"><a href="/myfiles"><i class="fa fa-fw fa-history"></i> Mes images</a></li>'+
                    '</ul>'+
                '</div>'
            );

        // Form Send file
        $('#drag-and-drop-zone')
            .addClass('well')
            .wrap('<div role="tabpanel" class="tab-pane active" id="send-files">');

        // Help message
        $('.help-block').append($('.messages p'));

        // Form Send URL
        $('.form-horizontal')
            .after($('.help-block'))
            .addClass('well clearfix')
            .wrap('<div role="tabpanel" class="tab-pane" id="send-url">');

        $('.form-horizontal .col-sm-3.col-xs-12')
            .addClass('sr-only')
            .removeClass('col-sm-3 col-xs-12');
        $('.form-horizontal .col-sm-9.col-xs-12')
            .addClass('col-sm-10 col-md-8')
            .removeClass('col-sm-9 col-xs-12')
        $('.form-horizontal .form-group').removeClass('form-group');

        $('#file-url-button')
            .wrap('<div class="col-sm-2 col-md-2"></div>')
            .removeClass('btn-primary').addClass('btn-info');

        // Upload options
        $('.checkbox label').addClass('btn btn-default');
        $('#delete-day')
            .wrap('<div id="expiration" class="btn btn-default">')
            .before('<label for"delete-day">Expiration </label>');

        // Hash Send URL
        if(location.hash=='#send-url') { jQuery('a[href="#send-url"]').trigger('click') };

    }
});