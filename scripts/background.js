chrome.tabs.onUpdated.addListener( ( tabId, tab ) => {
    if ( tab.url && tab.url.includes( "youtube.com" ) ) {
        console.log( "Background" );
        chrome.tabs.sendMessage( tabId, {
            type: "NEW",
            videoId: urlParameters.get( "v" ),
        } );
    }
} );
