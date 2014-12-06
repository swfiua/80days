.. title: More on django-allauth
.. slug: more-on-django-allauth
.. date: 2014-12-05 20:34:07 UTC
.. tags: 
.. link: 
.. description: 
.. type: text


Armed with the `missing django-allauth tutorial`_ I have made some
progress getting auth working with *google* doing as the
authentication provider.

Sarah's guide pretty much covered everything I needed to know.  It
also encouraged me to work towards pushing out a bare-bones **80
days** site.

This actually makes sense as I don't need the whole site up and
running just for users to register for the competition.

The missing tutorial uses *facebook* as the example.  Unfortunately, I
could not figure out how to register my application and get the
necessary keys on facebook.

Instead, I decided to have a go at using *google*.   I quickly found
this `google guide`_ which was enough to get my application registered
and get the necessary keys.

Then it was back to the missing manual.   I actually used the *django
admin* interface to update the django database, rather than run the
SQL as per the tutorial.  This was just a matter of going to this url:
*http://127.0.0.1:8000/admin/socialaccount/socialapp/* and entering a
new record.

I still had a couple of errors to get by.  First, I copy/pasted the
configuration information from the missint tutorial and had to remove
the *publish_stream* scope as google does not support that (at least I
assume that is what the problem is).

Next I had to go back to the `Google Developer Console`_ and register
the callback url that my application was trying to use.  Bingo,
everything works.

So, with this setup, new users can just sign in with their google
account and the application will set up a user registration for them
if one does not already exist.  

The down side with all this is that there are a plethora of
authentication providers I should probably support:  facebook,
twitter, yahoom, linkedIn, github, etc, etc.  

Really, this whole system is horribly broken.  Every social media site
has its own identity management implementation and it, naturally,
wants everyone to use their identity management.   In short, they all
want to own your identity.

What we really need is for users to be able to manage their own
identity, without need to for a central authority.  The central
authority is a critical security weakness as if that authority is
compromised all users using that authority are compromised.

A secondary problem is that the current OAuth/OpenID solutions result
in everybody wanting to be the central authority and hence users are
faced with either balkanisation of identiy management or having to
manage multiple identities.

Sadly, I do not see an end to this in the short term, not least
because the current mess suits all the current incumbents.


.. _missing django-allauth tutorial: http://www.sarahhagstrom.com/2013/09/the-missing-django-allauth-tutorial/

.. _google guide: https://developers.google.com/+/quickstart/python

.. _Google Developer Console: https://console.developers.google.com
