var isFF = require('../is_browser_firefox');

describe('isFirefox', function(){
  it('returns true if string belongs to firefox\'s user agent', function(){
    var FirefoxUserAgents = [
      'Mozilla/5.0 (Windows NT 6.3; rv:36.0) Gecko/20100101 Firefox/36.0',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:33.0) Gecko/20100101 Firefox/33.0',
      'Mozilla/5.0 (X11; Linux i586; rv:31.0) Gecko/20100101 Firefox/31.0',
      'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:31.0) Gecko/20130401 Firefox/31.0',
      'Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0'
    ];

    expect(isArrayPassFunction(FirefoxUserAgents, isFF)).to.be.true;
  });

  it('returns false if string doesn\'t belongs to firefox\'s user agent', function(){
    var NotFirefoxUserAgents = [
      'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; ARM; Touch; WPDesktop)',
      'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; rv:11; NOKIA; Lumia 920) like Gecko',
    ];

    expect(isArrayPassFunction(NotFirefoxUserAgents, isFF)).to.be.false;
  });
});
