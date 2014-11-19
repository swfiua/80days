#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import sys


try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup

import 80days
version = 80days.__version__

setup(
    name='80days',
    version=version,
    author='Johnny Gill',
    author_email='swfiua@gmail.com',
    packages=[
        '80days',
    ],
    include_package_data=True,
    install_requires=[
        'Django>=1.7.1',
    ],
    zip_safe=False,
    scripts=['80days/manage.py'],
)
