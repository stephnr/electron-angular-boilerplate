DEPENDENCIES=( "electron-prebuilt:electron" "electron-packager:electron-packager" "node-inspector:node-inspector" "bower:bower" "jspm:jspm" "gulp:gulp" "jest-cli:jest" )
for DEP in ${DEPENDENCIES[@]}; do
  PKG="${DEP%%:*}"
  CMD="${DEP##*:}"
  type $CMD >/dev/null 2>&1 && printf "%s is already installed...\n" $PKG || npm install -g $PKG
done;

printf "\nDONE\n";
