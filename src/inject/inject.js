

chrome.extension.sendMessage({}, function (response) {
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === 'complete') {
            clearInterval(readyStateCheckInterval);
            
            
            var client, modal, container, closeButton, progressBar, timeout;
            
            // Create the display modal
            var makeModal = function makeModal(){
                modal = document.createElement('div');
                modal.className = 'injected-beam-modal';
                modal.style.display='none';
                document.body.appendChild(modal);

                closeButton = document.createElement('button');
                closeButton.className = 'injected-beam-button injected-beam-closeButton';
                closeButton.innerHTML = 'X';
                closeButton.addEventListener('click', function(){
                    cleanup();
                });
                modal.appendChild(closeButton);

                container = document.createElement('div');
                container.className = 'injected-beam-container';
                modal.appendChild(container);

                progressBar = document.createElement('div');
                progressBar.className = 'injected-beam-progress';
                modal.appendChild(progressBar);
            }
            
            
            // Setup WebTorrent
            var setup = function setup(){                
                client = new WebTorrent();
                
                client.on('error', function (err) {
                    alert('ERROR: ' + err.message);
                });
            }
            
            // Clean up WebTorrent
            var cleanup = function cleanup(){
                modal.style.display='none'; 
                clearTimeout(timeout);
                client.destroy();
                client=null;
                container.innerHTML='';
                console.log('MagnetView stopped all torrents.');
            }

            // Streams a torrent from a magnet link
            var streamTorrent = function streamTorrent(magnetURI) {
                if (!client){
                    setup();
                }
                console.log('MagnetView is fetching: '+magnetURI);
                
                modal.style.display = '';
                progressBar.style.width = '1%';
                
                timeout = window.setTimeout(function(){
                    alert('MagnetView timed out resolving metadata. There is probably no WebTorrent peers available');
                    cleanup();
                },20000);
                
                client.add(magnetURI, function (torrent) {
                    clearTimeout(timeout);
 
                    console.log('MagnetView is streaming: ', torrent.infoHash);
                    
                    torrent.files.forEach(function (file) {
                        file.appendTo(container);
                    });
                    
                    torrent.on('download', function (bytes) {
                        progressBar.style.width = (Math.floor(torrent.progress*100)||1)+'%';
                    });                    
                });
            };

            // Creates a new MagnetViewButton
            var MagnetViewButton = function MagnetViewButton(magnetURI) {
                var button = document.createElement('button');
                button.className = 'injected-beam-button';
                button.innerHTML = 'Stream via WebTorrent';
                button.addEventListener('click', function (e) {
                    streamTorrent(magnetURI, this);
                });
                return button;
            };

            // Add a button next to every anchor tag with a magnet link href
            var magnetLinks = document.querySelectorAll("a[href^='magnet:?']");
            if (magnetLinks.length > 0){
                makeModal();
            }
            var link, i = magnetLinks.length;
            while (i--) {
                link = magnetLinks[i];
                link.parentNode.insertBefore(MagnetViewButton(link.href), link.nextSibling);
                link.parentElement.style.overflow='visible';
                link.parentNode.parentElement.style.overflow='visible';
            };

        }
    }, 10);
});