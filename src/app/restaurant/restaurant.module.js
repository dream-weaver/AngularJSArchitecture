﻿'use strict';

define(['angular'], function (ng) {

    //all angular common vendors module
    var angularModule = [       
        , 'ui.router'
        , 'oc.lazyLoad'        
    ];

    var module = ng.module(APP_MODULES.RES.name, angularModule);

    return module;
});