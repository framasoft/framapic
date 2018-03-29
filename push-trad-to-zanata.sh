#!/bin/bash
FILE=$1
if [[ ! -e lib/Lutim/I18N/$FILE.po ]]
then
    echo "lib/Lutim/I18N/$FILE.po does not exist. Exiting."
    exit 1
else
    LOCALE=$(echo $FILE | sed -e "s@_@-@g")
    zanata-cli -q -B push --push-type trans -l $LOCALE
fi
