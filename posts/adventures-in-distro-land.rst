.. title: Adventures in distro land..
.. slug: adventures-in-distro-land
.. date: 2014-12-16 00:19:11 UTC
.. tags: linux
.. link: 
.. description: trying a few new linux distros
.. type: text

We had a friend over the other evening.  I have a home full of half
working tech.  Stuff that really could do something, given enough
time. 

A lot of my techy stuff has been neglected for a few years, so it is
suffering both bit and hardware rot.  So a good part of last night was
spent exploring why stuff wasn't working, in between finding a few
gems.  

So today, I had a few things I wanted to look into: 

* why wasn't the server with the music on responding, 
* installing a fedora iso onto a usb and seeing what it is like.

That server with the music; well that thing won't even boot off a USB
key; though you can change a bucket load of things in the BIOS.  And
at one point it did seem like it would boot over the network.

Next stop, fedora install guide kindly gives the incantation::

   dd if=fedora*.iso of=/dev/sdx  (x in my case was b)

So I booted up a laptop (the one with the battery that lasts 30
seconds) off the USB and fedora booted.  I did not have time to have a
good look around, but it seemed snappier and easier to use than the
Ubuntu desktop on the machine, more like the `awesome wm` experience.
I will definitely take a nother look at this.

Back to the music.  I resurrected an old mythtv box and tried to put
fedora on it.  I couldn't get it to install on the old myth box.  It
may have had something to do with some network issues that were going
on at the time.  Also possible there was some issue with this boxes
USB, it was an old machine, so might have old firmware.  Or the USB
isn't an innocent little USB.  But I digress.  

So, I tried arch.  This was like being beamed back to 1997.  It was fun
for a while, but then I typed the wrong thing and lost the internet
connection, which was what I needed to get the software to fix the
internet connection.  I did Ctrl-D out of the *chroot* and if I'd been
awake when I booted back into it I might have skipped the second
install.  I gave up at the bootloader bit.  I know, I was nearly there :(

I might have to go back to arch one day when I have lots of time on my
hands.

So more rabbit holes.  Eventually, led to Debian.  By now the dining
table is buried under cables.  The IP over powerline is up and running
again and 2-3 boxes are in the pile marked broken.

The Debian install was been a joy, apart from the sporadic (or rather
repeated) interruptions to anything needing internet bandwidth (a
problem anywhere with expensive or unreliable bandwidth).

I suspect I am biassed because over the years I have spent more time
with Debian based systems.  First with debian and then indirectly via
Ubuntu.

I liked Ubuntu primarily for its python packaging.  Ubuntu still is a
fantastic distribution for python.  As an interface for the sort of
programming I like to do it is becoming less responsive, or at least
that is my feeling.  Also, I am feeling myself further removed from
the hardware and the software configuration.  

At the same time, python packaging has come a long way.  With PyPi and
pip install the linux distro no longer matters so much.

Debian doesn't seem to have changed much in philosophy.  Most of what
I learnt back in the day still applies.  It led me through the install
with just enough information to make an informed decision about the
questions.  It guided pretty well, hinting which way I should go.

As of now I am yet to actually get it serving up the music, so this
will most likely not be the last distro related posting.


