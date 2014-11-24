.. title: Star Trek universal translator
.. slug: star-trek-universal-translator
.. date: 2014-11-24 18:26:18 UTC
.. tags: 
.. link: 
.. description: 
.. type: text

This theme from the global `hackathon`_  really interests me::

  Challenges associated with real time communication and translation
  (Star Trek universal translator anyone?)

I am finding computer interfaces becoming more and more annoying.  I
interact with computers through different interfaces: mobile phones,
tablets, infra-red remotes, workstations etc etc.

Each application has its own idea of how it wants me to work with it.
Some have discoverable interfaces.  Some are close to unusable from a
mobile phone.

What I am thinking is what we need is a layer that sits between input
devices and applications.   I guess we already have this, it is called
an operating system.   But currently, all these tend to do is
implement the drivers needed to talk to the input device and simply
pass on the events to applications running on the O/S.

Events tend to be pretty low level things like *button click*,
*keyboard keypress* etc etc.   If we had more sophisticated input
devices, or rather a layer listening to existing inputs (for instance
why not use the webcam too to observe what the user is doing, or the
mic to listen.  With this information it ought to be easier to guess
what the user is really trying to do.   Applications could then be
build that accepted a much richer set of events.

For example:

* go to next page
* go back, I just clicked the screen by mistake
* damn you autocorrect, stop guessing and just enter the word I have
  typed three times already
* OK, usually when he does this he wants out of netflix and into xbmc,
  so why don't I just offer to take him there?
* of course, the OS should learn from you as you interact with it
* and we don't want to end up with `clippy`_.

Then there is social media, I am signed up to way to many sevices:
twitter, email, google+, github, facebook, koding.com, irc, blogs etc
etc. 

`ttwick`_ looks like it might have a solution to the problem of keeping
track of everything.

There are a whole bunch of privacy issues to worry about here.  Any
interface listening to user inputs is seeing some very personal
information.  My guess is the way you type on a keyboard is a pretty
unique identifier, perhaps as distinctive as your DNA.

So for apps to really behave well for you they might need to know this
information that identifies who you are.  But who do you really want
to share that information with?

Now if the OS translated the inputs coming from devices into a
standard, rich event stream then it might be that it could do it in
such a way as the event stream was less of a personal marker and so we
could get a double win of greater privacy and a more unified interface
to interact with computers.

This whole area is really an accessibility thing.  But for too long
accessibility has been some extra thing you do to support people with
disabilities.  It isn't built into apps from the ground up.  Further,
it singles out those with disabilities: poor vision, paralysis, poor
motor skills, etc etc.   The reality is that everyone needs better
interfaces.

If we out a layer between our input devices and our applications we
can start working on those better interfaces.  For everybody.

I am reminded of `Tavis Rudd`_ at PyCon 2014 talking about controlling
emacs with his voice.

So again, all we need here is a layer listening to his voice and
converting the voice into instructions for emacs.  Now if that layer
could learn as it was used, we might have something special.

.. _hackathon: https://koding.com/Hackathon
.. _ttwick: http://ttwick.com/

.. _clippy: http://en.wikipedia.org/wiki/Office_Assistant

.. _Tavis Rudd: https://www.youtube.com/watch?v=OWyMA_bT7UI
