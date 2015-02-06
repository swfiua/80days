.. title: Angular velocity
.. slug: angular-velocity
.. date: 2015-02-06 14:36:22 UTC
.. tags: angular javascript django 80days
.. category: 
.. link: 
.. description: 80day coding adventure angular django python
.. type: text

So it has been a while since I blogged about the 80 day project.

This is largely due to most of my free time has been spent working on
the code.  

Just to recap, 77 days into the project I still had quite a bit to
do.  Most of the work up to that point had been on getting pieces
together, decide what tools to use, learning those tools.

The next job was to move the angular code around a bit and try and get
django serving it all.  In particular, I had decided it was probably
worthwhile to have the `angular.js`_ partial html pieces go through
the `django`_ template engine.

Getting npm up and running, with a recent enough version can be
tricky, but there was an excellent guide on `Installing npm on Ubuntu`_

With moving all the files around, **.bowerrc** needed editing a few
times to point it at where the bower_components were now made to be
installed. 

Ever since the :doc:`global-hackathon-team-bermuda` I have had mild
paranoia that cross-site-request-forgery is going to bite me at some
point.  I am hoping that by serving everything under django I will
avoid that nightmare.  In the meanwhile, I did at this `csrf fix`_

A previous post, :doc:`nginx-on-kodingcom` came in useful for setting
up postgres on koding.com as I decided it was more than time to get
this thing running on a cloud based machine.

I have not found myself using *django-angular*, but the `django
angular integration`_ docs have been an enormous help in highlighting
issues in integrating django and angular.

In amongst all this I decided it was time to add `django quiz`_ to
the mix. 

This was mostly painless, following the django-quiz docs, but when I
fired up the server it failed.  The problem was down to me using
`django-allauth`_ which effectively removes *auth.User*. The fix is to
use *settings.AUTH_USER_MODEL* if you want to reference the *User*
model in your own models.

I made the `user model fix`_ and made a pull request.  Happily, the
project maintainer actioned the request within the hour (many thanks
Tom!) and I was able to update to the new version with::


  pip install git+https://github.com/tomwalker/django_quiz.git

By February 1st I was starting to get comfortable with angular and the
pieces were coming together.  I have some simple partials, I have
angular calling the django rest API and I have the beginnings of some
views. 

The next task is to display competitions a user can enter and provide
an enter button.   At this point I did a bit more thinking and
reading.  Deciding what logic to put in angular and what to put in
django views and api calls needs a little thought. 

From here the plan is:

* get the competion list and competion entry features working
* get team creation and team membership features implemented
* get the site up and running in the cloud 

I have a simple test server on koding.com, but want to run the actual
site on a different instance.  

.. _three way data binding: http://django-angular.readthedocs.org/en/latest/three-way-data-binding.html


.. _merge here: https://github.com/tomwalker/django_quiz/commit/2f2544bfd02566058a3f71a5021b7c5f9adfe409

.. _Installing npm on Ubuntu: https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager#debian-and-ubuntu-based-linux-distributions

.. _csrf fix: https://github.com/swfiua/80days/commit/678ae25e432b8633230bf67f8168a8f8188717b1

.. _django angular integration: http://django-angular.readthedocs.org/en/latest/integration.html

.. _django-angular: http://django-angular.readthedocs.org/

.. _user model fix: https://github.com/tomwalker/django_quiz/commit/9416c05cd447e3aa40a2351684f2105dafa95e13

.. include:: posts/references.rst
