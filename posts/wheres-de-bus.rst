.. title: Where's de bus
.. slug: wheres-de-bus
.. date: 2015-06-12 14:14:04 UTC
.. tags: bus, bermuda, open source, transit, ferry
.. category: 
.. link: 
.. description: 
.. type: text

This year's TLF students are considering creating an application to
give Bermuda's public transport users up to date information on where
the buses and ferries actually are.

Transit authorities that have made this data available have found a
number of `benefits`_ of bus tracking, including increased usage of
public transport.

There is a thriving open source project, `One Bus Away`_ which looks
like it could be used in the Bermuda environment.

A first step in getting the transport data into the `General Transit
Feed Specification`_ (GTFS) format.  This provides a flexible format
for transit data.  It is how you specify bus stop locations, routes
and timetables.  Once you have your data in this format there are a
number of projects that you can use to create a powerful transit
application.

The `One Bus Away`_ project is an open source project that is being
used in a number of US and Canadian cities.  It should be usable here
in Bermuda too.  

Google provides good support for transit information and the
`Netherlands`_ recently became the first country in the world to
provide full information via their service.

Whilst this support from Google is good to have, since many tourists
will be using google maps whilst visiting the island, there are
benefits to being in control of your own data and websites.  There are
restrictions on the use of Google maps and you are not in control of
future development when you use that platform.  Further, users may not
wish to share their location with Google due to privacy concerns.

`OpenStreetMap`_ is an free and open project to make top quality
digital maps available.  The Bermuda map is quite excellent.  Further,
there is a good open source javascript library, `leaflet`_ to create
interactive maps using OpenStreetMap data.

A few months back Open Bermuda started work on a `Where's de bus`_
project during a hackathon.  The challenge at that time was finding
out where the actual bus stops were.  It is hoped that it will be
possible to get this information and full bus and ferry timetables in
machine readable form from the Bermuda Transportation Board (BTB).

Given the small size of Bermuda and its transit network it would also
be possible to crowd-source the data for a transit application.  If
live GPS data is not avaialable from BTB an alternative would be to
create a mobile application that public transport users could run and
use to report bus locations as well as how full the bus currently is.

There are already some open source GPS tracking systems available such
as `OpenGTS`_ and `Traccar`_ that might be usable here.



.. include:: posts/references.rst

.. _Where's de bus: https://github.com/openbermuda/wheres-de-bus	     
.. _General Transit Feed Specification: https://developers.google.com/transit/gtfs/reference
.. _Boston MBTA visualisation: http://mbtaviz.github.io/
.. _Vehicle tracking systems: https://en.wikipedia.org/wiki/Vehicle_tracking_system
.. _OpenMBTA: http://openmbta.org/

.. _Open data bus tracking: http://efficientgov.com/blog/2013/01/10/open-data-allows-your-city-to-develop-bus-tracking-apps/

.. _One Bus Away: http://onebusaway.org/

.. _Bus tracking benefits: http://www.actsoft.com/public-transportation-profits-from-gps-tracking/

.. _OpenStreetMap: https://www.openstreetmap.org/search?query=bermuda#map=12/32.2949/-64.7830

.. _Netherlands: http://www.dutchnews.nl/news/archives/2015/06/the-netherlands-debuts-new-google-public-transport-service/

.. _OpenGTS: http://www.opengts.org/

.. _Traccar: https://www.traccar.org/

.. _Leaflet: http://leafletjs.com/

.. _benefits: `Bus tracking benefits`_
