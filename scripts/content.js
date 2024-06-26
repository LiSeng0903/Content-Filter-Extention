( () => {
    console.log( 'start' );
    let elements = null;
    const observer = new MutationObserver( ( mutations ) => {
        blockYoutubeVideos( [ "VNL" ] );
    } );
    observer.observe( document.body, {
        childList: true,
        subtree: true
    } );
} )();

function blockYoutubeVideos( keywords ) {
    const videoElements = document.querySelectorAll( "ytd-rich-item-renderer" );
    videoElements.forEach( ( videoElement ) => {
        const titleElement = videoElement.querySelector( "#video-title" );
        const titleText = titleElement.textContent;
        if ( keywords.some( ( keyword ) => titleText.includes( keyword ) ) ) {
            // make the video element blank
            videoElement.style.visibility = "hidden";
        }
    } );
}