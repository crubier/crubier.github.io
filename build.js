import React from 'react';
import ReactDOM from 'react-dom/server';

import App from './src/components/App'

import fs from 'fs';
import _ from 'lodash';

var compiled = _.template(fs.readFileSync('src/index.html','utf8'));

fs.writeFileSync('indexSimple.html',compiled({ 'content': '<div id="root"></div>' }));

fs.writeFileSync('index.html',compiled({ 'content': ReactDOM.renderToString(<App />) }));
