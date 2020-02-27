var config = {};


config.menu = function() {
	return {
		'communityscripts': {
			"title": "Community Scripts",			
			'children': {
				'readme': {
					'title': 'README',
					'callback': ['cat', ['README.md']]
				},
				'logsfs': {
					'title': 'Log specific call',
					'callback': ['echo', ['logs.sh fs -n=1 /etc/antbuddy/tools/communityscripts/FreeSWITCH/sipify.sh \'| grep -e "1212165739-5060-13@BJC.BGI.B.BF"\'']]
				},	
				'logskamai': {
					'title': 'Log specific call kamai',
					'callback': ['echo', ['cat /var/log/kamailio/kamailio.log.2 | grep "0_2106847936@192.168.1.8" | ccze -A']]
				},					
				'listoutbound': {
					'title': 'List outbound',
					'callback': ['echo', ['logs.sh fs /etc/antbuddy/tools/communityscripts/FreeSWITCH/sipify.sh \'| grep -e "->09"\'']]
				},								
				'list': {
					'title': 'List some',
					'callback': ['logs.sh', ['fs', '-n=1', "/etc/antbuddy/tools/communityscripts/FreeSWITCH/sipify.sh", '\'| grep -e "ransfered call to xferext extension" -A 10 -B 2| head\'']]
				}	
			}
		}
	};
}

module.exports = config;