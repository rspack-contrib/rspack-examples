const packageJson = require('./package.json');

const versionArr = packageJson.version.split('-');
const bundleShortVersion = versionArr[0];
const bundleVersion = versionArr[1];

const config = {
  asar: true,
  productName: 'your product name',
  appId: 'your app id',
  directories: {
    output: 'dist',
  },
  // icon: resolve(__dirname, "./icons/icon.icns"),
  asarUnpack: '**\\*.{node,dll}',
  files: ['./release/dist', 'node_modules', 'package.json'],
  mac: {
    // icon: resolve(__dirname, "./icons/icon.icns"),
    target: ['dmg'],
    bundleVersion: bundleVersion,
    bundleShortVersion: bundleShortVersion,
    artifactName: '${productName}-${version}-${arch}.${ext}',
    extendInfo: {
      ElectronTeamID: 'your apple account id',
      ITSAppUsesNonExemptEncryption: 'NO',
    },
    asarUnpack: ['**/*.node'],
  },
  mas: {
    hardenedRuntime: false,
    gatekeeperAssess: false,
    entitlements: 'mas/entitlements.mas.plist',
    entitlementsInherit: 'mas/entitlements.mas.inherit.plist',
    entitlementsLoginHelper: 'mas/entitlements.mas.loginhelper.plist',
    provisioningProfile: 'mas/provisioning.provisionprofile',
  },
  masDev: {
    hardenedRuntime: false,
    gatekeeperAssess: false,
    entitlements: 'mas/entitlements.mas.plist',
    entitlementsInherit: 'mas/entitlements.mas.inherit.plist',
    entitlementsLoginHelper: 'mas/entitlements.mas.loginhelper.plist',
    provisioningProfile: 'your provisioning profile',
  },
  dmg: {
    sign: false,
  },
  win: {
    // icon: resolve(__dirname, "./icons/icon_512x512@2x.png"),
    target: ['nsis'],
    verifyUpdateCodeSignature: false,
    signingHashAlgorithms: ['sha256'],
    signDlls: false,
    requestedExecutionLevel: 'asInvoker',
  },
  nsis: {
    oneClick: false,
    perMachine: false,
    allowToChangeInstallationDirectory: true,
    deleteAppDataOnUninstall: false,
    createDesktopShortcut: true,
    createStartMenuShortcut: true,
    shortcutName: 'your app shortcut name',
  },
};
module.exports = config;
