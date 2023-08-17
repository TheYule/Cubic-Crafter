@ECHO OFF

TITLE Build Cubic Crafter

echo Building...

g++ src/main.cpp -std=c++17 -mwindows -Ilib/webview -Ilib/webview2/build/native/include -ladvapi32 -lole32 -lshell32 -lshlwapi -luser32 -lversion -o build/app.exe

echo Done

cd build

app.exe