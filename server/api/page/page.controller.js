/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function(req, res) {
  var query = req.query.p;

  if (query === '1') {
    res.json([
      {
        'title': 'p1-i1',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i2',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i3',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i4',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i5',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i6',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i7',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i8',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i9',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i10',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i11',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i12',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i13',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i14',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i15',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i16',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i17',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i18',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i19',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p1-i20',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      }
    ]);
  } else if (query === '2') {
    res.json([
      {
        'title': 'p2-i1',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i2',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i3',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i4',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i5',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i6',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i7',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i8',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i9',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i10',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i11',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i12',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i13',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i14',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i15',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i16',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i17',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i18',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i19',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p2-i20',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      }
    ]);
  } else if (query === '3') {
    res.json([
      {
        'title': 'p3-i1',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i2',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i3',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i4',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i5',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i6',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i7',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i8',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i9',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i10',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i11',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i12',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i13',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i14',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i15',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i16',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i17',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i18',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i19',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      },
      {
        'title': 'p3-i20',
        'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
        'author': '~Youme~',
        'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
        'details_url': 'http://www.google.com'
      }
    ]);
  }

  /*res.json([
  {
    'title': 'p1-i1',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i2',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i3',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i4',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i5',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i6',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i7',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i8',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i9',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i10',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i11',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i12',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i13',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i14',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i15',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i16',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i17',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i18',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i19',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  {
    'title': 'p1-i20',
    'blurb': 'Something about the dress here, usually this will be filled in with database data or something else.',
    'author': '~Youme~',
    'thumbnail_url': 'http://www.atonalpoetryreview.com/images/1/Coast%20Henriette%20Dress%20Red.jpg',
    'details_url': 'http://www.google.com'
  },
  ]);*/
};