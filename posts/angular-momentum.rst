.. title: Angular Momentum
.. slug: angular-momentum
.. date: 2015-01-26 16:44:11 UTC
.. tags: javascript angular django
.. link: 
.. description: Getting angular working in django
.. type: text

On Friday I got to the point that the angular seed app is now checked
into my 80days repository.

Today's mission is to start turning that into the app I really want.

One of the first things I want to do is fix up angular so that it uses
different markers for its template substitution.

`Django`_ uses '{{' and '}}' to mark blocks that the template engine
needs to pay attention to and do substitutions.  Actually, the `django
template languate` has two escape patterns:

* {{ and }} are used to mark variables to be expanded

* {% and %} are used to mark django template tags.  These get used for
  things like marking *for* loops and the like

Now by an unhappy coincidence, `angular.js`_ also uses {{ and }} to
mark stuff for expansion.

Happily, angular allows you to over-ride these markers, as follows:

.. code-block:: javascript

   var my_app = angular.module('MyApp').config(function($interpolateProvider) {
       $interpolateProvider.startSymbol('{$');
       $interpolateProvider.endSymbol('$}');
   });

In fact, since I already had some code in my *app.js* I just added the
extra config code, so my *app.js* now looks like this:

.. code-block:: javascript

  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]).

  config(function($interpolateProvider) {
      $interpolateProvider.startSymbol('{$');
      $interpolateProvider.endSymbol('$}');
  });

Thanks
======

Thanks to @ergoemacs on twitter who posted a link to their excellent
mini tutorial on `magit-mode`_: git mode for emacs.  I had this
installed already, but never quite plucked up the courage to try it.
Wow: git in emacs: lovely jubbly!

And finally, thanks to Snowy, who helped with the coding:

.. image:: ../galleries/Snowy/coding.jpg
    :height: 400
    :width: 300


.. _django template languate: https://docs.djangoproject.com/en/1.7/topics/templates/

.. include:: posts/references.rst
