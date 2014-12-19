.. title: Nginx on koding.com
.. slug: nginx-on-kodingcom
.. date: 2014-12-18 19:58:05 UTC
.. tags: 
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

So looking at what the wonderful `cookiecutter django`_ created I see
the following incantation in *config/production.py*:

.. code-block:: python

   from configurations import values

   # SECRET KEY
   SECRET_KEY = values.SecretValue()
   # END SECRET KEY

So what is this *configuration.values* thing?   Turns out it is coming
from the `django configurations`_ application that the `cookiecutter`_
was kind enough to include.

OK, so it helps you not have to do

.. code-block:: python

   from foo import *

Now, that has to be a good thing :)

So reading the docs I come to::

     django-configurations allows you to optionally reduce the amount
     of validation and setup code in your settings.py by using Value
     classes. They have the ability to handle values from the process
     environment of your software (os.environ) and work well in
     projects that follow the Twelve-Factor methodology.

I will leave this `twelve factor`_ thing for another day, but a quick
glance suggests there are some good guidelines there.

So, digging into the docs for django configurations (which, by the way
are quite excellent).  I come to `this little gem`_.  In short, this
magic *values.SecretValue()* is there to discourage me from actually
putting my secret key in the config file.

This is good, because I am pretty sure I have committed this sin in
pretty much every django project I have done up to now.  Thank you
`cookiecutter`_ :)

Having said that, I feel this another case where good intentions are
likely to result in bad security, for more see my `rant about computer
(in)security`_

With a tight deadline, how many developers would just slap a value in
the config file *just to get things working* and be done with it?

Now what was I doing?
---------------------

OK, back to getting my site up and running.

So armed with this new information I am back to trying to run
gunicorn.

Lots of errors from the production config, so I comment out a couple
of sections.  At this point I am not planning on using Amazon's AWS,
so that can all be commented out.

Also, I am sure I will need this *sendgrid* thing just yet, so that is
getting commented out too.

Nearly there (I think), but gunicorn is still failing due *s3boto.py*
being unable to import *StringIO*.  Now this looks like a python3
problem, since in python 3, StringIO got moved to io.StringIO :(

OK, so boto is an interface to AWS. I am not using that, so this one
is easy to fix.

And finally, *gunicorn* is running.

Chrome is doing something weird, it is switching to https and then
hanging with a mysterious *establishing secure connection* message.
However, firefox and even chrome from another machine are just fine.

So that's all for today, will finish this off tomorrow.


.. include:: posts/references.rst

.. _nginx and gunicorn: http://agiliq.com/blog/2013/08/minimal-nginx-and-gunicorn-configuration-for-djang/

.. _this little gem: http://django-configurations.readthedocs.org/en/latest/values/

.. _rant about computer (in)security:  ../posts/rant-about-computer-insecurity.html
