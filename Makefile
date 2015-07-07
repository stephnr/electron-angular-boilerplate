APP_NAME=app
ELECTRON_VERSION=0.28.3
OUTPUT_DIR=build

apps: windows windows-64 mac-64 linux linux-64

globals:
	DEPENDENCIES = ( "electron-prebuilt:electron"
									 "electron-packager:electron-packager"
									 "node-inspector:node-inspector"
									 "bower:bower"
									 "jspm:jspm"
									 "gulp:gulp"
									 "jest-cli:jest" )
	for DEP in ${DEPENDENCIES[@]}; do
		PKG="${DEP%%:*}"
		CMD="${DEP##*:}"
		type $CMD >/dev/null 2>&1 || npm install -g $PKG

clean-apps:
	rm -rf dist && mkdir dist
windows:
	rm -rf ${OUTPUT_DIR}/win32
	electron-packager . ${APP_NAME} --platform=win32 --arch=ia32 --version=${ELECTRON_VERSION} --out=${OUTPUT_DIR}/win32
windows-64:
	rm -rf ${OUTPUT_DIR}/win64
	electron-packager . ${APP_NAME} --platform=win32 --arch=x64 --version=${ELECTRON_VERSION} --out=${OUTPUT_DIR}/win64
mac-64:
	rm -rf ${OUTPUT_DIR}/mac64
	electron-packager . ${APP_NAME} --platform=darwin --arch=x64 --version=${ELECTRON_VERSION} --out=${OUTPUT_DIR}/mac64
linux:
	rm -rf ${OUTPUT_DIR}/linux32
	electron-packager . ${APP_NAME} --platform=linux --arch=ia32 --version=${ELECTRON_VERSION} --out=${OUTPUT_DIR}/linux32
linux-64:
	rm -rf ${OUTPUT_DIR}/linux64
	electron-packager . ${APP_NAME} --platform=linux --arch=x64 --version=${ELECTRON_VERSION} --out=${OUTPUT_DIR}/linux64
