// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.webNavigation.onDOMContentLoaded.addListener(function(details) {
	chrome.tabs.getAllInWindow(null, function(tabs){
		var tabExecute = [],
			tabsCount = tabs.length;

		for (var i = tabsCount; i--;) {

			if(
				tabs[i].url.indexOf( "anitube" ) != -1 && 
				tabs[i].url.indexOf( "video" ) != -1 && 
				tabExecute.indexOf(tabs[i].id) == -1
			){
				chrome.tabs.executeScript(tabs[i].id, { file: "execute.js" });
				tabExecute.push(tabs[i].id);
			}
		}
	});
});