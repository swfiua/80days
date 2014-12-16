.. title: Progress report on 80days
.. slug: progress-report-on-80days
.. date: 2014-12-16 14:08:31 UTC
.. tags: 80days
.. link: 
.. description: Update on where the 80 days project is
.. type: text

I am now 33 days into the project and anyone reading this blog ought
to be wondering how it is actually going.

One thing I am enjoying about this project is there is no project
manager.  Well I guess, technically, that is my job.

I have been writing code long enough to see more than my share of
magic bullets that will make everything go smoothly.  Sometimes these
were formal approaches to coding and project management.  Other times
the bullets are coming from the open source community: ways of working
that people have developed for themselves.

In general, the open source stuff speaks for itself.  Nobody is
mandating that the projects work the way they do (actually, in most
cases the BDFL is probably mandating the standards).  But the point is
that the standards are being driven by those that know the job best.

Around the time Extreme Programming became popular I encountered the
following::

   Time, resources, scope and quality:  pick any three

Fix three of these and then you have to let those doing the work tell
you what the fourth will likely be.  I find this to be a very useful
tool.  Letting others set all four is a recipe for failure.

In the 80 days project I am fortunate.  Time is set to 80 days, but I
pretty much have control over the other three.

Actually, that is not quite true.  As far as *scope* is concerned I
will need to deliver something by February 1st and actually need
somewhere people can register for the competition by January 1st (give
or take a few days).  But overall, the scope will be whatever gets
done in the time available.

Resources are to some extent under my control.  Right now there is
only me working on the project.  Actually, that is not really true.
There is a whole army of open source heroes working on this project,
they just don't know they are working on it.

So far I really have not written much code.  However, I do have a site
that has a pretty landing page, and about page and you can register
either by setting up *yet another user id and password* or by using
your google ID and open auth.

I didn't have to write any code bar a tiny bit of html and a fair bit
of configuration of django.  Mostly it has just been a matter of
finding packages, reading how they work, follow the instructions.

To some extent, this whole project is turning into an exercise in how
little code I actually have to write.  Code re-use is working well for
now. 


Hosting
-------

The site is not available in the big bad world as yet, mostly due to
the fact I have not decided where to host it as yet.

Since I had a good experience with `koding.com`_ during the recent
hackathon, that is probably what I will end up using.  The good news
is that I know all the stuff I am using will only take about 30
minutes to get up and running on that platform.  

What is left to do
------------------

Pretty much all the details of the site, but this is most of the fun
stuff.

I am planning to create a couple of new django apps.  *django teams*
will be a simple app to manage teams.  A team is just a set of
competitors, but will have some other attributes such as team size.

I might include *competitions* in this app, since teams will be busy
entering competitions.

Another app I am thinking about is *django routes*.   This is a key
part of the 80 days project: we need a route that we are going to take
around the world.  A route is really just an ordered set of places.

However, the same app ought to be useful for the *around Bermuda Bus
in 80 days* idea I keep thinking about.  Buses follow routes.

There is the `django quiz`_ project that I am hoping to use to add
quizzes to the competition.  The idea is that each time a team arrives
in a city along the route there will be a little quiz.  Get the
questions right and you will get some free miles en route to the next
city. 

I am betting there is already something out there to help with *django
routes*, perhaps I can make use of something written to work with the
transport data format `GTFS`_.

All in all, I think the project is on target.

.. include:: posts/references.rst

