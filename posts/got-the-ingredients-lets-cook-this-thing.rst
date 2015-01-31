.. title: Got the ingredients, lets cook this thing
.. slug: got-the-ingredients-lets-cook-this-thing
.. date: 2015-01-30 15:50:12 UTC
.. tags: 
.. link: 
.. description: Why a 3 day project takes 80 days
.. type: text

This post is likely going to be a bit of a mixture.  It started out as
an account of what I am doing today, but I think it might turn into an
account of why a 3 day project can take 80 days and why that isn't
always a bad thing.

So I have had this goal for 80 days to create a website.  Now this
hasn't been my only goal in this period.  Actually, I have had a lot
of other stuff going on.  Oh, and there was Christmas and New Year and
of course the annual flu/cold/sore throat fun to deal with.  Also,
this is supposed to be a fun project and I have other fun things I
have been doing at the same time.

I have also been using it to learn some new stuff.  Now this is always
a dilemma with IT: learn to do things the *proper* way, learn about
the latest tools or just use what you already know?

I could have built this thing with pure django and simple html
templates in 2-3 days I am sure.  Well not quite that because I need
all these things too:

* authentication, user registration, preferably supporting third party
  openID management.  That is where `django-allauth`_ comes in.
* database migrations
* deployment to cloud.  I think I will use `koding.com`_
* code generation.  I wrote some simple code generators. I should be
  able to include these in a `cookiecutter`_ so my next project will
  be much quicker
* I am learning `angular.js`_.  I already see the promise in this and
  it should strengthen my javascript skills which will help with the
  next phases of the project.

So I have the ingredients together.  I think I know most of the
problems I will have, just have to put this thing together.

First thing: `angular dates are in milliseconds`.

Now with this knowledge I have the angular showing today's date,
80 days from now and 80 days ago.

Next stop is to get a form to register a team.  There is quite a bit
to learn here.  I will need to figure out how angular calls REST api's
and of course deal with the form stuff too.  

OK, so thanks to `codeschool`_ I now have a good idea of how most of
this angular stuff hangs together.

The next task is to see if I can get data from the django rest
services.  Before I do that I think it is time to re-organise the code
so that it can all be served by the django server.  I suspect this
might get tricky.

Tomorrow I should be in town in the morning, so I decided this would
be a good time to see if I can get this thing running on Gonzalo,
otherwise known as the `laptop without an escape key`.  This thing
also has a battery with a life of about 5 minutes.  But I like it in a
weird sort of way.  It needs more memory too, but that should be an
easy fix.  I think it might turn into that broom with 20 new heads and
five new handles.  

Will be a good test of whether I can run everything on another machine
without too much pain.  With the screensaver doing the, "all work and
no play", I think it is time to take a break.

.. _angular dates in milliseconds: https://github.com/swfiua/80days/commit/8fcad7e1e31c37da38e2f80c27fe67ab7b4474ce

.. include:: posts/references.rst
