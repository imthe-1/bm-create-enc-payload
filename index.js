var messages = require('bitmessage').messages;
var objects = require('bitmessage').objects;
var Address = require('bitmessage').Address;
var TcpTransport = require('bitmessage-transports').TcpTransport;
var eccrypto = require("eccrypto");

(async () => {
  const from = Address.fromPassphrase('loremipsum1');
  console.log('[check from]', from.encode());
  const toAddr = Address.fromPassphrase('gru');
  console.log('[check toAddr]', toAddr.encPrivateKey.toString('hex'));
  console.log('[check toAddr]', toAddr.encPublicKey.toString('hex'));
  console.log('[check toAddr]', toAddr.encode());
  const encodedMsg = await objects.msg.encodeAsync({
    ttl: 1800,
    from,
    to: toAddr,
    subject: 'Lorem Ipsum',
    message: 'hey there!',
    skipPow: true,
  });
  console.log('[check messages]', encodedMsg);
  console.log('[check messages]', encodedMsg.toString('hex'));
  // const decodedMsg = await objects.msg.decodeAsync(Buffer.from('e9beb4d96f626a6563740000000000000000018c1812a0f6000000000000000000000000638f4616000000020101ff303d6150a6840e7cd10e421a99c9fd02ca00203aa15aeb33c96e34a987030d6d59555fa5d5bfdf1a1a07eb17a676c5719f3ffb0020fe087ea74650ff0ee5b4e2900f815b628bfdc613e157e4ebe063fb20eea6d24b9b7996facd9adc361b1c5c3aa2fab580920eaa757263a89c8fb9a83613672d57a24df0ad2f983823e5f834946221a6edc57b3ee9499ed7546cf5935b4fba88d7fce248c1460ad494e75a987f79791062b58ce07ab4611521ff6ab929e3d5fb54fca74c75960abefa58faa65e1f4b9811e38e352f2073e9e378ae07e3f745fd692cee615b999f8829a1bded21c4488ad087a3e536ef8d679b7b423ec0fa95d6eee3896e52fc9f441d1c9ea4b29c0de78446de58e74d1d05517689f924ff3945cf55fb4775c6501a9bdaaa8b7a0e9b69a5c663b50151f98d065bfcc0a15ef2e7fc94358c7464169fba6bc8363a0208da24f4a83f2c5b5bc5d84d2b7a2daecca873937d305a73bfa3f6e69ef2445f096003b806d932a0da58df5a21716d3af31571'), { identities: toAddr });
  // console.log('[decode msg]', decodedMsg);
  // const e = 'f93afe35ae8f2927583a11cf1e91718602ca0020c101331d019ec38dca9436f9f192817f5de6095aef2559b7ab4acb704c10b9830020638f3679354140b2755b5e7e2e8d1fba1469508fd59e73250cfdf573c58610f1acc166510db713d5b037d6713a7f9dab544004254420155b953ea3e595b581a2b7b98a59408a5c4af6e10b21814eb02e47b0de7a91f7c6e4322713a1101d04aa41815a171e29c1079dc6a246413458d9fb5ea7259d799f92491873d20fc56c36450811948396ec99544614cf8d78438f7f1abb3848b7dc5fa290ef152302fc545f1cafed8b1146665cbdfb065a389cb9fa43b713d89df28e3b9b90de0e8163a79f710c737167bca9d95d6aca8054c510c07308862588ebed560f5b592878cb4f78ac1f48706c5fa54bee0f5f6b962427e337961eb2b3aba978640e31eec8c05c758151119236f08e827b6602743b23867028fa42e500830f43f8c8dd9702b5af0d0f7ef6cfb2c3fead822bf05ba56ccc88cb8114e7a9df79dd4ca7b414a3c827'; // output from python
  // const encPublicKey = '04a60f6cd97ecd16768215ef059ccfbb1840b736bcdb0763872ddfeef4c417d2ec8439383ce68de9a2b30ad44e9f0e56a13fc2895a6e41f7cf3757e46181d32dd0';
  // const encPrivateKey = '2cb5ae4e8cf8c71d1221f5c6c46810b448207cacedd86cc52219c3f107048c10';
  // const dec = await objects.msg.decPayloadTest(encPrivateKey, e);
  // console.log('[dec]', dec);
  // var encObj = encrypted.decode(buf);
  // resolve(eccrypto.decrypt(privateKey, encObj));

})();
// var tcp = new TcpTransport({
//   dnsSeeds: [['bootstrap8444.bitmessage.org', 8444]],
// });

// tcp.bootstrap().then(function (nodes) {
//   var remoteHost = nodes[0][0];
//   var remotePort = nodes[0][1];
//   console.log('Connecting to', nodes[0]);
//   tcp.connect(remotePort, remoteHost);
// });

// tcp.on('established', function (version) {
//   console.log('Connection established to', version.userAgent);

//   tcp.on('message', function (command, payload) {
//     console.log('Got new', command, 'message');
//     var decoded;
//     if (command === 'addr') {
//       decoded = messages.addr.decodePayload(payload);
//       console.log('Got', decoded.addrs.length, 'node addresses');
//     }
//   });
// });
