# vim:set sw=4 ts=4 sts=4 ft=perl expandtab:
package Lutim::I18N;

use base 'Locale::Maketext';
use File::Basename qw/dirname/;
use Locale::Maketext::Lexicon {
    _auto   => 1,
    _decode => 1,
    _style  => 'gettext',
    '*' => [
        Gettext => dirname(__FILE__) . '/I18N/*.po',
        Gettext => dirname(__FILE__) . '/../../../default/lib/Lutim/I18N/*.po',
    ]
};

1;
