.. title: Global Hackathon, Team Bermuda
.. slug: global-hackathon-team-bermuda
.. date: 2014-12-13 22:37:29 UTC
.. tags: hackathon
.. link: 
.. description: 
.. type: text

Last weekend I took part in the `global hackathon`_ run by
`koding.com`_ as part of Team Bermuda aka *Three* `ace-boys`_ *and an*
`ace-girl`_.

The other members of the team were:

* Nick Hoskins, the one who told us all about it
* Beckett Simmons, residing `koding.com`_ expert
* Veronica Windus, working remotely from the frozen wastes of Canada

The idea was to create a web based application in 48 hours.  There
were five themes to choose from, we chose::

  No one reads the fine print (ie TOS, EULA, legal documents) anymore
  yet every site has them. Devise a creative/interactive solution.

So, before we could start we needed a name.

Since the average EULA is about as easy to read as the classic, James
Joyce' `Ulysees`_ we took the liberty of borrowing the name, and then
abusing it and came up with, *Eulasees*.

There is a tenuous link with Bermuda in that many songs of `Thomas
Moore`_ who lived in Bermuda for a while, are cited in the works of
James Joyce.

So, back to the hackathon.  This nominally started at 4am Bermuda time
on Saturday 6th December.  Team Bermuda hence decided to start work at
10am, gathering at the Watford Sports Club.

In fact, things got off to a slow start due to several factors:

* lack of coffee.
 
  Actually, there was coffee, but we only had a tiny bodum to make it
  in.  

* A fellow `Blade`_ turned up at the sports club.  

  These days, blades are rare as hen's teeth, so progress came to a
  complete standstill whilst yours truly reminisced about the good old
  days when the Mighty Blades were in the heady heights of the first
  division (technically, they are still in the first division, it is
  just that now first really means third, English footy uses a weird
  number system).

* At least one of us working on a laptop that was missing lots of the
  standard development packages.

* Flaky wifi.

* No real idea what we were going to do.

This was very much a *make it up as you go along* event.   We talked
about a few ideas, delegated lots of stuff to our ace-girl, who was
presumably still digging out from under a snow storm.

The rough plan was a to create a restful API with `django`_ and build
an `angular.js`_ front end.

The idea was to load EULA's into the system, allow users to highlight
areas of text and apply *tags* to these areas.

These *tags* would have a short name indicating what the contract
clause really meant and a longer text body explaining what it was all
about really.

Once we had this and some data in the system the plan was to create
some views allowing users to see which EULA's had which clauses and
other such fun stuff.  One idea was to add a quiz, getting people to
guess whose EULA had which clause, possibly using `django quiz`.

For most of Saturday we pretty much ignored the `koding.com`_ virtual
machine, we were having enough other problems.

Actually, the *angular* stuff was going quite well.  

The django side was going a bit slower.  We were using `cookiecutter`_
to create all the base files for our django apps and project.  This
works really well, but does come with a lot of extra goodness that we
probably did not need at this point.  

*pip install* kept failing on obscure compile errors due to missing
*-dev* packages.  I love pip, but with a big requirements list and a
dodgy wifi connection the downloads were taking way too long and I
couldn't get it to cache things reliably.  More on this later.

Having said that, being able to do::

   python setup.py register

Followed by::

   python setup.py publish

To make the django app available on PyPi (and hence *pip install*
magic just works), was very cool.

Things went well on the Saturday.   Mid-evening we stopped for food
and more coffee (by now Nick had brought a decent sized bodum down
from his house, so the coffee shortage was averted).

We decided to work until we were too tired, then get some sleep ready
to code until 4am on Monday morning.

It is all a bit of a blur now, but at some point we decided we should
see if any of our stuff actually works on `koding.com`_.

I am sure the koding.com IDE is a joy to use, but now was not the time
to learn it.  Fortunately, Beckett had given us the number one pro-tip
for using koding.com:

   Getting ssh to koding working is well worth the effort

Further, it didn't involve anything more than adding an ssh key to the
*~/.ssh/.authorized_keys* file.

Suddenly *pip install* was flying along.  Clearly, we should have been
doing everything on the koding machine.

Having noted how well the koding VM was working, of course, we
continued to work locally.

We were, in fact, so effective at this that it was midnight on Sunday
before we decided it would be a good idea if the angular front end
could talk to the django rest API.

No prizes for guessing the answer to this: hell no.

Angular was either failing completely to connect to the django API
giving obscure messages about `cross-site request forgery`_

At this point we probably should have left the angular front end as an
example of where we were heading and just fed it some toy data.  

Instead we learnt way more about csrf's than we ever wanted to know,
in between cursing django for its attentiveness to security.

After much thrashing around `django cors`_ came to the rescue.  By
now, however, it was past 3am and Nick was having to use a new
function to make the restful API calls.

We got the two pieces talking, but ran out of time to fix up enough of
the angular code to get a viable front end.

The project code is on github, as `eulasees`_, with the the `django
eulasees`_ app in a separate repository.

You can also view the docs for the `eulasees API`_ that was created.
These are created with the amazing `django rest swagger`_ and allow
you to try out the API.

We did manage to load some data into the system, with the django admin
system coming to the rescue as the user interface of last resort.

We should probably apologise to google, since their `terms of
service`_ was the toy example we decided to use.  You can actually get
all the data that we entered with this `one API call`_.  So, if there
are any google lawyers reading: we love you really, we know you are
not *evil*.  Just one question: what is with the paragraphs IN ALL
CAPS?  ARE WE BACK IN THE 90's ON A SHOUTY FORUM?  

Remarkably, we got an email yesterday informing us we made it through
to the next round of the competition.  We can only assume that pretty
much everyone that got any sort of site up got through the first
round.  You can even `VOTE FOR US`_ :)



.. _global hackathon: ../posts/worlds-first-global-hackathon.html

.. _koding.com: https//koding.com
.. _hackathon: https://koding.com/Hackathon

.. _Ulysees: http://en.wikipedia.org/wiki/Ulysses_%28novel%29
.. _Thomas Moore: http://en.wikipedia.org/wiki/Thomas_Moore

.. _Blade: http://en.wikipedia.org/wiki/Sheffield_United_F.C.

.. _django: https://www.djangoproject.com/

.. _angular.js: https://angularjs.org/

.. _django rest framework: http://www.django-rest-framework.org/

.. _django rest swagger: https://github.com/marcgibbons/django-rest-swagger

.. _django quiz: https://github.com/tomwalker/django_quiz/

.. _cookiecutter: https://cookiecutter.readthedocs.org/en/latest/

.. _PyPi: https://pypi.python.org/pypi

.. _ace-girl: http://www.urbandictionary.com/define.php?term=Acegirl

.. _ace-boys: http://www.urbandictionary.com/define.php?term=aceboy

.. _cross-site request forgery: http://en.wikipedia.org/wiki/Cross-site_request_forgery

.. _django cors: https://github.com/ottoyiu/django-cors-headers

.. _eulasees: https://github.com/swfiua/eulasees

.. _django eulasees: https://github.com/swfiua/django_eulasees

.. _eulasees API: http://swfiua.koding.io:8000/docs/

.. _terms of service: http://www.google.com/intl/en/policies/terms/

.. _one API call: http://swfiua.koding.io:8000/eulasees/everythingforeula/4/

.. _VOTE FOR US: http://hackathon.koding.com/entries/team-bermuda
