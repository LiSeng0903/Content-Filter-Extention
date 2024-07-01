chrome.tabs.onUpdated.addListener( ( tabId, tab ) => {
    if ( tab.url && tab.url.includes( "youtube.com" ) ) {
        // console.log( "It's a youtube page" );
        // chrome.tabs.sendMessage( tabId, {
        //     type: "NEW",
        //     videoId: urlParameters.get( "v" ),
        // } );
    } else {
        // console.log( "It's not a youtube page" );
    }
} );
