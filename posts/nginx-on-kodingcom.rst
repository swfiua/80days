.. title: Nginx on koding.com
.. slug: nginx-on-kodingcom
.. date: 2014-12-18 15:58:05 UTC
.. tags: draft
.. link: 
.. description: Deploying django apps with nginx on koding.com
.. type: text

It is more than time that I get the project up and running on a host
somewhere.

I could just check the code out on `koding.com`_ and run the project
with django's build in server, but I feel I should run it under
*nginx*.

I could have chosen *apache*, but I keep hearing people mention
*nginx* so I want to see what it is all about.

Gooling *nginx django koding* threw up a guide to deploying django
with `nginx and gunicorn`_, so let's try that.

So all went well until I got to the bit about running the application
with *gunicorn*.

My project layout is a little different to the one in the guide.  In
particular, the `cookiecutter`_ I used to create the project lays out
the *django config* stuff a bit differently.

So, I did the following::

   export DJANGO_SETTINGS_MODULE="80days.config.production"
   gunicorn 80days.wsgi:application

This got me as far as being told::

  ValueError: Couldn't setup configuration '80days.config.production.Production':  
  Secret value 'SECRET_KEY' is not set

Time to disappear down the SECRET_KEY rabbit hole.

So a little googling tells me a little about the secret key, but no
advice on how to go about keeping it secret.  


.. include:: posts/references.rst

.. _nginx and gunicorn: http://agiliq.com/blog/2013/08/minimal-nginx-and-gunicorn-configuration-for-djang/
