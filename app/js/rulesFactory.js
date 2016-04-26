japanesifyApp.factory('RulesFactory', function() {
  function RulesFactory() {
    this.regex = /(ll)[aeiou]|[b-df-hj-np-tv-z][aeiou](r|w)\b|(phoe)|([b-df-hj-np-tv-z](i))(?!(e))|[b-df-hj-np-tv-z][aeiou]{2}|[b-df-hj-np-tv-z](h)[aeiou]|(nn)[aeiou]|(ch)(?![aeiou])|(ch)[aeiou]|[b-df-hj-np-tv-z][aeiou]|[b-df-hj-np-tv-z]|[aeiou]/i;
    this.matcher = {'e': 'え',
                    'ri': 'り',
                    'ka': 'か',
                    'mi':  '',
                    'sa':  '',
                    'mu': '',
                    'lo': '',
                    're': '',
                    'n': '',
                    'zo': '',
                    'to': '',
                    'be': '',
                    'nna': '',
                    'ke': '',
                    'vi': '',
                    };
  }

  return RulesFactory;
});
