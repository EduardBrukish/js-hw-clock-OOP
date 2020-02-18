'use strict'

import { Clock } from './clock.js';

import { Tabs } from './tabs.js';

import { Stopwatch } from './stopwatch.js';

let clock = new Clock();
let tabs = new Tabs();
let stopwatch = new Stopwatch();

clock.run();
tabs.init();
stopwatch.init();

export { clock, stopwatch }