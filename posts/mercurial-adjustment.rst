.. title: Mercurial Adjustment
.. slug: mercurial-adjustment
.. date: 2015-02-10 19:47:43 UTC
.. tags: draft
.. link: 
.. description: 
.. type: text

So careful observers will note the project is running a little late.

The aim was to launch the site on February 1st.  I am not quite ready
to go live yet.   I want a few more features implemented first.  

I am also aware that there is a lot still to do.  But it was always
the plan to build features through the 80 day running of the
competition.

This project has been a very interesting experience for me.  At the
start, I had a task that I knew I could get done in a few days.  With
stuff I had used in the past.  But, I wanted to learn some knew
stuff.  `angular.js`_ was one thing.  

I really like python and have enjoyed working with `django`_ over the
years.  It has been a struggle at times.  I've always loved what the
project is doing, it has been a constantly evolving project.  Often,
knew releases would break old sites.  This was actually a good thing,
a bit of reading and you could find the solution.  And if you
implemented it, your code was generally better.  

I have loved `django migrations`_.  I like to develop sites as they
are being run.  Now one tricky bit is knowing when you can (or should)
let others loose on the site.  They might put work into it that would
be lost by changes you want to make.  

This is where these migrations come in very handy.  Over the course of
what I have been doing I have been running::

  python 80days/manage.py makemigrations

and/or::

  python 80days/manage.py migrate

more or less at random (as I got to know what the errors really mean,
so less random as time went on.  And what has been cool is that pretty
much every time they have lead me through the process and done exactly
what I wanted with pretty minimal fuss.   

Murphy's law dictates that I will now encounter a nightmare with
migrations, at some, inconvenient point.  The good news is I have good
confidence in these migrations.  In particular, I love the way you get
the code for the migration.  So, if I am doing something scary, or if
it all breaks, then I can take a look at it.

Angular
-------

This has been a rocky ride at times.  On the face of it, it is doing
something elegant and simple.   But it is doing what it does inside
the DOM model as implemented by various browsers.  These browsers are
trying to be helpful.  So I spent an afternoon wrestling with `angular
directives for table rows`_.  I just wanted to write a partial piece
of html for each row.  Now it seems this is really tricky to do in
angular because of the way browsers try to be helpful with broken
table code.  

Overall, I am happy with where things are.  There are a lot of areas
I would like to learn more about.  I need to spend an afternoon with
the node/angular testing setup.  I really do need to start writing
those tests. 

In short, there are a lot of things I know can be done better, but
most are good enough for now and I can work on the pain points as they
become more aparent,

Summary
-------

The good news is that after all the research and experimenting I have
found a lot of the gotchas.  In short, I have the tools and have
figured enough about how they work that I should be quite productive
from here on in.

Was cookiecutter a good idea?  Very much so.  It introduced me to lots
of things that I would not of explored at this point otherwise.  Some
bits I have pretty much forgotten about, but I think most of the stuff
I have explored is mentioned in this blog somewhere, or in `github`_.
So, if nothing else, it is there if I need to refer to it.

And finally..
-------------

So the mercurial adjustment works like this.  Every software project
runs late.  They run late for lots of reasons.  Most of them good.

Now the `planet mercury`_ orbits the sun in just under 88 days.  But
here on planet earth, in that time the earth moves, so that it is
actually nearly 116 days before the earth, mercury and sun are in a
similar alignment.  This probably needs to be done in a `jupyter
notebook`_, so for now, the deal is that depending on your frame of
reference and definition of a day, 80 days could arguably be deemed to
be a shade over 105 days as most of us here on earth know them.

So next time your n day software project is running late, come into
work dressed as Mercury ;)



.. include:: posts/references.rst

.. _angular directives for table rows: https://github.com/angular/angular.js/issues/1459

.. _planet mercury: http://en.wikipedia.org/wiki/Mercury_%28planet%29
