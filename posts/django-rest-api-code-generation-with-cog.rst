.. title: Django Rest API code generation with cog
.. slug: django-rest-api-code-generation-with-cog
.. date: 2015-01-14 21:12:36 UTC
.. tags: django python
.. link: 
.. description: 
.. type: text

After a good break for the holidays, a couple of weeks in the
frozen wastes of Canada complete with arriving home with a stinking
cold I am now at the, *"this code won't write itself"* part of the 80 days
project.  

There is quite a bit to do, but I am still finding distractions to
spend time on.

I have been using `django rest framework`_ to create a REST api for
the project.

Creating serializers, api classes and url specs for these frameworks
is largely a matter of generating standard boiler plate code.  This is
the sort of stuff I hate doing: tedious and error prone.  

I originally wrote my own noddy code generator to help with some of
this, but was less than satisfied with the result: it was fine for my
immediate needs, but as I add more models to the application I would
need to do more autogeneration.  I had the inescapable feeling that my
code generator was probably more trouble than it was worth.  At the
same time, writing code like this by hand is deeply unsatisfying.

So, just when it was looking like I would have to start learning
`angular.js`_ and build the front end, Ned Batchelder came to the
rescue on Twitter by `posting`_ a link to a new release of `cog`_.

Ned described it as "a small tool that does a small job well".

Sure enough, it does.  It lets you embed python code (disguised as
comments) within your code to do the code generation.

There are a few features in *cog* that appealed to me:

* the code generator can be run in a way that over-writes the input
  file with the newly generated code
* it calculates checksums for the generated code and embeds them in
  the output.  This is useful as it allows it to spot if you have
  edited the code since it was generated and hence refuse to
  re-generate that code.
* you can re-run and it will update the existing code, assuming the
  checksums have not changed.

Armed with cog, I came up with `codegen.py`_ to generate the boring
bits of `api.py`_ as well as *urls.py* and *serializers.py*.

I am quite happy with the results.  Doug Hellmann had suggested maybe
`cookiecutter`_ might be a better solution to this problem.  In my
case, I am using cookiecutter to get the base files for my django
application, but this code generation cannot take place until you add
some models, hence the need for cog.

Better still would be to combine the two and add codegen.py and
suitable urls.py, serializers.py and api.py to the cookiecutter
template.  I'll add that to the list of things to do, if only to delay
the learning of `angular.js`_ ;)

.. _include: posts/references.rst

.. _posting: https://twitter.com/swfiua/status/554742651082539010

.. _codegen.py: https://github.com/swfiua/django_eighty_days/blob/master/django_eighty_days/codegen.py

.. _api.py: https://github.com/swfiua/django_eighty_days/blob/master/django_eighty_days/api.py
