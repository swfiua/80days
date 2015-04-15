.. title: PyCon 2015
.. slug: pycon-2015
.. date: 2015-04-14 13:31:56 UTC
.. tags: python montreal
.. category: 
.. link: 
.. description: Another wonderful PyCon
.. type: text

I am writing this as I fly back to Bermuda from another wonderful
PyCon.  This year it was again in Montreal, the same venue as last
year.  The next two years it will be in Portland, Oregon.

This is just one of the wonders of PyCon, the opportunity to visit
vibrant cities with large tech communities.

The conference was bigger than ever, 3000 attendees.  My first PyCon
was a mere 400 or so attendees.  Happily, as the conference has grown
in size, it has retained the spirit that makes it a fantastic
experience for old and new pythonistas.  If anything, it is more
welcoming and inclusive as the years pass.  The community actively
seeks to be inclusive and there were a number of talks and events
along this theme.

The community spirit is absolutely fundamental to the success of
python.  It is one of the main reasons to consider the language.  When
you are working with python there is a huge community of enthusiastic
and dedicated people who are only too happy to share their work and
help others.

Below are some of the personal highlights from the conference, but
there really is so much going on that what you will read here is just
a snapshot of the magic that is PyCon and the python community.

It is also in no particular order.

Satellite data for everyone
---------------------------

Chris Waigl gave an excellent talk on satellite imagery, the freely
available data, how to work with it and the python tools that enable
that work.

Seeing what others are able to do with data like this inevitably
inspires new ideas.  

I am planning to take a look at what imagery is available for Bermuda
over the period of the hurricanes Fay and Gonzalo that hit the island
separated only by six days.

There will definitely be good before and after imagery, with luck
there will also be some usable images from the six day period between
the storms.


The usual suspects
------------------

The python community has some speakers that are very skilled at
presenting complex ideas in an entertaining and informative way.
They are always worth looking out for.  If you are new at PyCon, ask
others what talks they are going to, it will help you be in the right
room for you.  

Oh, and don't panic, pretty much all talks are recorded and available
online (youtube seems to have replaced PyVideo here).

This year, for me, it was the three B's: Beazely, Bernhart and
Batchelder.

David Beazely live coding
"""""""""""""""""""""""""

I always enjoy listening to David Beazely.  This year he spoke on
python concurrency with live coding.  I am guessing there were at
least 1000 people present.  For added kicks and giggles he chose
python 3.5.0a3 (I think).  The key bit was the 'a', he was doing a
live demo with an alpha version of python: what could possibly go
wrong?  He demonstrated the way the Global Interpreter Lock (GIL)
impacts performance of threaded code.   

One line that grabbed my attention was that the GIL does not behave
like an operating system.  The GIL is all about making sure threads
don't trample on each other by mangling shared data.  In short, within
python only one thread can run at a time.  

Ned Batchelder names and values
"""""""""""""""""""""""""""""""

Ned Batchelder spoke on python names and values, a wonderfully clear
exposition on how python stores values.  I recommend this talk to
anyone new to python, it will likely save you a few hours of chasing
mysterious bugs.

Gary Bernhardt
--------------

Gary Bernhardt followed up his *Rise and fall of javascript* from last
year with a closing keynote motivated by Donald Rumsfeld's
*known-unknowns* speech.  He talked about beliefs programmers have,
that really have an underlying belief driving them.  Discovering that
underlying belief is the key to being able to discuss these ideas with
others that have differing views.  He gave an example along these
lines.

::

   Python needs tests because it does not have static typing

::

   I don't need tests because I have types

Gary pointed out that these two statements cannot both be true, unless
tests are somehow the same as types and eloquently exposed the
underlying beliefs behind these statements.


Not all Python
--------------

PyCon is by no means all python.  

There were talks on *Advanced Git*, ethics, inclusivity, freedom, the
brokenness of TLS (https).

Not all talks
-------------

The Expo Hall where conference sponsors had their booths also served
as the breakfast and lunch place.  As per last year, I found the Expo
Hall a valuable place to spend time.

The vast majority of sponsors booths are run by techies, not
marketting droids and they are great place to find others with similar
interests.

Meal times give an opportunity to sit at a random table and meet
others and share ideas.

MAGIC
-----

I have been interested in the MAGIC center at Rochester Institute of
Technology since hearing Remy DeCausemaker speak about it last year.

MAGIC allows students to take a minor in Open Source.

Lightning talks
---------------

Lightning talks are always fun, often at the end of the day.  Speakers
have precisely 5 minutes to talk.  If you want to give a talk, just
sign up on the board.  These are usually over-subscribed.  

Poster Sessions
---------------

Sunday morning the expo hall switched into a combined jobs fair and
poster sessions.   The poster sessions were small booths where people
created posters relating to projects and ideas they are working on.

You can then wander around and talk to people working on ideas you are
also interested in.  These complement the talks in that it gives a
chance for more detailed discussion with the people running the
projects. 

Live captioning
---------------

Most of the talks had live captioning.  This captioning was remarkably
good with essentially real time display.  It even coped well with
speakers that added a bit of French.

Keynotes
--------

Jacob Kaplan-Moss's `keynote`_ reflected the focus on inclusivity in the
python community.  He talked about how programmers are all perceived
either to *rock* or *suck*.  In short we are led to believe that the
distribution of programming abilities is essentially an upside down
bell-curve.   

Jacob pointed out the absurdity of this perception and also its very
damaging consequences.  The reality is that programming ability, like
most attributes, should follow a normal distribution, hence the vast
majority of programmers are just average or as Jacob described
himself, *I am a mediocre programmer*.

The python community is full of people who use python in order to get
other stuff done in a very wide range of activities.  It is widely
used in science, finance, education and a plethora of other areas.

As such, you will often hear pythonistas say, "I am not a real
programmer".   I would include myself in this bracket, despite having
spent my entire working career building software of one sort or
another.  But that software has always been a means to an end.  

I believe my reality is closer to being *good enough* at quite a lot
of things and having the capacity to become *good enough* at anything
I am passionate enough about to pursue.

But to get there you have to deal with the *little hater*.  The voice
that eats away at you saying, "You suck at this".   Many software
communities will confirm this belief for you.  The python community is
trying to be different.  

By insisting that all programmers *rock* we are excluding the vast
majority of programmers from that activity.  This causes angst for
those already pursuing at the activity and dramatically increases the
barrier to entry.  The result is a smaller, less diverse, less
interesting and less effective community.

Thanks Jacob for a truly inspiring talk.  Thanks also to the python
community for recognising and trying to address this issue.

Sprinting
---------

My flight home was not until Monday evening, so I was able to attend
the first day of code sprints.

Once the conference closed on Sunday afternoon, sprint leaders were
given a couple of minutes to talk about what they would be working
on. 

There was then an introductory session organised, primarily aimed at
people new to sprinting, but also of great benefit to more experienced
sprinters.

There were people giving introductions to git, virtualenv, virtualbox,
testing in python, http and more.  Each introduction was repeated 3
times in 15 minute sessions.  Hence, everyone could listed to three
subjects of there choice.

I found this a useful session to fill in some gaps in my knowledge and
also to get to know some of the other sprinters.

PyCon videos
------------

If this blog post has sparked your interest in PyCon I would encourage
you to watch some videos from the talks.  Just go to youtube and
search for PyCon 2015.  See the `schedule`_ if you want to see the
full list of talks.

The state of the python
-----------------------

One of the reasons I like to attend PyCon is that you get a very good
feel for where the language and community is currently placed, what
projects are being widely used, what projects are up and coming and
generally where the community is heading.

I have watched PyCon grow and be delighted that it has not lost the
excitement and sheer inspiration it always generates.

The community is stronger than ever and making great efforts to be
more inclusive and accessible.   

Python 3.x
""""""""""

Guido in his keynote spoke again about the challenges of moving to
Python 3.  Whilst there are still large numbers of projects that have
not been ported (Guido quoted only 5,000 out of 55,000 on PyPi),
things are actually way better than that.

All of the top 1000 most used projects have been ported.  The reality
is that if you are starting a new project, python 3.x is a great
choice.  You will be using projects that are in active development.

If you are maintaining a large body of python 2.x code then that is
where things become more challenging.  It only takes one critical
package that is not ported and you are stuck.  Indeed, this is why
the process of moving to python 3.x has taken so long, a project
cannot be ported until all its dependencies are also ported.

My takeaway from this PyCon was that more than ever people are using
and enjoying python 3.x.  I think we are moving to a time when
new packages will be available under python 3.x and not under python
2.x and this will provide incentive to switch.

Micro Bit
"""""""""

The UK, in a project driven by the BBC is planning to give 1 million
school children a `Micro Bit`_ computer.  These are small raspberry pi
like devices.  Python will be used as one of the languages to use on
the device.

More generally, python is widely used in education.  The Python
Software Foundation deserves a lot of credit for this, there has been
a huge amount of work over many years promoting the language in
education and it is reaping rewards.


Summary
-------

Another wonderful conference that has, as always, generated a lot of
exciting ideas for me to pursue.

.. _Jacob_Kaplan_Moss: https://www.youtube.com/watch?v=hIJdFxYlEKE

.. _keynote: Jacob_Kaplan_Moss_

.. _MAGIC: http://magic.rit.edu

.. _schedule: https://us.pycon.org/2015/schedule/

.. _Micro Bit: http://www.bbc.co.uk/mediacentre/mediapacks/makeitdigital/micro-bit

.. _type hints: https://www.youtube.com/watch?v=2wDvzy6Hgxg
