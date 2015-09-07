.. title: Census Survey
.. slug: census-survey
.. date: 2015-09-03 15:07:57 UTC
.. tags: 
.. category: 
.. link: 
.. description: Proposal for government census survey using free software
.. type: text

Introduction
============

The Bermuda Government, Department of Statistics has put out a Request
for Proposal (RFP) for a *web-based solution to support on-line
census*.

Below are some thoughts on how Free Software could form the solution.

The census raises many complex issues of privacy, accessibility and
access to information.  In short, is has all the features of a
typical software project.

Free Software Solution
======================

Most, if not all, of the pieces required to build this system already
exist as free software.

This software is free in the sense that it gives you freedom.  Freedom
to examine the software, freedom to look how it works, freedom to
change it as you wish.

Freedom to pass the software on to others should you wish, so long as
you give them the same freedoms you received.

A prototype can be built from these pieces in around 20 hours of
development.

There are Bermudians with the skills to do this and the time to devote
to such a project.

In some cases they will be exploring new concepts, but that is the
nature of IT.

There are many others they can call on to assist should they need
guidance, including the millions of people around the globe who
contribute to free software.


Accessibility
=============

Accessibility is often neglected in software.

Many free software tools have good support for accessibility.

Generally, a framework is provided to address a wide range of
accessibility issues.


Everyone has different challenges working with computers.

* vision

* hearing

* motor movements

* speech

* language processing

* reading

* writing

* fear

* the software itself

* citizens access to information


Bermuda is an international island.  English is the dominant
language.

Documents are generally produced in English.

However, the island has many nationalities living here and also has
many Bermudians who have travelled and lived abroad.

There are also distinct communities within Bermuda with their own
language, culture and history.

And, of course, Bermuda is a popular travel destination, with many
nationalities paying visits.

Yet there is very poor support for languages other than English on
most Bermuda related websites.

A free software solution would accommodate translations.  Further, it
would allow anyone to contribute to those translations.

Free software: means you can adapt for differing needs, since you have
the code.  Without the code you are tied to a third party.

Further others can help you.  A free software census solution for
Bermuda may be usable in many other juristictions.  Bermudians who
develop such software would be able to work with others wherever in
the world they may be.

Public Access To Information
============================

Census data is invaluable in many ways.  It provides data that can
guide public policy.

TODO: Anology: vaccination: having your children vaccinated protects
them against illness, but also reduces the chance of epidemics
breaking out.  There are small risks to every vaccination, but the
benefits to society can be significant.  For example, consider the
elimination of polio, a disease that affect large numbers of people in
the past.

In the UK there have been censuses since 1831 (may have been earlier).

Collecting the data back in that day was a huge task.  At the time it
gave vast amounts of information about poplulation sizes, household
sizes and the age profile of the population and their occupations.

All the data was hand written.  Pages of data might have totals and
there were presumably clerks creating aggregate statistics.

Nowadays, genealogists find the census data both fascinating and
invaluable as they trace family history.

The UK has been digitising this data over the last few years and
making it available on line.

A free software solution to the census would anticipate PATI requests
by building access to information into the system.

Rather than wait for PATI requests and have to then examine data to
see what should be released, the decisions about what should be
released, when and to who will be made up front and built into the
solution.

A system can be built that will only release certain information after
some specified period.

Some data may need reviewing after some number of years and released
or re-sealed based on that review.


Transparency and Privacy
========================

It is assumed that aggregate data from the census will be made freely
available to citizens.  Our solution will include support for such
access.

It is recommended that any data of a sensitive nature be treated
appropriately, including the physical security of any computers
storing the data.

One possibility is to try to build a system that only stores
aggregrate information.

It should also be noted that in a small community like Bermuda
aggregate data, especially when combined with other similar data can
remove annonynimity.

One recommendation would be to encourage community discussion about
the census questions and have the community guide the decisions
regarding privacy and access to information.

Collecting more personal data that will be stored in some sort of time
capsule for the benefit of future historians and genealogy.


Computer insecurity
===================

In view of all the high profile data breaches that the world has been
experiencing over recent months it should be apparent that storing
sensitive data on computers is not an easy task.

Our solution will recognise this fact and propose appropriate measures
for storing more sensitive data.

However, it would be our recommendation to only collect data that the
residents of Bermuda are comfortable in sharing.


Maintenance and Development
===========================

With a free software solution future maintenance and development of
the software can be performed by anyone with the skills.  The local
poplulation will have all the tools they need, they just need to learn
the skills needed.

Further, a well designed free software census would be usable in other
jurisdictions.

If developed here in Bermuda by Bermudians it would create
opportunities for the team to work elsewhere in the world.

Free Software Centre
====================

Ownership of code
=================

The government, not the developers would own and code developed for
the site.

It should be noted most of the code already exists and is free
software.

It is suggested that any code written for the project be itself
released as a free software project using the GPL license.


Existing Free Software solutions
================================

http://www.census.gov/data/software.html


Appendix A: Python and Django
=============================


Django
======


Django Quiz
===========

Appendix:  Project Jupyter
==========================

Humans in different parts of the world speak different languages.

Humans have also developed many different languages for communicating
with computers.

Learning these languages can take considerable time and effort.

For most of the history of modern computing, communicating with other
languages has been difficult.

In effect, the plethora of languages has worked to Balkanise the IT
world.

`Project Jupyter`_ is just one project that is helping languages work
together.

Jupyter is a tool that supports virtually seamless interoperability
between 50 different languages, from python, to perl, C++ to C#, Bash
to Brainfuck, erlang to lua, matlab to php.

Choosing tools
--------------

Developers invariably like to use the tools they know best.  They
understand them, know what they are capable of and know many of the
risks they will encounter using those tools to solve a problem.

Starting a project with a new tool presents many additional risks:

* will it work as advertised?

* How much time will it take to learn?

For an organisation starting out in the free software world the choice
can be daunting.

Further, any large organisation will likely end up using many
different languages.

Whilst there are inefficiencies in this approach, there are
advantages, just as with growing crops: monoculture leaves an
organisation vulnerable to anything which threatens that ecosystem.

Variety gives resilience, but at some cost.

Projects such as Jupyter help support that variety and reduce the
costs.

If a particular technology choice is proving hard to support, porting
to another Jupyter supported language is always an option.


.. include:: posts/references.rst
