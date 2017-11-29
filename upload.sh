export ANDROID_SAUCE_STORAGE_DEBUG="https://saucelabs.com/rest/v1/storage/$SAUCE_USERNAME/edge.apk?overwrite=true"
export ANDROID_BUILD_APP_DEBUG=$HOME/app-debug.apk

curl -u $SAUCE_USERNAME:$SAUCE_ACCESS_KEY -X POST -H 'Content-Type: application/octet-stream' $ANDROID_SAUCE_STORAGE_DEBUG --data-binary @$ANDROID_BUILD_APP_DEBUG

ls

cd "./tests"

npm install

ls

./node_modules/.bin/wdio local.conf.js

