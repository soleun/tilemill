var tilemill_home = __dirname;
// optionally on osx
//var tilemill_home = process.ENV.HOME + '/Documents/TileMill'

module.exports = {
    'port': 8889,
    'tilemill_home':tilemill_home,
    'files': tilemill_home + '/files',
    'mapfile_dir': tilemill_home + '/files/.cache',
    'data_dir': tilemill_home + '/files/.cache',
    'export_dir': tilemill_home + '/export',
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