# MagnetView
<img src="https://s15.postimg.org/iqi10yj8b/icon.png" width="300"><br><br>
A Chrome Extension to **embed the [WebTorrent](https://github.com/feross/webtorrent) stream player directly into tracker sites.** 

Simply install the Chrome extension (or use another way to inject the stylesheet/scripts), and all magnet links will have a button to instantly stream via WebTorrent. Clicking this button will fetch the torrent and play/download any media.  

[Demo](https://rationalcoding.github.io/MagnetView/) *(you do not need the extension to try it out!)*

###Limitations
This extension does not use a hybrid WebTorrent peer, so *you'll only be able to connect to other WebTorrent peers.*  
Many magnet links will fail because of this. Please use [WebTorrent Desktop](https://webtorrent.io/desktop/) to help solve this issue.
