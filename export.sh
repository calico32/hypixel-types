#!/bin/sh

# super primitive script
# use with caution

pushd lib >/dev/null

find . | grep '.d.ts$' | sed -e '/^\.\/index\.d\.ts$/d' -e 's/\.d\.ts$//g' -e "s/^/export \* from '/" -e "s/$/';/" >/tmp/exports.ts

popd >/dev/null

cp lib/index.d.ts data/index.backup.d.ts

start=('^\/\/#region')
end=('^\/\/#endregion')

sed -i "/$start/,/$end/{/$start/!{/$end/!d}}" lib/index.d.ts
sed -i "/$start/r /tmp/exports.ts" lib/index.d.ts

rm /tmp/exports.ts
