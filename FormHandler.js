ga(
(function() { 
    function addValuesToMarketoForm() {
        MktoForms2.whenReady( function(form) {
            console.log('Marketo form #'+form.getFormElem()[0].id+' found.')	
            form.vals({
                'GATRACKID__c':gaTrackID,
                'GACLIENTID__c':gaClientID
            });
        })
    }
    var gaTrackID = ga.getAll()[0].get('trackingId')
    var gaClientID = ga.getAll()[0].get('clientId')
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