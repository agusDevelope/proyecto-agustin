app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./inicio.html"
        })
        .when("/lugares", {
            templateUrl: "./lugares.html"
        })
        .when("/quienes", {
            templateUrl: "./quienes.html"
        }) 
        .when("/quienes", {
            templateUrl: "./quienes.html"
        })
        .when("/contacto", {
            templateUrl: "./contacto.html"
        });

});