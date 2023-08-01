try{
var m=__STORYBOOKADDONS__,{addons:r,types:u,mockChannel:g}=__STORYBOOKADDONS__;var h=__STORYBOOKTHEMING__,{CacheProvider:j,ClassNames:O,Global:v,ThemeProvider:T,background:x,color:B,convert:E,create:R,createCache:I,createGlobal:N,createReset:S,css:C,darken:D,ensure:A,ignoreSsrWarning:G,isPropValid:P,jsx:w,keyframes:K,lighten:L,styled:V,themes:t,typography:Y,useTheme:q,withTheme:H}=__STORYBOOKTHEMING__;var n={name:"@tririga/tririga-react-components",version:"1.5.0",description:"",author:"",license:"IPL-1.0",main:"lib/index.js",module:"es/index.js",bin:{"tri-copy-messages":"bin/tri-copy-messages"},scripts:{clean:"rimraf lib es scss messages",build:"npm run clean && npm run build:es && npm run build:commonjs && npm run copy:scss && npm run copy:messages","build:es":'cross-env BABEL_ENV=es babel src --out-dir es --ignore "src/*/stories/*","src/*/tests/*"--source-maps',"build:commonjs":'cross-env BABEL_ENV=commonjs babel src --out-dir lib --ignore "src/*/stories/*","src/*/tests/*" --source-maps',"copy:scss":'copyfiles -e "src/**/*.stories.scss" "src/**/*.scss" -u 1 scss',"copy:messages":'copyfiles "src/**/*.messages.json" -u 3 messages',prepare:"npm run build",storybook:"storybook dev -p 6006","build-storybook":"storybook build",lint:"./node_modules/.bin/eslint src","lint-fix":"./node_modules/.bin/eslint --fix src --ext .js","pretty-quick":"pretty-quick",test:"npm run clean && cross-env NODE_TLS_REJECT_UNAUTHORIZED=0 jest --runInBand","test:debug":"node --inspect node_modules/.bin/jest --runInBand"},dependencies:{"@carbon/icon-helpers":"^10.7.0","@carbon/icons":"^10.10.0","@carbon/react":"^1.29.1","@tinymce/tinymce-react":"^4.3.0",classnames:"^2.3.2",hammerjs:"^2.0.8","hoist-non-react-statics":"^3.3.2",joi:"^17.9.2","memoize-one":"^6.0.0","moment-timezone":"^0.5.43","react-device-detect":"^2.2.3","react-prop-types":"^0.4.0",tinymce:"^6.4.2"},peerDependencies:{"@babel/runtime":"^7.21.5","prop-types":"^15.5.4",react:"^18.0.0","react-dom":"^18.0.0"},devDependencies:{"@babel/cli":"^7.21.5","@babel/core":"^7.21.8","@babel/eslint-parser":"7.21.8","@babel/plugin-proposal-class-properties":"^7.18.6","@babel/plugin-transform-runtime":"^7.21.4","@babel/preset-env":"^7.21.5","@babel/preset-react":"^7.18.6","@storybook/addon-essentials":"^7.0.12","@storybook/addon-interactions":"^7.0.12","@storybook/addon-links":"^7.0.12","@storybook/addons":"^7.0.12","@storybook/addon-docs":"^7.0.12","@storybook/blocks":"^7.0.12","@storybook/react":"^7.0.12","@storybook/react-webpack5":"^7.0.12","@storybook/testing-library":"0.1.0","@storybook/theming":"^7.0.12","babel-jest":"^29.5.0","babel-loader":"^9.1.2",copyfiles:"^2.4.1","core-js":"^3.30.2","cross-env":"^7.0.3","css-loader":"^6.7.3",dotenv:"^16.0.3",eslint:"^8.40.0","eslint-config-prettier":"^8.8.0","eslint-config-standard":"^17.0.0","eslint-config-standard-react":"^13.0.0","eslint-plugin-import":"^2.27.5","eslint-plugin-jest":"^27.2.1","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^6.1.1","eslint-plugin-react":"^7.32.2","gh-pages":"^5.0.0",husky:"^8.0.3",jest:"^29.5.0","node-fetch":"^3.3.1",prettier:"^2.8.8","pretty-quick":"^3.1.3",react:"^18.2.0","react-dom":"^18.2.0","react-scripts":"^5.0.1","remark-gfm":"^3.0.1",rimraf:"^5.0.0",sass:"^1.62.1","sass-loader":"^13.2.2",storybook:"^7.0.12","style-loader":"^3.3.2"},files:["lib","es","scss","images","messages","TriForgeViewer"],browserslist:["defaults"],publishConfig:{access:"public"},prettier:{tabWidth:4,singleQuote:!1,bracketSpacing:!0}};r.setConfig({theme:{...t.light,brandTitle:`TRIRIGA React Components v${n.version}`}});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.js.map
