# Packages

iron:router

nemo64:bootstrap
mrt:accounts-ui-bootstrap-3

accounts-password

cfs:standard-packages
cfs:filesystem
cfs:gridfs
cfs:s3
cfs:ui

underscore
coffeescript
less

# Goals

Each of the pieces below could be a package. Think of this as a toolkit for building a LMS (or something like one).

## Role based account / permission system

* Overall / root user
* Limited admin (teacher)
* Full site user (student)
* Limited site user (mentor)

Add roles and define permissions.

## User profiles

## Service status widget

Overall dot with hover box with details and links to services used. Visbile to admin users.

Limited feedback to users.

## Submit button that changes appearance when there is unsaved content

## Handle timeouts, hot pushes with migrations.

## Configuration interface

## File storage via CFS

Features:

* Upload progress bar (upload to server)
* On SA marker (a green dot or somesuch, could be yellow on server)
* Delete
* Queued transforms (dynamically configured)
* Storage browser / manager

## Audio recording

* Something like a VU meter.
* Progress bar for conversion / upload.

## Logging

## Multi-lingual support

## Experiment with an idea like "headless Drupal"
