( () => {
    const keywords = [ "VNL" ];
    const observer = new MutationObserver( ( mutations ) => {
        mutations.forEach( ( mutation ) => {
            if ( mutation.type === "childList" ) {
                mutation.addedNodes.forEach( ( addedNode ) => {
                    if ( addedNode instanceof Element && addedNode.matches( 'ytd-rich-item-renderer' ) ) {
                        // Only make change if the new element is a grid row
                        console.log( 'New grid row element added:', addedNode );
                        blockYoutubeVideos( addedNode, keywords );
                    }
                } );
            }
        } );
    } );
    observer.observe( document.body, {
        childList: true,
        subtree: true
    } );
} )();

function blockYoutubeVideos( videoElement, keywords ) {
    const titleElement = videoElement.querySelector( "#video-title" );
    const titleText = titleElement.textContent;
    if ( keywords.some( ( keyword ) => titleText.includes( keyword ) ) ) {
        // make the video element blank
        // videoElement.style.visibility = "hidden";
        videoElement.style.backgroundColor = "lightblue";
    }
}