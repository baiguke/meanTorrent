(function () {
  'use strict';

  // Users service used for communicating with the users REST endpoint
  angular
    .module('torrents.services')
    .factory('TorrentsService', TorrentsService);

  TorrentsService.$inject = ['$resource'];

  function TorrentsService($resource) {
    var Torrents = $resource('/api/torrents/:torrentId', {
      torrentId: '@_id'
    }, {
      update: {
        method: 'PUT'
      },
      getTMDBMovieInfo: {
        method: 'GET',
        url: '/api/movieinfo/:tmdbid/:language',
        params: {
          tmdbid: '@tmdbid',
          language: '@language'
        }
      },
      getTMDBTVInfo: {
        method: 'GET',
        url: '/api/tvinfo/:tmdbid/:language',
        params: {
          tmdbid: '@tmdbid',
          language: '@language'
        }
      },
      searchCollectionInfo: {
        method: 'GET',
        url: '/api/search/collection/:language',
        params: {
          language: '@language'
        }
      },
      getCollectionInfo: {
        method: 'GET',
        url: '/api/collection/:collectionid/:language',
        params: {
          collectionid: '@collectionid',
          language: '@language'
        }
      },
      setSaleType: {
        method: 'PUT',
        url: '/api/torrents/:torrentId/set/saletype/:saleType',
        params: {
          torrentId: '@_torrentId',
          saleType: '@_saleType'
        }
      },
      setRecommendLevel: {
        method: 'PUT',
        url: '/api/torrents/:torrentId/set/recommendlevel/:rlevel',
        params: {
          torrentId: '@_torrentId',
          rlevel: '@_rlevel'
        }
      },
      setTorrentTags: {
        method: 'PUT',
        url: '/api/torrents/:torrentId/set/tags',
        params: {
          torrentId: '@_torrentId'
        }
      },
      setReviewedStatus: {
        method: 'PUT',
        url: '/api/torrents/:torrentId/set/reviewed',
        params: {
          torrentId: '@_torrentId'
        }
      },
      toggleHnRStatus: {
        method: 'PUT',
        url: '/api/torrents/:torrentId/toggleHnRStatus',
        params: {
          torrentId: '@_id'
        }
      },
      toggleVIPStatus: {
        method: 'PUT',
        url: '/api/torrents/:torrentId/toggleVIPStatus',
        params: {
          torrentId: '@_id'
        }
      },
      thumbsUp: {
        method: 'PUT',
        url: '/api/torrents/:torrentId/thumbsUp',
        params: {
          torrentId: '@_id'
        }
      },
      rating: {
        method: 'PUT',
        url: '/api/torrents/:torrentId/rating',
        params: {
          torrentId: '@_id'
        }
      },
      scrape: {
        method: 'GET',
        url: '/api/torrents/:torrentId/scrape',
        params: {
          torrentId: '@_id'
        }
      },
      siteInfo: {
        method: 'GET',
        url: '/api/torrents/siteInfo'
      }
    });

    return Torrents;
  }
}());
