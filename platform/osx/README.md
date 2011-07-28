# TileMill OSX App

A first pass at a simple debug UI around tilemill as a child process

# Requires

Snow Leopard or Lion
XCode >= 4
Fully build TileMill 0.3.x

# Developer Setup

The app bundle expects the tilemill node sources to live in:

    tilemill.app/Contents/Resources/

Simply copy your tilemill folder there after compiling tilemill.app

# Building

This command will create build/Release/tilemill.app:

    make

# Running

   open build/Release/tilemill.app 
