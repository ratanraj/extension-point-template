extensions = {
    configWebExtension: {
        template: "templates/config.html",
        allowJavascript: false,
        endpoint: "http://localhost:8080/config"
    }/*,
    someOtherExtension: {
        template: "path_to_html_template.html"
        allowJavascript: false, // Setting this to true will allow the response to contain arbitrary JS
        endpoint: "Post request will be sent here to get data to render the template"
    }
    */
}