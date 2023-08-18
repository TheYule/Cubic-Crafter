#include <iostream>
#include <fstream>
#include "webview.h"

using namespace std;

string html() {
    ifstream file("C:/Users/The Yule/Documents/Coding Projects/Cubic Crafter/src/web/index.html");
    string data;
    string part;

    while (getline(file, part)) data.append(part);

    file.close();

    return data;
}

vector<string> javascripts() {
    vector<string> javascripts = {
        "babylon.js",
        "noise.js"
    };

    for (int i = 0; i < javascripts.size(); i++) {
        ifstream file("C:/Users/The Yule/Documents/Coding Projects/Cubic Crafter/src/web/include/" + javascripts[i]);
        string data;
        string part;

        while (getline(file, part)) data.append(part);

        file.close();

        javascripts[i] = data;
    }

    return javascripts;
}

#ifdef _WIN32
int WINAPI WinMain(HINSTANCE hInt, HINSTANCE hPrevInst, LPSTR lpCmdLine, int nCmdShow) {
#else
int main() {
#endif
    webview::webview w(true, nullptr);
    w.set_title("Cubic Crafter");
    w.set_size(1000, 500, WEBVIEW_HINT_NONE);

    w.bind("refresh", [&](const string &) -> string {
        w.set_html(html());

        return "";
    });

    for (string javascript : javascripts()) w.init(javascript);
    w.set_html(html());

    w.run();

    return 0;
}