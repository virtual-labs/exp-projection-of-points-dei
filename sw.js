importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"7a99b63a430d0f2f6614281ba6723fdd","url":"feedback.html"},{"revision":"13abce1ecfaf63f7f233dd703559240e","url":"images/2h-pencil.png"},{"revision":"2da4af32d5f9d0b65c573062389b2e45","url":"images/3h-pencil.png"},{"revision":"1d54d63751f58957985de4fe7ef81f8d","url":"images/assembly.png"},{"revision":"0c17eae22cc570a5c7928c8f06c41125","url":"images/compass.png"},{"revision":"501cf31894d616938ae0678a1f3b0cfb","url":"images/dei.jpg"},{"revision":"b63ea02c196fbb22ef91acc1bf3842b2","url":"images/drawing board.png"},{"revision":"3fb485d360a6c47f83534e7d0b74ffdc","url":"images/exp-step3.png"},{"revision":"c26ce9dc972f956216ec1c37cc62711e","url":"images/exp1Images/1.png"},{"revision":"9e7bb315e46dc58f851acd171fe7e506","url":"images/exp1Images/2.png"},{"revision":"c9565fdc69b7e6c6f67c41eaa69b963b","url":"images/exp1Images/3.png"},{"revision":"c26ce9dc972f956216ec1c37cc62711e","url":"images/exp2Images/1.png"},{"revision":"c4cb607c92d274fe4e7a5d607245d3a5","url":"images/exp2Images/2.png"},{"revision":"2aab16c8cbf3e161c8b56016658f4230","url":"images/exp2Images/3.png"},{"revision":"c26ce9dc972f956216ec1c37cc62711e","url":"images/exp3Images/1.png"},{"revision":"b12c738a7f2814aea63550acc3cf515b","url":"images/exp3Images/2.png"},{"revision":"f28284601dff3090f84c0b8b0975b576","url":"images/exp3Images/3.png"},{"revision":"c26ce9dc972f956216ec1c37cc62711e","url":"images/exp4Images/1.png"},{"revision":"391548cd67ec618966e13123f5afbb38","url":"images/exp4Images/2.png"},{"revision":"92e3969b73090bba2a21195b9fb6ef58","url":"images/exp4Images/3.png"},{"revision":"4373072dffe9ca0d441d3e8e81f5db73","url":"images/h-pencil.png"},{"revision":"96c8615dafdbaf35298156c639e3f93b","url":"images/header.png"},{"revision":"1f7df708f5ce00d05cec4e5e67631fb3","url":"images/instruments.png"},{"revision":"66f254ebb66ea8b708ab1236eda6ac83","url":"images/protector.png"},{"revision":"f02e024e1ac0b8aded2ac728c7ba067b","url":"images/starterImages/3d-clips.png"},{"revision":"ae839a247ddc5508067efbb51bb5c62a","url":"images/starterImages/downClips.png"},{"revision":"1e1e80bd95a2417652ffae6b7bb8d2df","url":"images/starterImages/drafter.png"},{"revision":"30369a410171a43ac81ac6a7683f2c2a","url":"images/starterImages/DRAFTER1.png"},{"revision":"b63ea02c196fbb22ef91acc1bf3842b2","url":"images/starterImages/drawing board.png"},{"revision":"97774410bc0067cdad78d360b21aa200","url":"images/starterImages/sheet.png"},{"revision":"4315055ecf484e5fad77a35791dd0334","url":"images/starterImages/small sheet.png"},{"revision":"631aa2eb78872725797dcc67243a447b","url":"images/starterImages/starter-png.png"},{"revision":"edde4462d0e33f8769e08276e5d528fb","url":"images/starterImages/upClips.png"},{"revision":"48b63a3dc7f03b6e2348313db3165e5a","url":"images/transbox.png"},{"revision":"cbc02139394bc9fcc298036ebb575a2d","url":"index.html"},{"revision":"85ef0513e30efd94e29ba4fd123e8395","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"18ebd8083536659f91d183bc16fee444","url":"posttest.html"},{"revision":"b67aea2c9a3fc9426c793fd9f92d5644","url":"posttest.json"},{"revision":"99b61a733943dd851158a658e64f4b34","url":"pretest.html"},{"revision":"5186ee49c8fff68b471b6fed44dcfe20","url":"pretest.json"},{"revision":"d97e1535a50646dd4bc939e9604c70cd","url":"procedure.html"},{"revision":"1fcd4a0986a5204dad91e2c48e334a91","url":"references.html"},{"revision":"0f2e0ae53b15266215daaaf8678295f4","url":"simulation.html"},{"revision":"5d6df644774ae18776197eae9d614a45","url":"simulation/css/exp1-ids.css"},{"revision":"0158cc95d9858589a4254d5e77ff3f89","url":"simulation/css/exp2-ids.css"},{"revision":"497a16f175a1fe9f7ba2fb39219de760","url":"simulation/css/exp3-ids.css"},{"revision":"497a16f175a1fe9f7ba2fb39219de760","url":"simulation/css/exp4-ids.css"},{"revision":"e38e05dcd8310683dc8e50ea525e228b","url":"simulation/css/experiments-classes.css"},{"revision":"9f60ed8de061bcb5739b4766e153a614","url":"simulation/css/header.css"},{"revision":"1f77cbcd4a7dfff82c88ca1077ad41a3","url":"simulation/css/main-content.css"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"faae1afd7341124c1ab4d88e4dba3efa","url":"simulation/css/starter.css"},{"revision":"9132a06420ad3a99c1056ddc40a909c8","url":"simulation/html/exp-list.html"},{"revision":"2204c75227c520b773f8ae2a5bf0f323","url":"simulation/html/experiments-files/exp1.html"},{"revision":"007c1184dee6e3a766d2a6231d1f2394","url":"simulation/html/experiments-files/exp2.html"},{"revision":"a0a420c863770d14abf15cac2145bf07","url":"simulation/html/experiments-files/exp3.html"},{"revision":"7a87dfa5d2c5dc022ab3643c851b4c2e","url":"simulation/html/experiments-files/exp4.html"},{"revision":"2175ac35b7eae4663117799bbe0dfb16","url":"simulation/html/starter-files/starter1.html"},{"revision":"ffe4054604749ec1917202891a9b2779","url":"simulation/html/starter-files/starter2.html"},{"revision":"2eef90e846e7ff1d41583ff88edcd02f","url":"simulation/html/starter-files/starter3.html"},{"revision":"d66841c48fdb0c8b4828350f54213900","url":"simulation/html/starter-files/starter4.html"},{"revision":"13abce1ecfaf63f7f233dd703559240e","url":"simulation/images/2h-pencil.png"},{"revision":"2da4af32d5f9d0b65c573062389b2e45","url":"simulation/images/3h-pencil.png"},{"revision":"1d54d63751f58957985de4fe7ef81f8d","url":"simulation/images/assembly.png"},{"revision":"0c17eae22cc570a5c7928c8f06c41125","url":"simulation/images/compass.png"},{"revision":"501cf31894d616938ae0678a1f3b0cfb","url":"simulation/images/dei.jpg"},{"revision":"b63ea02c196fbb22ef91acc1bf3842b2","url":"simulation/images/drawing board.png"},{"revision":"3fb485d360a6c47f83534e7d0b74ffdc","url":"simulation/images/exp-step3.png"},{"revision":"c26ce9dc972f956216ec1c37cc62711e","url":"simulation/images/exp1Images/1.png"},{"revision":"9e7bb315e46dc58f851acd171fe7e506","url":"simulation/images/exp1Images/2.png"},{"revision":"c9565fdc69b7e6c6f67c41eaa69b963b","url":"simulation/images/exp1Images/3.png"},{"revision":"c26ce9dc972f956216ec1c37cc62711e","url":"simulation/images/exp2Images/1.png"},{"revision":"c4cb607c92d274fe4e7a5d607245d3a5","url":"simulation/images/exp2Images/2.png"},{"revision":"2aab16c8cbf3e161c8b56016658f4230","url":"simulation/images/exp2Images/3.png"},{"revision":"c26ce9dc972f956216ec1c37cc62711e","url":"simulation/images/exp3Images/1.png"},{"revision":"b12c738a7f2814aea63550acc3cf515b","url":"simulation/images/exp3Images/2.png"},{"revision":"f28284601dff3090f84c0b8b0975b576","url":"simulation/images/exp3Images/3.png"},{"revision":"c26ce9dc972f956216ec1c37cc62711e","url":"simulation/images/exp4Images/1.png"},{"revision":"7eefb898d4d84faaf0e7f3ceffd2a59b","url":"simulation/images/exp4Images/2.png"},{"revision":"92e3969b73090bba2a21195b9fb6ef58","url":"simulation/images/exp4Images/3.png"},{"revision":"4373072dffe9ca0d441d3e8e81f5db73","url":"simulation/images/h-pencil.png"},{"revision":"96c8615dafdbaf35298156c639e3f93b","url":"simulation/images/header.png"},{"revision":"c36b4266d8a2fe8a84af535ec33f8d66","url":"simulation/images/instruments.png"},{"revision":"66f254ebb66ea8b708ab1236eda6ac83","url":"simulation/images/protector.png"},{"revision":"f02e024e1ac0b8aded2ac728c7ba067b","url":"simulation/images/starterImages/3d-clips.png"},{"revision":"ae839a247ddc5508067efbb51bb5c62a","url":"simulation/images/starterImages/downClips.png"},{"revision":"1e1e80bd95a2417652ffae6b7bb8d2df","url":"simulation/images/starterImages/drafter.png"},{"revision":"30369a410171a43ac81ac6a7683f2c2a","url":"simulation/images/starterImages/DRAFTER1.png"},{"revision":"b63ea02c196fbb22ef91acc1bf3842b2","url":"simulation/images/starterImages/drawing board.png"},{"revision":"97774410bc0067cdad78d360b21aa200","url":"simulation/images/starterImages/sheet.png"},{"revision":"4315055ecf484e5fad77a35791dd0334","url":"simulation/images/starterImages/small sheet.png"},{"revision":"631aa2eb78872725797dcc67243a447b","url":"simulation/images/starterImages/starter-png.png"},{"revision":"edde4462d0e33f8769e08276e5d528fb","url":"simulation/images/starterImages/upClips.png"},{"revision":"48b63a3dc7f03b6e2348313db3165e5a","url":"simulation/images/transbox.png"},{"revision":"2d21f4f2aaa33b4fedb0de9cf116f79e","url":"simulation/index.html"},{"revision":"90dccec1ed55129b43b8e8497d1ee9bc","url":"simulation/js/exp1.js"},{"revision":"e49f7fc6f46f5e7e59cddaaf0175dc2b","url":"simulation/js/exp2.js"},{"revision":"0babfb5a32473cc6e6ded8627f031990","url":"simulation/js/exp3.js"},{"revision":"050a767f5366898ee613dff50e899521","url":"simulation/js/exp4.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"66bff1a5343b5a5c8fcc6d846171ceaa","url":"simulation/js/starter.js"},{"revision":"a07f02d175d3e1771cdd35f1f977c3e4","url":"theory.html"},{"revision":"1db14a59149eae558083c23b77671b5b","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );