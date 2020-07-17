ga(function() { 
    function addValuesToMarketoForm() {
        MktoForms2.whenReady( function(form) {
            console.log('Marketo form #'+form.getFormElem()[0].id+' found.')	
            if (gaTrackID==null || gaClientID==null) {
                console.error('TrackID and Client ID missing; cannot add values');
                return;
            } else {
                form.vals({
                    'GATRACKID__c':gaTrackID,
                    'GACLIENTID__c':gaClientID
                })
                console.log('Values populated')
            }
        })
    }
    var tracker = ga.getAll()[0]
        if (tracker) {
            var gaTrackID = tracker.get('trackingId')
            var gaClientID = tracker.get('clientId')
            console.log('Tracker found')
        } else {
            var gaTrackID = null
            var gaClientID = null
            console.log('Tracker not found')
        }
    function initialize() {
        if(typeof MktoForms2 !== 'undefined') {
            addValuesToMarketoForm()
        }
        else {
            console.log('No Marketo form found.')
        }
    }
    initialize()
 });