
build:
	@export CC=/Developer/usr/bin/gcc; xcodebuild -project tilemill.xcodeproj

clean:
	@xcodebuild -project tilemill.xcodeproj clean

package: build
	mkdir -p build/Release/tilemill.app/Contents/Resources/tilemill
	cp -R ../../client build/Release/tilemill.app/Contents/Resources/tilemill/
	cp -R ../../modules build/Release/tilemill.app/Contents/Resources/tilemill/
	cp -R ../../shared build/Release/tilemill.app/Contents/Resources/tilemill/
	cp -R ../../lib build/Release/tilemill.app/Contents/Resources/tilemill/
	rm -rf build/Release/tilemill.app/Contents/Resources/tilemill/lib/node/wafadmin
	cp -R ../../server build/Release/tilemill.app/Contents/Resources/tilemill/
	cp -R ../../bin build/Release/tilemill.app/Contents/Resources/tilemill/
	cp -R ../../*.js build/Release/tilemill.app/Contents/Resources/tilemill/

run:
	open build/Release/tilemill.app

.PHONY: build clean package run
