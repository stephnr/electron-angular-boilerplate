'use strict';

var _ = require('lodash');
var electron = require('electron');
var app = electron.app;
var path = require('path');
var BrowserWindow = electron.BrowserWindow;

// ####################################################
// ####################################################

// Report crashes to our server.
electron.crashReporter.start({
	companyName: 'YourCompany',
	submitURL: 'https://your-domain.com/url-to-submit'
});

var mainWindow = null;
var options = {
	"debug": true,
	"version": "1.0.0",
	"views_dir": "views",
	"root_view": "index.html"
};

options = _.extend({
	// ADDITIONAL CUSTOM SETTINGS
}, options);

// ############################################################################################
// ############################################################################################

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if(process.platform !== 'darwin') { app.quit(); }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL(path.join('file://', __dirname, options.views_dir, options.root_view));
  if(options.debug) { mainWindow.openDevTools(); }
  mainWindow.on('closed', function() { mainWindow = null; });
});

// ############################################################################################
// ############################################################################################
