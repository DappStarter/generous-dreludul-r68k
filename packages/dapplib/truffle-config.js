require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remain mixture grace glove flip tumble'; 
let testAccounts = [
"0xe4b4e923eb98f0eb4f1c0c1c7e9b6054c43006a3afe0919bee47e178731ace72",
"0x5bb986484d13d6457b056c0dfd2e2f68a4e6f74d150c76753137d6c93dee27b7",
"0x313ab6ccb172786b8d52eb1ff4f8770e982d516f461566d0e47aac37a7044a0c",
"0x9b4997231ca6943c5383986aeb6c576dd72ac5139e8f175eb4ea2f17c84f56d2",
"0x69a87d2fd6fba9d785d1aa53a34cda8abf41693b28cfa2e15c74a2af7561b9e3",
"0x0d91f55eb94378a7cc038978a40d1cca67f0b6bb166bc93e345757b525878ad2",
"0xb412c270d4f9dc37b3ef65a6baacec52391143228b4f9e7cf6b86bdf24e85d03",
"0xfcba9a41325d9c8fc129afd19e916c603a59d382832b863ce7b17af7ab562eea",
"0xe4347d896483a5f4691f00761a7a9dfd0df74e1aafd36d5bac894500d640f389",
"0x68f12cf9be2afb819e1e0120fc879a7d0323b001056c81a3121b0d89653598b4"
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


