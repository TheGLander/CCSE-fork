CCSE-fork
=========

Experimental fork of Klattmose's
[Cookie Clicker Script Extender](https://klattmose.github.io/CookieClicker/CCSE-POCs/).

This repository was created from [Klattmose's repository](https://github.com/klattmose/klattmose.github.io/)
by `git filter-branch`ing out everything that's not relevant to `CCSE.js`,
which should explain the potientially weird commit messages.


Features
========

- "Drop-in replacement": This fork of CCSE hides the fact it is a fork from other mods,
so by loading it before any other mods should prevent the official CCSE from being loaded.
It even uses the same `localStorage` slot!

- The CCSE save now contains a copy of the vanilla save.
This means that saving the CCSE save to a file
is enough to save both the vanilla data and the modded data.
Loading that CCSE save then loads the vanilla data too.
This makes it harder for the vanilla save and the CCSE save to be out of sync.

- Rudimentary unit testing, in `test.js`.
