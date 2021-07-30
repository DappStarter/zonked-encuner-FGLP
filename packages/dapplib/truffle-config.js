require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift razor ridge huge hover clog metal genius'; 
let testAccounts = [
"0x98d1c61355917b2ca677c497967e3b290fff6345c249b723c7cfb3d7a9646d60",
"0x49e6613e48bd9424e7ab90904151af651b20963f629b6af060305fd98e6f19a7",
"0xa1aead7221c4eb069b161e76c426a20ee5b28e7d251961693fa8e5f9180cb734",
"0xdf77ae3f837c790d6c8b9d68efe43982c1468d4559891a11d1d4807f79b4918b",
"0x42749c8d2cdfee744d3c58fc3bcd30a6a6e8ed80bbf95b59d75d8aceaffabce2",
"0xabc84bdf2bee7b684e88c4437f83af234bab4cee3152948aa94d88d4684d7edc",
"0xbe1e47daac5d0e45040c676171cb924f3f83dab080154340b44509290de1c45f",
"0x899feb4905353ba8e88e4bc9adec0499ea63371baec95cf9be6ba9e21c396264",
"0xf997b9bccd378e88c5b1c996dca30b4fe9965b303093141b66840adb4aec0882",
"0x14354faaf0f4eca0afe4d3fa2f13f8366f3cdd05a393834634e36ca55edd84b0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


