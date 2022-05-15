"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[393],{7338:(e,t,l)=>{l.r(t),l.d(t,{data:()=>o});const o={key:"v-f61f5c10",path:"/finalizing-setup-(legacy).html",title:"Finalizing Setup (Legacy)",lang:"en-US",frontmatter:{title:"Finalizing Setup (Legacy)",sidebar:!1},excerpt:"",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],filePathRelative:"finalizing-setup-(legacy).md",git:{updatedTime:165219634e4,contributors:[{name:"emiyl",email:"me@emiyl.com",commits:3},{name:"Pk11",email:"epicpkmn11@outlook.com",commits:1}]}}},9735:(e,t,l)=>{l.r(t),l.d(t,{default:()=>Oe});var o=l(6252);const i=(0,o.uE)('<h3 id="required-reading" tabindex="-1"><a class="header-anchor" href="#required-reading" aria-hidden="true">#</a> Required Reading</h3><p>We will now setup applications and plugins such as the following:</p><ul><li><strong>Vita Homebrew Browser</strong> <em>(allows for installing homebrew applications from the internet)</em></li><li><strong>iTLS Installer</strong> <em>(adds TLSv1.2 support in older firmwares for online connection)</em></li><li><strong>NoNpDrm</strong> <em>(allows for encrypted games and applications to be used)</em></li><li><strong>0syscall6</strong> <em>(allows using games and applications that require higher firmware versions)</em></li><li><strong>DownloadEnabler</strong> <em>(allows any file type to be downloaded with the browser)</em></li><li><strong>shellbat</strong> <em>(displays exact battery percentage in the status bar)</em></li><li><strong>pngshot</strong> <em>(improves the built-in screenshot utility)</em></li><li><strong>PSVshell</strong> <em>(allows overclocking the PSVita for better performances as well as showing CPU usage and fps counter)</em></li></ul>',3),n=(0,o.Uk)("In order to install the necessary "),r=(0,o._)("code",null,".vpk",-1),a=(0,o.Uk)(" (content package) file on your device, we use the "),s={href:"https://wikipedia.org/wiki/File_Transfer_Protocol",target:"_blank",rel:"noopener noreferrer"},c=(0,o.Uk)("File Transfer Protocol (FTP)"),d=(0,o.Uk)(" to copy the files to your device's memory card."),h=(0,o._)("h3",{id:"what-you-need",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#what-you-need","aria-hidden":"true"},"#"),(0,o.Uk)(" What You Need")],-1),u=(0,o.Uk)("An FTP Client such as "),p={href:"https://winscp.net/",target:"_blank",rel:"noopener noreferrer"},m=(0,o.Uk)("WinSCP"),f=(0,o.Uk)(" or "),g={href:"https://cyberduck.io/",target:"_blank",rel:"noopener noreferrer"},k=(0,o.Uk)("CyberDuck"),b=(0,o._)("li",null,[(0,o._)("a",{href:"/assets/files/config.txt"},"config.txt")],-1),_=(0,o.Uk)("The latest release of "),U={href:"https://github.com/devnoname120/vhbb/releases/latest/",target:"_blank",rel:"noopener noreferrer"},w=(0,o.Uk)("Vita Homebrew Browser"),y=(0,o.Uk)("The latest release of "),S={href:"https://github.com/SKGleba/iTLS-Enso/releases/latest/",target:"_blank",rel:"noopener noreferrer"},v=(0,o.Uk)("iTLS-Enso"),T=(0,o.Uk)("The latest release of "),P={href:"https://github.com/TheOfficialFloW/NoNpDrm/releases/latest",target:"_blank",rel:"noopener noreferrer"},W=(0,o.Uk)("NoNpDrm"),x=(0,o.Uk)("The latest release of "),E={href:"https://github.com/SKGleba/0syscall6/releases/latest",target:"_blank",rel:"noopener noreferrer"},I=(0,o.Uk)("0syscall6"),V=(0,o.Uk)("The latest release of "),N={href:"https://github.com/TheOfficialFloW/VitaTweaks/releases/tag/DownloadEnabler",target:"_blank",rel:"noopener noreferrer"},F=(0,o.Uk)("DownloadEnabler"),L=(0,o.Uk)("The latest release of "),q={href:"https://github.com/nowrep/vita-shellbat/releases/latest",target:"_blank",rel:"noopener noreferrer"},C=(0,o.Uk)("shellbat"),D=(0,o.Uk)("The latest release of "),B={href:"https://github.com/xyzz/pngshot/releases/latest",target:"_blank",rel:"noopener noreferrer"},A=(0,o.Uk)("pngshot"),R=(0,o.Uk)("The latest release of "),O={href:"https://github.com/Electry/PSVshell/releases/latest",target:"_blank",rel:"noopener noreferrer"},z=(0,o.Uk)("PSVshell"),H=(0,o._)("h3",{id:"instructions",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#instructions","aria-hidden":"true"},"#"),(0,o.Uk)(" Instructions")],-1),Y=(0,o._)("h4",{id:"section-i-prep-work",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#section-i-prep-work","aria-hidden":"true"},"#"),(0,o.Uk)(" Section I - Prep Work")],-1),G=(0,o._)("li",null,"Launch the VitaShell application",-1),K=(0,o.Uk)("Press "),M=(0,o.Uk)(" to open the VitaShell settings"),Z=(0,o.Uk)("Press "),X=(0,o.Uk)(' on "SELECT button" to change the mode to "FTP" '),j=(0,o._)("ul",null,[(0,o._)("li",null,"You cannot use USB file transfer for this section")],-1),J=(0,o.Uk)("Press "),Q=(0,o.Uk)(" to close the VitaShell settings"),$=(0,o.Uk)("Press "),ee=(0,o.Uk)(" to enable FTP access on your device"),te=(0,o.uE)("<li>Open your FTP client on your computer</li><li>Enter the IP Address and Port displayed on your device</li><li>Using your FTP client, navigate to <code>ux0:</code><ul><li>The <code>ux0:</code> partition corresponds to the memory card of your device (on the PS Vita 1000, this partition will always be the external memory card; on the PS Vita 2000 and PS TV, this partition will either be the external memory card if one is inserted, or the built-in memory card otherwise)</li><li>The <code>ur0:</code> partition corresponds to the internal system memory which is always present on all devices (on the PS Vita 2000 and PS TV, this is <em>not</em> the same as the built-in memory card!)</li></ul></li><li>Delete the <code>tai</code> folder if it exists</li><li>Navigate to the <code>data/</code> folder</li><li>Transfer <code>VitaHBBrowser.vpk</code> to the <code>data/</code> folder</li><li>Transfer <code>iTLS-Enso.vpk</code> to the <code>data/</code> folder</li><li>Navigate to <code>ur0:</code> -&gt; <code>tai/</code></li><li>Transfer <code>config.txt</code> to the <code>tai/</code> folder</li>",9),le=(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Uk)("Overwrite (replace) the existing "),(0,o._)("code",null,"config.txt"),(0,o.Uk)(" file")])],-1),oe=(0,o.uE)("<li>Transfer <code>nonpdrm.skprx</code> to the <code>tai/</code> folder</li><li>Transfer <code>0syscall6.skprx</code> to the <code>tai/</code> folder</li><li>Transfer <code>download_enabler.suprx</code> to the <code>tai/</code> folder</li><li>Transfer <code>shellbat.suprx</code> to the <code>tai/</code> folder</li><li>Transfer <code>pngshot.suprx</code> to the <code>tai/</code> folder</li><li>Transfer <code>PSVshell.skprx</code> to the <code>tai/</code> folder</li>",6),ie=(0,o.Uk)("Press "),ne=(0,o.Uk)(" on your device to close the FTP connection "),re=(0,o.Uk)("For more information on plugins and their installation, read "),ae={href:"https://samilops2.gitbook.io/vita-troubleshooting-guide/plugins-related-problem/error-when-using-autoplugin",target:"_blank",rel:"noopener noreferrer"},se=(0,o.Uk)("this webpage"),ce=(0,o._)("h4",{id:"section-ii-installing-homebrew-applications",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#section-ii-installing-homebrew-applications","aria-hidden":"true"},"#"),(0,o.Uk)(" Section II - Installing homebrew applications")],-1),de=(0,o._)("li",null,"Launch the VitaShell application",-1),he=(0,o._)("li",null,[(0,o.Uk)("Navigate to "),(0,o._)("code",null,"ux0:"),(0,o.Uk)(" -> "),(0,o._)("code",null,"data/")],-1),ue=(0,o.Uk)("Press "),pe=(0,o.Uk)(" to open the side menu"),me=(0,o.Uk)("Press "),fe=(0,o.Uk)(' on "Mark all"'),ge=(0,o.Uk)("Press "),ke=(0,o.Uk)(" to open the side menu again"),be=(0,o.Uk)("Press "),_e=(0,o.Uk)(' on "More"'),Ue=(0,o.Uk)("Press "),we=(0,o.Uk)(' on "Install all"'),ye=(0,o.Uk)("Press "),Se=(0,o.Uk)(" to confirm the install"),ve=(0,o.Uk)("Press "),Te=(0,o.Uk)(" to confirm the install again when prompted"),Pe=(0,o._)("h4",{id:"section-iii-installing-itls",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#section-iii-installing-itls","aria-hidden":"true"},"#"),(0,o.Uk)(" Section III - Installing iTLS")],-1),We=(0,o._)("li",null,"Open the iTLS-Enso application",-1),xe=(0,o.Uk)("Press "),Ee=(0,o.Uk)(' on "Install the full iTLS package" '),Ie=(0,o._)("ul",null,[(0,o._)("li",null,'If not on HENkaku Ensō, select "Install the iTLS compat module (web-browser)" instead')],-1),Ve=(0,o._)("li",null,"Wait for your device to reboot",-1),Ne=(0,o.uE)('<h4 id="section-iv-blocking-updates" tabindex="-1"><a class="header-anchor" href="#section-iv-blocking-updates" aria-hidden="true">#</a> Section IV - Blocking Updates</h4><ol><li>Launch the Settings application</li><li>Navigate to <code>System</code> -&gt; <code>Auto-Start Settings</code></li><li>Uncheck the <code>Download Update File for System Sofwtare</code></li><li>Close the Settings application</li></ol><h4 id="section-v-psn-access" tabindex="-1"><a class="header-anchor" href="#section-v-psn-access" aria-hidden="true">#</a> Section V - PSN Access</h4><ol><li>Launch the Settings application</li><li>Navigate to <code>HENkaku Settings</code></li><li>Check &quot;Enable PSN spoofing&quot;</li><li>Check &quot;Enable Version Spoofing&quot;</li><li>Navigate to &quot;Spoofed Version&quot;</li><li>Enter &quot;3.74&quot; into the box <ul><li>Should a new firmware version be released in the future, you must change the spoofed version to match in order to access PSN</li></ul></li><li>Close the Settings application</li></ol><hr>',5),Fe={class:"custom-container tip"},Le=(0,o._)("p",{class:"custom-container-title"},"TIP",-1),qe=(0,o.Uk)("You can browse for new homebrew applications on "),Ce={href:"https://vitadb.rinnegatamante.it/",target:"_blank",rel:"noopener noreferrer"},De=(0,o.Uk)("VitaDB"),Be=(0,o.Uk)("."),Ae=(0,o.uE)('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>It is <em>not</em> recommended to make modifications to your Custom Firmware installation by installing homebrew applications intended for advanced users (such as &quot;Enso EX&quot;). Doing so without fully understanding the system can lead to a BRICK!</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>For information on replacing your Sony memory card with alternative storage (such as a microSD card or USB drive), check out the <a href="yamt">YAMT</a> page.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>For information on installing CFW to the built-in PSP emulator, check out the <a href="adrenaline">Adrenaline</a> page.</p></div>',3),Re={},Oe=(0,l(3744).Z)(Re,[["render",function(e,t){const l=(0,o.up)("OutboundLink"),Re=(0,o.up)("Btn");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,(0,o._)("p",null,[n,r,a,(0,o._)("a",s,[c,(0,o.Wm)(l)]),d]),h,(0,o._)("ul",null,[(0,o._)("li",null,[u,(0,o._)("a",p,[m,(0,o.Wm)(l)]),f,(0,o._)("a",g,[k,(0,o.Wm)(l)])]),b,(0,o._)("li",null,[_,(0,o._)("a",U,[w,(0,o.Wm)(l)])]),(0,o._)("li",null,[y,(0,o._)("a",S,[v,(0,o.Wm)(l)])]),(0,o._)("li",null,[T,(0,o._)("a",P,[W,(0,o.Wm)(l)])]),(0,o._)("li",null,[x,(0,o._)("a",E,[I,(0,o.Wm)(l)])]),(0,o._)("li",null,[V,(0,o._)("a",N,[F,(0,o.Wm)(l)])]),(0,o._)("li",null,[L,(0,o._)("a",q,[C,(0,o.Wm)(l)])]),(0,o._)("li",null,[D,(0,o._)("a",B,[A,(0,o.Wm)(l)])]),(0,o._)("li",null,[R,(0,o._)("a",O,[z,(0,o.Wm)(l)])])]),H,Y,(0,o._)("ol",null,[G,(0,o._)("li",null,[K,(0,o.Wm)(Re,{btn:"START"}),M]),(0,o._)("li",null,[Z,(0,o.Wm)(Re,{btn:"confirm"}),X,j]),(0,o._)("li",null,[J,(0,o.Wm)(Re,{btn:"cancel"}),Q]),(0,o._)("li",null,[$,(0,o.Wm)(Re,{btn:"SELECT"}),ee]),te]),le,(0,o._)("ol",null,[oe,(0,o._)("li",null,[ie,(0,o.Wm)(Re,{btn:"cancel"}),ne,(0,o._)("ul",null,[(0,o._)("li",null,[re,(0,o._)("a",ae,[se,(0,o.Wm)(l)])])])])]),ce,(0,o._)("ol",null,[de,he,(0,o._)("li",null,[ue,(0,o.Wm)(Re,{btn:"triangle"}),pe]),(0,o._)("li",null,[me,(0,o.Wm)(Re,{btn:"confirm"}),fe]),(0,o._)("li",null,[ge,(0,o.Wm)(Re,{btn:"triangle"}),ke]),(0,o._)("li",null,[be,(0,o.Wm)(Re,{btn:"confirm"}),_e]),(0,o._)("li",null,[Ue,(0,o.Wm)(Re,{btn:"confirm"}),we]),(0,o._)("li",null,[ye,(0,o.Wm)(Re,{btn:"confirm"}),Se]),(0,o._)("li",null,[ve,(0,o.Wm)(Re,{btn:"confirm"}),Te])]),Pe,(0,o._)("ol",null,[We,(0,o._)("li",null,[xe,(0,o.Wm)(Re,{btn:"cross"}),Ee,Ie]),Ve]),Ne,(0,o._)("div",Fe,[Le,(0,o._)("p",null,[qe,(0,o._)("a",Ce,[De,(0,o.Wm)(l)]),Be])]),Ae],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{const l=e.__vccOpts||e;for(const[e,o]of t)l[e]=o;return l}}}]);