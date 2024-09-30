#!/bin/bash

cat notation.md | sed -e 's/\$\$\s*//g' > _topdf.md
cat $1.md | sed -e 's/\\\$/\$/g' -e 's/:::\s*details.*/\Soluzione: \n\n/g' -e 's/:::.*//g'>> _topdf.md
pandoc _topdf.md -o $1.pdf
rm _topdf.md

