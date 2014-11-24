.. title: Nikola, django packages, cookiecutter and other goodness
.. slug: nikola-django-packages-cookiecutter-and-other-goodness
.. date: 2014-11-19 17:23:46 UTC
.. tags: 
.. link: 
.. description: 
.. type: text


I have been spending some time looking at tools to help with the 80
days project.

nikola
======

First up on the list was `nikola`_.   This is a static site generator.
I was mostly interested in it because:

* it plays nicely with `gh-pages`_ 
* it allows you to write blog entries with `ipython notebooks`_
* it is built in python.

I ran into one problem with nikola, see this `nikola_issue`_

Happily, within three minutes of reporting the problem the maintainer
posted a solution, even though the issue I reported was a dupe.

django packages and cookiecutter
================================

Since I am working on a `django`_ project I took a look at `django
packages`_.

My attention was quickly drawn by `cookiecutter`_ in the featured
grid. Cookie cutter creates projects from templates, so saving a lot
of tedious work.  It comes with a list of available cookiecutters.

I was a bit spoilt for choice, but I decided to give the `cookiecutter
djangopackage`_ a go.  

So far I am pleased with this choice.  The docs led me through
creating the django app, adding it to `readthedocs`_ and registering
it with `PyPi`_

All in all, a very painless way to get lots of goodies up and running
for the project.

Now I just need to write some actual code.

.. _nikola: http://getnikola.com/
.. _gh-pages: https://pages.github.com/
.. _ipython notebooks: http://ipython.org/notebook.html
.. _nikola_issue: https://github.com/getnikola/nikola/issues/1496

.. _django: https://www.djangoproject.com/
.. _django packages: https://www.djangopackages.com/

.. _cookiecutter: https://cookiecutter.readthedocs.org/en/latest/
.. _cookiecutter djangopackage: https://github.com/pydanny/cookiecutter-djangopackage

.. _readthedocs: http://django-eighty-days.readthedocs.org/en/latest/

.. _PyPi: https://pypi.python.org/pypi?%3Aaction=pkg_edit&name=django-eighty-days
