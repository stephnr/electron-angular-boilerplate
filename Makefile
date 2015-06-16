APP_NAME=app
ELECTRON_VERSION=0.28.1
OUTPUT_DIR=dist

apps: windows-app windows-app-64 mac-app mac-app-64 linux-app linux-app-64

globals:
	npm install -g electron-prebuilt
	npm install -g electron-packager
	npm install -g node-inspector
	npm install -g gulp

clean-apps:
	rm -rf dist && mkdir distgit
windows-app:
	electron-packager . ${APP_NAME} --platform=win32 --arch=ia32 --version=${ELECTRON_VERSION} --out=${OUTPUT_DIR}/win32
windows-app-64:
	electron-packager . ${APP_NAME} --platform=win32 --arch=x64 --version=${ELECTRON_VERSION} --out=${OUTPUT_DIR}/win64
mac-app:
	electron-packager . ${APP_NAME} --platform=darwin --arch=x64 --version=${ELECTRON_VERSION} --out=${OUTPUT_DIR}/mac64
linux-app:
	electron-packager . ${APP_NAME} --platform=linux --arch=ia32 --version=${ELECTRON_VERSION} --out=${OUTPUT_DIR}/linux32
linux-app-64:
	electron-packager . ${APP_NAME} --platform=linux --arch=x64 --version=${ELECTRON_VERSION} --out=${OUTPUT_DIR}/linux64