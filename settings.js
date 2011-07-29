var path = require('path');

// switch to new project layout of upcoming tilemill 0.4.x
var v04_layout = false;

var exports = {
        'port': 8889,
        // TODO: request-specific overrides
        'header_defaults': {
            'Expires': new Date(Date.now() +
                1000 // second
                * 60 // minute
                * 60 // hour
                * 24 // day
                * 365 // year
                )
        }
}

if (v04_layout) {
    var tilemill_home = path.join(process.env.HOME, 'Documents', 'TileMill');
    exports.v04_layout = true;
    exports.tilemill_home = tilemill_home;
    exports.files = tilemill_home;
    exports.local_data = path.join(tilemill_home,'data');;
    exports.mapfile_dir = path.join(tilemill_home,'cache');
    exports.data_dir = path.join(tilemill_home,'cache');
    exports.export_dir = path.join(tilemill_home,'export');
} else {
    var tilemill_home = __dirname;
    exports.v04_layout = false;
    exports.tilemill_home = tilemill_home;
    exports.files = tilemill_home + '/files';
    exports.local_data = tilemill_home + '/files/data';
    exports.mapfile_dir = tilemill_home + '/files/.cache';
    exports.data_dir = tilemill_home + '/files/.cache';
    exports.export_dir = tilemill_home + '/files/export';
}

module.exports = exports;
