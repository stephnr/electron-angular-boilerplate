APP_NAME=app
ELECTRON_VERSION=0.28.3
OUTPUT_DIR=build

apps: windows windows-64 mac-64 linux linux-64

clean-apps:
	rm -rf $OUTPUT_DIR && mkdir $OUTPUT_DIR
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
