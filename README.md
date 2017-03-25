<h1 align="center">
  <br>
  <a href="https://rationalcoding.github.io/MagnetView/"><img src="https://s15.postimg.org/iqi10yj8b/icon.png" alt="WebTorrent" width="200"></a>
  <br>
  MagnetView
  <br>
  <br>
</h1>

<h4 align="center">Embed <a href = "https://github.com/feross/webtorrent" >WebTorrent</a> directly into tracker sites.</h4>
<br>

Embeds a WebTorrent client into any tracker site. Click the button next to the magnet link and play!

[Demo](https://rationalcoding.github.io/MagnetView/) *(you do not need the extension to try it out!)*

## Installation
MagnetView is still in development, so you'll have to manually install it for now.  
```
git clone https://github.com/RationalCoding/MagnetView
-> Go to chrome://extensions/
-> Enable "Developer Mode"
-> Click "Load Unpacked Extension"
-> Choose the folder where you cloned MagnetView.
-> Enjoy!
```

### Limitations
This extension does not use a hybrid WebTorrent peer, so *you'll only be able to connect to other WebTorrent peers.*  
Many magnet links will fail because of this. Please use [WebTorrent Desktop](https://webtorrent.io/desktop/) to help solve this issue.
