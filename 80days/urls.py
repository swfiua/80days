# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf import settings
from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from django.views.generic import TemplateView

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

# FIXME -- this PARTIAL stuff needs tests
# stuff to create views for partial views
# (partial_url, [exts]) pairs
PARTIAL_DATA = [
    ['home/home', ['.html']],
    ['competitions/competitions', ['.html']],
    ]

urlpatterns = patterns('',
    url(r'^$',  # noqa
        TemplateView.as_view(template_name='pages/home.html'),
        name="home"),
    url(r'^home2$',  # noqa
        TemplateView.as_view(template_name='pages/home2.html'),
        name="home"),

    url(r'^components/tabs/tabs.html$',  # noqa
        TemplateView.as_view(template_name='pages/tabs.html'),
        name="home"),

    url(r'^about/$',
        TemplateView.as_view(template_name='pages/about.html'),
        name="about"),

    url(r'^app/$',
        TemplateView.as_view(template_name='app/index.html'),
        name="app"))

for partial_url, exts in PARTIAL_DATA:
    for ext in exts:

        api_name = partial_url.replace('/', '_')
        if ext:
            api_name += '_' + ext.strip('.')

        template_name = partial_url + ext
        url_pattern = '^' + template_name  + '$'
        
        urlpatterns +=  patterns('',        
            url(url_pattern,
                TemplateView.as_view(template_name=template_name),
                name=api_name))


urlpatterns +=  patterns('',        

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),

    # User management
    url(r'^users/', include("users.urls", namespace="users")),
    url(r'^accounts/', include('allauth.urls')),

    # Uncomment the next line to enable avatars
    url(r'^avatar/', include('avatar.urls')),

    # Your stuff: custom urls go here
    url(r'eighty/', include('django_eighty_days.urls', namespace='eighty')),

    # rest framework and swagger
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^docs/', include('rest_framework_swagger.urls')),


) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
