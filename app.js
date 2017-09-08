//MODULE
var jaySite = angular.module('jaySite',['ngRoute','ngResource','ngCookies','angularLoad']);



jaySite.constant('myConstants',{
  "url": 'http://jayvii.com',
  'site_name': 'JayVii'
});

//ROUTING
jaySite.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'pages/home.html',
   controller:'mainCtrl'
  })
  .when('/home/',{
    templateUrl: 'pages/home.html',
    controller:'mainCtrl'
  })
  .when('/about-me',{
    templateUrl: 'pages/about-me.html',
    //controller : "aboutCtrl"
  })
  .when('/cv',{
    templateUrl: 'pages/terminal.html',
    controller:'devCvCtrl'
  })
  .when('/cv-styled',{
    templateUrl: 'pages/cv.html',
    controller:'homeCtrl'
  })
  .when('/contact',{
    templateUrl: 'pages/contacts.html',
    //controller:'homeController'
  })
  .when('/portfolio',{
    templateUrl: 'pages/portfolio.html',
    controller:'portfolioCtrl'
  })
  .otherwise({redirectTo:'/'});
});

jaySite.controller('mainCtrl',['$scope','myConstants','angularLoad',function($scope,myConstants,angularLoad){
    $scope.site_name = myConstants.site_name;
    angularLoad.loadCSS('public/assets/css/grid.css');
    // angularLoad.loadCSS('public/assets/css/style.css');
    // angularLoad.loadScript('public/assets/js/loader.js');
}]).directive('footerDir',function(){
  return{
    restrict :'AE' ,
    templateUrl : 'directives/footer.html',
    scope :true,
    link: function ($scope, element, attrs) {
      //  console.log('MAIN');

    }
  };
}).directive('analyticsDir',function(){
  return{
    scope :'&',
    link: function ($scope, element, attrs) {
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-73722449-1', 'auto');
        ga('send', 'pageview');

        
        if (window.console) {
        console.log('Hey Sparky what are you looking here ;)');
        setTimeout(function(){
            console.log('Well as you are here.');
        },3500);
        setTimeout(function(){
            console.log('I want to tell you Thank You for visiting my website.');
        },5500);
        setTimeout(function(){
            console.log('I hope you like it ;)');
        },7500);
        setTimeout(function(){
            console.log('Enjoy it ;)');
        },9500);
        setTimeout(function(){
            console.log('And almost forgot: ');
        },11500);
        setTimeout(function(){
            console.log('%cThis website was build on top of AngularJS and ES6 with  ♥ and insomnia. Special thanks goes to Babel, NPM , Bower and for my son who didn\'t left me to sleep ;) | Special thanks also for : Codrops, jqueryscript , codepen and all guys who give to us their open source products ','color: #ffeb3b; background-color: #1e2021; font-size: 20px; padding: 3px;');},13500);
      }
    }
  };
}).directive('mainDir',function(){
  return{
    scope :'&',
    link: function ($scope, element, attrs) {
      // Pretty simple huh?
      var scene = document.getElementById('scene');
      var parallax = new Parallax(scene);

      var words = ['And i am not Art Director',
      'Not even UI/UX designer',
      'I\'m NOT designer',
      'Yeah I\'m NOT DESIGNER',
      'Just joking :) at the moment i just don\'t work as',
      'I am Full Stack Developer',
      'Yes, I do the hard work',
      'Wanna see more about me?!',
      'Well just check the rest of my website pages',
      'Enjoy'],
       current_length = 0,
       current_direction = 1,
       current_word = 0,
       character_delay = 50,
       word_delay = 1000,
       $title = $('rotator');



      function advanced_text() {
        if(current_direction == -1) {
          $title.addClass('highlighted');
          setTimeout(function() {
            $title.removeClass('highlighted');
            current_length = 0;
            current_direction = 1;
            current_word++;
            setTimeout(advanced_text,0);
          },word_delay/2);
          return;
        }
        current_length += current_direction;
        var timeout_delay = 0;
        set_text($title, words[current_word], current_length);
        if(current_length >= words[current_word].length) {
          current_length = words[current_word].length;
          current_direction = -1; //Now we're deleting
          if(current_word >= words.length -1) {
            //stop! we're done
            return;
          }
          //set long timout
          timeout_delay = word_delay;
        }
        timeout_delay = timeout_delay ? timeout_delay : (current_direction > 0 ? character_delay-10+Math.random()*20 : character_delay/4);
        setTimeout(advanced_text, timeout_delay);
      }

      advanced_text();

      function set_text($element, word, length) {
        $element.text(word.substring(0,length));
      }


      //console.log('SSSS');
    }
  }
});



jaySite.controller('homeCtrl',['$scope','myConstants','angularLoad',function($scope,myConstants,angularLoad){
  //angularLoad.unloadCss('public/assets/css/bootstrap.css');
}]);

jaySite.controller('portfolioCtrl',['$scope','myConstants','angularLoad',function($scope,myConstants,angularLoad){
    $scope.site_name = myConstants.site_name;
    angularLoad.loadCSS('public/assets/css/grid.css');
    // angularLoad.loadCSS('public/assets/css/style.css');
    // angularLoad.loadScript('public/assets/js/portfolio/anime.min.js');
}]).directive('portfolioDir',function(){
  return{
    scope :'&',
    link: function ($scope, element, attrs) {
      // console.log('PORTFOLIO');

    }
  }
});
jaySite.controller('devCvCtrl',['$scope','myConstants','angularLoad',function($scope,myConstants,angularLoad){
    $scope.site_name = myConstants.site_name;
    angularLoad.loadCSS('public/assets/css/grid.css');
    // angularLoad.loadCSS('public/assets/css/style.css');
    // angularLoad.loadScript('public/assets/js/loader.js');
}]).directive('terminalDir',function(){
  return{
    scope :'&',
    link: function ($scope, element, attrs) {

      // Typewriter.js
// https://github.com/ronv/Typewriter.js

$.fn.typewriter = function() {
this.each(function() {
  var c = $(this),
    b = c.html(),
    a = 0,
    d = 0;
  c.html("");
  var e = function() {
    if ("<" == b.substring(a, a + 1)) {
      var f = new RegExp(/<span class="instant"/),
        g = new RegExp(/<span class="clear"/);
      if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
      else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
      else
        for (;
          ">" != b.substring(a, a + 1);) a++
    }
    c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
    a >= b.length || setTimeout(e, 70 + 1 *
      Math.random())
  };
  e()
});
return this
};
$(".terminal").typewriter();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
      function Person(name) {
          _classCallCheck(this, Person);

          this._name = name;
      }

      _createClass(Person, [{
          key: 'walk',
          value: function walk() {
              console.log(this._name + ' write code sometimes when walking. :P');
          }
      }, {
          key: 'name',
          get: function get() {
              return this._name;
          },
          set: function set(newName) {
              this._name = newName;
          }
      }]);

      return Person;
  }();

  var Education = function (_Person) {
      _inherits(Education, _Person);

      function Education(name, degree) {
          _classCallCheck(this, Education);

          var _this = _possibleConstructorReturn(this, (Education.__proto__ || Object.getPrototypeOf(Education)).call(this, name));

          _this._degree = degree;
          return _this;
      }

      _createClass(Education, [{
          key: 'writeDegree',
          value: function writeDegree() {
              console.log(this._name + ' is ' + this._degree + '.');
          }
      }, {
          key: 'degree',
          get: function get() {
              return this._degree;
          },
          set: function set(newDegreee) {
              this._degree = newDegreee;
          }
      }]);

      return Education;
  }(Person);

  var Programmer = function (_Person2) {
      _inherits(Programmer, _Person2);

      function Programmer(name, programmingLanguage) {
          _classCallCheck(this, Programmer);

          var _this2 = _possibleConstructorReturn(this, (Programmer.__proto__ || Object.getPrototypeOf(Programmer)).call(this, name));

          _this2._programmingLanguage = programmingLanguage;
          return _this2;
      }

      _createClass(Programmer, [{
          key: 'writeCode',
          value: function writeCode() {
              console.log(this._name + ' is coding in ' + this._programmingLanguage + '.');
          }
      }, {
          key: 'programmingLanguage',
          get: function get() {
              return this._programmingLanguage;
          },
          set: function set(newprogrammingLanguage) {
              this._programmingLanguage = newprogrammingLanguage;
          }
      }]);

      return Programmer;
  }(Person);

  var me = new Person('Jay');

  var jay = new Programmer('Jay', 'JavaScript | Node JS and PHP');
  var jayDegree = new Education('Jay', 'Graduate Software Engineer');
  jay.walk();
  jay.writeCode();
  jayDegree.writeDegree();
  console.log('See It\'s WORKED ;)');
    }
  };
});



jaySite.directive('headerDirective',function(){
  return{
    restrict :'AE' ,
    templateUrl : 'directives/header.html',
    scope :true,
    link: function ($scope, element, attrs) {
         $scope.name = 'KKKK';
      }
  }
});
jaySite.directive('logoDirective',function(){
  return{
    restrict :'AE' ,
    templateUrl : 'directives/logo.html',
    scope :true,
    link: function ($scope, element, attrs) {
         $scope.name = 'KKKK';
      }
  }
});

jaySite.directive('scriptDirective',function(){
  return{
    restrict :'AE' ,
    templateUrl : 'directives/scripts.html',
    scope :'&',
    link: function ($scope, element, attrs) {
         $scope.name = 'KKKK';
      }
  }
});
