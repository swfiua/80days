.. title: Future proof your organisation with free software
.. slug: future-proof-your-organisation-with-free-software
.. date: 2015-07-01 20:52:03 UTC
.. tags: free software, .NET, silverlight, moonlight
.. category: 
.. link: 
.. description: How free software keeps you in control
.. type: text

A few days ago I was hoping to be able to listen to a Bermuda
Parliament debate via the Hansard site.

I was actually unable to find a stream for the debates.  Further
enquiries revealed it does exist, but the streaming uses Microsoft's
Silverlight. 
   
This creates a problem, since Microsoft has abandoned Silverlight and
it is no longer supported and does not work in many modern browsers.

This is a scenario that gets repeated over and over.  In what follows,
I will be using government as an example, but you could substitute
*organisation* for government and the story is the same.

So here is a typical scenario:

* Government has a problem to solve, in this case streaming recordings
  of parliamentary debates.

* Government hires a consultant [1]_  to implement a solution:

  - the consultant chooses the technology stack

  - government workers lack time, resources and skills to understand the
    choices the consultant is making.  This problem is exacerbated by
    outsourcing.

* The Consultant provides a solution with proprietary technologies.  In many
  cases the consultant, not the government owns the software created for
  the project.  The result is the government is locked into that
  consultant for support and dependent on proprietary software
  companies for support.
  
* Proprietary vendor drops support for the tech that was used.  Result
  is unmaintainable websites that eventually have to be replaced.
  Everything is thrown out and the process is repeated.

In the free software world you get a different story:

* Government has a problem to solve, in this case streaming recordings
  of parliamentary debates.

* Government IT staff research free software solutions that will solve
  the problem

  - they look to see what others are using;

  - they work with those in other government departments with similar
    problems;

  - they pick some free software projects that solve the problem and
    that appear to be active and vibrant projects;

  - the solution is implemented;

  - any software written is released as a free software project.

In this scenario, the end result is something that can be supported not
just by the government workers involved in the project, but actually
anyone with access to the code, which is in fact *everyone*.

This includes enthusiasts in the local community, but also people
worldwide that are working with the technology that is being used.

Instead of being tied to a single supplier, there is choice and hence a
competitive market.

The software will generally be both free as in freedom and free as in
cost.  The money saved can be invested in developing local talent to
support it.

Further money will be saved in the future due to not having to replace
the system due to proprietary vendors stopping support.  Sure the system
will need maintenance and future development, but the government workers
will have all the tools they need to do this.

The system will likely require lower cost hardware resource too.


Silverlight and Moonlight
=========================

The Silverlight story is an excellent example of this sort of problem.

Microsoft launched Silverlight with a great fanfare, whilst ignoring
web standards such as HTML5 that provided very similar capabilities.

It integrated nicely with their .NET platform and they provided some
good tools to help with development.

However, Silverlight failed to gain traction and by 2013 Microsoft
announced they were discontinuing development, just six years after
introducing the technology.

Security and proprietary frameworks
-----------------------------------

This never ending stream of proprietary technologies, each supposedly
better than the previous technology, that is no longer supported,
creates serious computer security issues.

Many government websites here in Bermuda use Adobe Flash or
Silverlight.  The latter is no longer supported, the former has very
patchy support.

In any case, government sites using Flash depend on ancient versions
that are likely riddled with security holes, yet impossible to
support.  Further, they simply do not work in modern browsers.

Free software greatly reduces this problem: since the software comes
with freedom, those using it have everything they need to support it.

Upgrades are done only as and when significant improvements are made,
not on some corporation's timetable, designed to generate revenue for
that corporation.

Mono
====

Silverlight is built on top of Microsoft's .NET framework.  .NET is
interesting technology, but in many ways not fundamentally different to
Java.

The free software community has always been wary of .NET.  There is a
project called "mono" that is a free implementation of .NET.  There were
concerns that mono infringes some Microsoft, might use those patents to
attack mono.

In fact, this has not happened and recently Microsoft has released a
number of .NET related tools as open source, but there is still some
wariness about mono.  I believe it does have a significant role to play
in helping Microsoft shops migrate to free software.

When Silverlight was announced the Mono team started the Moonlight
project, a free implementation of silverlight.

The project was abandonned in 2012 after poor adoption of Silverlight
and very few sites that use Silverlight work under Moonlight.

The result is that people who used Silverlight are left with an
expensive mess.

It is also interesting to read the criticisms of Silverlight in the
wikipedia article.  Note that many of these criticisms come from
companies like Adobe, who were probably more motivated by protecting
their ancient Flash technology.  

Footnotes
=========

.. [1] I say *consultant* but it could be any vendor offering a solution.

   I don't mean to bash consultants, there are some excellent ones out
   there, I am planning to be one myself.

   Consultant's work pattern should be to come to an organisation,
   empower them to solve their own problem and leave them with all the
   resources they need to continue to maintain and develop that
   solution.

   In short, "get in, solve the problem, empower the organisation, get
   out".

   Too often the "empower the organisation" bit is skipped since by
   not doing that the consultant creates future opportunities for
   themselves.


.. _Silverlight:  https://en.wikipedia.org/wiki/Microsoft_Silverlight#Mono_Moonlight_implementation



