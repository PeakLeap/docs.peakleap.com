"use strict";(self.webpackChunkdocs_peakleap_com=self.webpackChunkdocs_peakleap_com||[]).push([[7310],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5638:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:2,sidebar_label:"Glossary",id:"glossary",title:"Glossary"},l="Glossary",c={unversionedId:"documentation/glossary",id:"documentation/glossary",title:"Glossary",description:"- Blockchain",source:"@site/docs/documentation/glossary.md",sourceDirName:"documentation",slug:"/documentation/glossary",permalink:"/docs-peakleap.io/docs/documentation/glossary",editUrl:"https://github.com/PeakLeap/docs.peakleap.com/tree/master/docs/documentation/glossary.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Glossary",id:"glossary",title:"Glossary"},sidebar:"docsSidebar",previous:{title:"Settings",permalink:"/docs-peakleap.io/docs/documentation/assessments/edit-settings"}},u={},p=[],h={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"glossary"},"Glossary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Blockchain"),(0,o.kt)("br",null),"\nBlockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system. A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain."),(0,o.kt)("p",{parentName:"li"},"  A blockchain is a public database that is updated and shared across many computers in a network."),(0,o.kt)("p",{parentName:"li"},'  "Block" refers to data and state being stored in consecutive groups known as "blocks". If you send ETH to someone else, the transaction data needs to be added to a block to be successful.'),(0,o.kt)("p",{parentName:"li"},'  "Chain" refers to the fact that each block cryptographically references its parent. In other words, blocks get chained together. The data in a block cannot change without changing all subsequent blocks, which would require the consensus of the entire network.'),(0,o.kt)("p",{parentName:"li"},'  Every computer in the network must agree upon each new block and the chain as a whole. These computers are known as "nodes". Nodes ensure everyone interacting with the blockchain has the same data. To accomplish this distributed agreement, blockchains need a consensus mechanism.'),(0,o.kt)("p",{parentName:"li"},'  Ethereum currently uses a proof-of-work consensus mechanism. This means that anyone who wants to add new blocks to the chain must solve a difficult puzzle that requires a lot of computing power. Solving the puzzle "proves" that you have done the "work" by using computational resources. Doing this is known as mining. Mining is typically brute force trial and error, but successfully adding a block is rewarded in ETH.'),(0,o.kt)("p",{parentName:"li"},"  New blocks are broadcast to the nodes in the network, checked and verified, thus updating the state of the blockchain for everyone.\nSo to summarize, when you send ETH to someone, the transaction must be mined and included in a new block. The updated state is then shared with the entire network."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Blockchain Transaction"),(0,o.kt)("br",null),"\nFor a public blockchain, the decision to add a transaction to the chain is made by consensus. This means that the majority of \u201cnodes\u201d (or computers in the network) must agree that the transaction is valid. The people who own the computers in the network are incentivised to verify transactions through rewards.","  Transactions are cryptographically signed instructions from accounts. An account will initiate a transaction to update the state of the Ethereum network. The simplest transaction is transferring ETH from one account to another.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Course"),(0,o.kt)("br",null),"\nCourse is a unit of teaching that typically, is led by one or more instructors (teachers or professors). A course usually covers an individual subject."),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("strong",{parentName:"p"},"What is a Course content?"),(0,o.kt)("br",null),"\nAny informational material that is required for participation or understanding content such as assigned readings, video recordings, exams, and any other material needed for learning."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Credential"),(0,o.kt)("br",null),"\nCredentials allow you to publish or receive a document protected by blockchain technology."),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("strong",{parentName:"p"},"What are Credentials types?"),(0,o.kt)("br",null)),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Diploma")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Certificate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Degree")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"License")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Badge"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ethereum"),(0,o.kt)("br",null),"\nEthereum is a platform powered by blockchain technology that is best known for its native cryptocurrency, called ether, or ETH, or simply Ethereum. The distributed nature of blockchain technology is what makes the Ethereum platform secure, and that security enables ETH to accrue value.","  Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH or \u039e) is the native cryptocurrency of the platform. Among cryptocurrencies, Ether is second only to Bitcoin in market capitalization.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"EtherScan"),(0,o.kt)("br",null),"\nEtherscan allows users to view the assets held on any public Ethereum wallet address."),(0,o.kt)("p",{parentName:"li"},"  Using Etherscan, enter any Ethereum address into the search box to see the current balance and transaction history of the wallet under consideration. Etherscan will also display any gas fees and smart contracts involving that address."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Infura"),(0,o.kt)("br",null),"\nInfura provides the tools and infrastructure that allow developers to easily take their blockchain application from testing to scaled deployment - with simple, reliable access to Ethereum and IPFS.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Polygon"),(0,o.kt)("br",null),"\nPolygon is a \u201clayer two\u201d or \u201csidechain\u201d scaling solution that runs alongside the Ethereum blockchain \u2014 allowing for speedy transactions and low fees. MATIC is the network's native cryptocurrency, which is used for fees, staking, and more."),(0,o.kt)("p",{parentName:"li"},"  Polygon is a cryptocurrency, with the symbol MATIC, and also a technology platform that enables blockchain networks to connect and scale."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PolygonScan"),(0,o.kt)("br",null),"\nA Fast and Scalable Blockchain Explorer for Polygon, powered by Etherscan! Blockchain explorers are one of the most widely used tools in crypto, drawing data from a blockchain and presenting the data to a user in a searchable and accessible format.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Program"),(0,o.kt)("br",null),"\nPrograms are multiple courses grouped together.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Sentry"),(0,o.kt)("br",null),"\nSentry is cross-platform application monitoring, with a focus on error reporting."),(0,o.kt)("p",{parentName:"li"},'  Sentry is a crash reporting platform that provides you with "real-time insight into production deployments with info to reproduce and fix crashes". It notifies you of exceptions or errors that your users run into while using your app, and organizes them for you on a web dashboard.'))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Smart Contract"),(0,o.kt)("br",null),"\nA smart contract is an agreement between two people in the form of computer code. They run on the blockchain, so they are stored on a public database and cannot be changed. The transactions that happen in a smart contract are processed by the blockchain, which means they can be sent automatically without a third party."),(0,o.kt)("p",{parentName:"li"},"  Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met. They typically are used to automate the execution of an agreement so that all participants can be immediately certain of the outcome, without an intermediary\u2019s involvement or time loss. They can also automate a workflow, triggering the next action when conditions are met."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Verification"),(0,o.kt)("br",null),'\nVerification means "proving the truth" or "confirmation". '),(0,o.kt)("p",{parentName:"li"},'  Each credential that is verified has its own "Verification code". Peak Leap allows you to verify your credentials by "Verification code".'))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Wistia"),(0,o.kt)("br",null),"\nWistia is designed exclusively to serve companies using video on their websites foreducation cpntent, video series, marketing, support, and sales. Essentially, Wistia is ideal for \u201con-site\u201d videos.")))}m.isMDXComponent=!0}}]);