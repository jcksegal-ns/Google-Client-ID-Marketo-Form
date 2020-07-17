ga(
(function() { 
    function addValuesToMarketoForm() {
        MktoForms2.whenReady( function(form) {
            console.log('Marketo form #'+form.getFormElem()[0].id+' found.')	
            if (!gaTrackID || !gaClientID) {
                console.error('Missing GA Tracker ID or GA Client ID');
                return;
            }
            form.vals({
                'GATRACKID__c':gaTrackID,
                'GACLIENTID__c':gaClientID
            })
            console.log('Values populated')
        })
    }
    var tracker = ga.getAll()[0]
    var gaTrackID = tracker.get('trackingId')
    var gaClientID = tracker.get('clientId')
    function initialize() {
        if(typeof MktoForms2 !== 'undefined') {
            addValuesToMarketoForm()
        }
        else {
            console.log('No Marketo form found.')
        }
    }
    initialize()
 })())