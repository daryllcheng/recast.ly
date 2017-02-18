'use strict';

// A simplified version of `exampleVideoData` to use for tests
window.fakeVideoData = [{
  etag: 'L332gQTY',
  id: {
    videoId: '000001'
  },
  snippet: {
    title: 'Cute cat video',
    description: 'The best cat video on the internet!',
    thumbnails: {
      default: {
        url: 'http://www.fndvisions.org/img/cutecat.jpg'
      }
    }
  }
}, {
  etag: 'SmEuSYxg',
  id: {
    videoId: '000002'
  },
  snippet: {
    title: 'Super cute cat video',
    description: 'Better than the best cat video on the internet!',
    thumbnails: {
      default: {
        url: 'https://pbs.twimg.com/profile_images/567285191169687553/7kg_TF4l.jpeg'
      }
    }
  }
}, {
  etag: 'ujBKBmLk',
  id: {
    videoId: '000003'
  },
  snippet: {
    title: 'Hack Reactor opens extension school on Mars',
    description: 'Watch the ribbon cutting of the first coding bootcamp in space',
    thumbnails: {
      default: {
        url: 'https://d3c5s1hmka2e2b.cloudfront.net/uploads/topic/image/14/hack_reactor.png'
      }
    }
  }
}, {
  etag: 'Nj7xszf8',
  id: {
    videoId: '000004'
  },
  snippet: {
    title: 'JavaScript Jamz',
    description: 'Rock on with JavaScript remixes of today\'s top songs',
    thumbnails: {
      default: {
        url: 'http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/s1600/js.jpg'
      }
    }
  }
}, {
  etag: 'I2w-7nRI',
  id: {
    videoId: '000005'
  },
  snippet: {
    title: 'Framework fatigue and you',
    description: 'JS guru, @McKringleberry teaches tips and tricks for managing JS framework fatigue',
    thumbnails: {
      default: {
        url: 'https://facebook.github.io/react/img/logo.svg'
      }
    }
  }
}];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwZWMvZGF0YS9mYWtlVmlkZW9EYXRhLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImZha2VWaWRlb0RhdGEiLCJldGFnIiwiaWQiLCJ2aWRlb0lkIiwic25pcHBldCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0aHVtYm5haWxzIiwiZGVmYXVsdCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBQSxPQUFPQyxhQUFQLEdBQXVCLENBQUM7QUFDdEJDLFFBQU0sVUFEZ0I7QUFFdEJDLE1BQUk7QUFDRkMsYUFBUztBQURQLEdBRmtCO0FBS3RCQyxXQUFTO0FBQ1BDLFdBQU8sZ0JBREE7QUFFUEMsaUJBQWEscUNBRk47QUFHUEMsZ0JBQVk7QUFDVkMsZUFBUztBQUNQQyxhQUFLO0FBREU7QUFEQztBQUhMO0FBTGEsQ0FBRCxFQWNwQjtBQUNEUixRQUFNLFVBREw7QUFFREMsTUFBSTtBQUNGQyxhQUFTO0FBRFAsR0FGSDtBQUtEQyxXQUFTO0FBQ1BDLFdBQU8sc0JBREE7QUFFUEMsaUJBQWEsaURBRk47QUFHUEMsZ0JBQVk7QUFDVkMsZUFBUztBQUNQQyxhQUFLO0FBREU7QUFEQztBQUhMO0FBTFIsQ0Fkb0IsRUE0QnBCO0FBQ0RSLFFBQU0sVUFETDtBQUVEQyxNQUFJO0FBQ0ZDLGFBQVM7QUFEUCxHQUZIO0FBS0RDLFdBQVM7QUFDUEMsV0FBTyw2Q0FEQTtBQUVQQyxpQkFBYSxnRUFGTjtBQUdQQyxnQkFBWTtBQUNWQyxlQUFTO0FBQ1BDLGFBQUs7QUFERTtBQURDO0FBSEw7QUFMUixDQTVCb0IsRUEwQ3BCO0FBQ0RSLFFBQU0sVUFETDtBQUVEQyxNQUFJO0FBQ0ZDLGFBQVM7QUFEUCxHQUZIO0FBS0RDLFdBQVM7QUFDUEMsV0FBTyxpQkFEQTtBQUVQQyxpQkFBYSx1REFGTjtBQUdQQyxnQkFBWTtBQUNWQyxlQUFTO0FBQ1BDLGFBQUs7QUFERTtBQURDO0FBSEw7QUFMUixDQTFDb0IsRUF3RHBCO0FBQ0RSLFFBQU0sVUFETDtBQUVEQyxNQUFJO0FBQ0ZDLGFBQVM7QUFEUCxHQUZIO0FBS0RDLFdBQVM7QUFDUEMsV0FBTywyQkFEQTtBQUVQQyxpQkFBYSxvRkFGTjtBQUdQQyxnQkFBWTtBQUNWQyxlQUFTO0FBQ1BDLGFBQUs7QUFERTtBQURDO0FBSEw7QUFMUixDQXhEb0IsQ0FBdkIiLCJmaWxlIjoiZmFrZVZpZGVvRGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEEgc2ltcGxpZmllZCB2ZXJzaW9uIG9mIGBleGFtcGxlVmlkZW9EYXRhYCB0byB1c2UgZm9yIHRlc3RzXG53aW5kb3cuZmFrZVZpZGVvRGF0YSA9IFt7XG4gIGV0YWc6ICdMMzMyZ1FUWScsXG4gIGlkOiB7XG4gICAgdmlkZW9JZDogJzAwMDAwMSdcbiAgfSxcbiAgc25pcHBldDoge1xuICAgIHRpdGxlOiAnQ3V0ZSBjYXQgdmlkZW8nLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGJlc3QgY2F0IHZpZGVvIG9uIHRoZSBpbnRlcm5ldCEnLFxuICAgIHRodW1ibmFpbHM6IHtcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5mbmR2aXNpb25zLm9yZy9pbWcvY3V0ZWNhdC5qcGcnLFxuICAgICAgfVxuICAgIH1cbiAgfVxufSwge1xuICBldGFnOiAnU21FdVNZeGcnLFxuICBpZDoge1xuICAgIHZpZGVvSWQ6ICcwMDAwMDInXG4gIH0sXG4gIHNuaXBwZXQ6IHtcbiAgICB0aXRsZTogJ1N1cGVyIGN1dGUgY2F0IHZpZGVvJyxcbiAgICBkZXNjcmlwdGlvbjogJ0JldHRlciB0aGFuIHRoZSBiZXN0IGNhdCB2aWRlbyBvbiB0aGUgaW50ZXJuZXQhJyxcbiAgICB0aHVtYm5haWxzOiB7XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy81NjcyODUxOTExNjk2ODc1NTMvN2tnX1RGNGwuanBlZycsXG4gICAgICB9XG4gICAgfVxuICB9XG59LMKge1xuICBldGFnOiAndWpCS0JtTGsnLFxuICBpZDoge1xuICAgIHZpZGVvSWQ6ICcwMDAwMDMnXG4gIH0sXG4gIHNuaXBwZXQ6IHtcbiAgICB0aXRsZTogJ0hhY2sgUmVhY3RvciBvcGVucyBleHRlbnNpb24gc2Nob29sIG9uIE1hcnMnLFxuICAgIGRlc2NyaXB0aW9uOiAnV2F0Y2ggdGhlIHJpYmJvbiBjdXR0aW5nIG9mIHRoZSBmaXJzdCBjb2RpbmcgYm9vdGNhbXAgaW4gc3BhY2UnLFxuICAgIHRodW1ibmFpbHM6IHtcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9kM2M1czFobWthMmUyYi5jbG91ZGZyb250Lm5ldC91cGxvYWRzL3RvcGljL2ltYWdlLzE0L2hhY2tfcmVhY3Rvci5wbmcnLFxuICAgICAgfVxuICAgIH1cbiAgfVxufSzCoHtcbiAgZXRhZzogJ05qN3hzemY4JyxcbiAgaWQ6IHtcbiAgICB2aWRlb0lkOiAnMDAwMDA0J1xuICB9LFxuICBzbmlwcGV0OiB7XG4gICAgdGl0bGU6ICdKYXZhU2NyaXB0IEphbXonLFxuICAgIGRlc2NyaXB0aW9uOiAnUm9jayBvbiB3aXRoIEphdmFTY3JpcHQgcmVtaXhlcyBvZiB0b2RheVxcJ3MgdG9wIHNvbmdzJyxcbiAgICB0aHVtYm5haWxzOiB7XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8zLmJwLmJsb2dzcG90LmNvbS8tUFR0eTNDZlRHbkEvVHBaT0VqVFFfV0kvQUFBQUFBQUFBZW8vS2VLdF9ENVgyeG8vczE2MDAvanMuanBnJyxcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0swqB7XG4gIGV0YWc6ICdJMnctN25SSScsXG4gIGlkOiB7XG4gICAgdmlkZW9JZDogJzAwMDAwNSdcbiAgfSxcbiAgc25pcHBldDoge1xuICAgIHRpdGxlOiAnRnJhbWV3b3JrIGZhdGlndWUgYW5kIHlvdScsXG4gICAgZGVzY3JpcHRpb246ICdKUyBndXJ1LCBATWNLcmluZ2xlYmVycnkgdGVhY2hlcyB0aXBzIGFuZCB0cmlja3MgZm9yIG1hbmFnaW5nIEpTIGZyYW1ld29yayBmYXRpZ3VlJyxcbiAgICB0aHVtYm5haWxzOiB7XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2ltZy9sb2dvLnN2ZycsXG4gICAgICB9XG4gICAgfVxuICB9XG59XTtcbiJdfQ==