(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return h}));var n=a(3),o=a(7),l=(a(0),a(117)),r=a(127),s=a(128),b={id:"installation",title:"Installation",sidebar_label:"\ud83d\ude80 Installation"},i={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"1. Setup your terminal",source:"@site/docs/installation.mdx",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/installation.mdx",version:"current",sidebar_label:"\ud83d\ude80 Installation",sidebar:"docs",previous:{title:"Upgrading",permalink:"/docs/upgrading"},next:{title:"Configuration",permalink:"/docs/configure"}},c=[{value:"1. Setup your terminal",id:"1-setup-your-terminal",children:[]},{value:"2. Install Oh my Posh",id:"2-install-oh-my-posh",children:[]},{value:"3. Replace your existing prompt",id:"3-replace-your-existing-prompt",children:[]},{value:"5. Next steps",id:"5-next-steps",children:[]}],p={toc:c};function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"1-setup-your-terminal"},"1. Setup your terminal"),Object(l.b)(r.a,{defaultValue:"windows",groupId:"env",values:[{label:"windows",value:"windows"},{label:"macOS",value:"macos"},{label:"unix",value:"unix"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(l.b)("h4",{id:"terminal"},"Terminal"),Object(l.b)("p",null,"While Oh my Posh works on the standard terminal, we advise using the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/microsoft/terminal"},"Windows Terminal"),".")),Object(l.b)(s.a,{value:"macos",mdxType:"TabItem"},Object(l.b)("h4",{id:"terminal-1"},"Terminal"),Object(l.b)("p",null,"As the standard terminal has issues displaying the ANSI characters correctly, we advise using\n",Object(l.b)("a",{parentName:"p",href:"https://www.iterm2.com/"},"iTerm2")," or any other modern day MacOS terminal that supports ANSI characters.")),Object(l.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(l.b)("h4",{id:"terminal-2"},"Terminal"),Object(l.b)("p",null,"Oh my Posh uses ANSI color codes under the hood, these should work in every terminal,\nbut you may have to set the environment variable ",Object(l.b)("inlineCode",{parentName:"p"},"$TERM")," to ",Object(l.b)("inlineCode",{parentName:"p"},"xterm-256color")," for it to work."))),Object(l.b)("h3",{id:"2-install-oh-my-posh"},"2. Install Oh my Posh"),Object(l.b)(r.a,{defaultValue:"powershell",groupId:"env",values:[{label:"powershell",value:"powershell"},{label:"windows",value:"windows"},{label:"macOS",value:"macos"},{label:"unix",value:"unix"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"powershell",mdxType:"TabItem"},Object(l.b)("p",null,"A ",Object(l.b)("a",{parentName:"p",href:"https://www.powershellgallery.com/packages/oh-my-posh"},"Powershell")," module is available for easy installation."),Object(l.b)("h4",{id:"installation"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},"Install-Module oh-my-posh -Scope CurrentUser -AllowPrerelease\n")),Object(l.b)("p",null,"If you wish to install for all users in a linux environment, you will need to install from an elevate session\nof powershell.  You will also need to import the module one time from the elevated session in order to set the\nexecutable permissions correctly."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},"sudo pwsh\nInstall-Module oh-my-posh -Scope AllUsers -AllowPrerelease\nImport-Module oh-my-posh\n")),Object(l.b)("h4",{id:"usage"},"Usage"),Object(l.b)("h5",{id:"show-all-themes"},"Show all themes"),Object(l.b)("p",null,"To display every available theme in the current directory, use the following\ncmdlet."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},"Get-PoshThemes\n"))),Object(l.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(l.b)("p",null,"A ",Object(l.b)("a",{parentName:"p",href:"https://scoop.sh/"},"Scoop")," package is available for easy installation."),Object(l.b)("h4",{id:"installation-1"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},"scoop install https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/oh-my-posh.json\n")),Object(l.b)("p",null,"This installs a couple of things:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"oh-my-posh.exe")," - Windows executable, added to your ",Object(l.b)("inlineCode",{parentName:"li"},"$PATH")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"oh-my-posh-wsl")," - Linux executable, added to your ",Object(l.b)("inlineCode",{parentName:"li"},"$PATH")," for use in the WSL"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"themes")," - The latest Oh my Posh themes")),Object(l.b)("p",null,"If you want to use a standard theme, you can find them in ",Object(l.b)("inlineCode",{parentName:"p"},"~\\scoop\\apps\\oh-my-posh\\current\\themes\\"),",\nreferencing them as such\nwill always keep them compatible with the binary when updating Oh my Posh."),Object(l.b)("h4",{id:"preview-the-themes"},"Preview the themes"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},'Get-ChildItem -Path "$(scoop prefix oh-my-posh)/themes/*" -Include \'*.omp.json\' | Sort-Object Name | ForEach-Object -Process {\n    $esc = [char]27\n    Write-Host ""\n    Write-Host "$esc[1m$($_.BaseName)$esc[0m"\n    Write-Host ""\n    & "C:\\tools\\oh-my-posh.exe" -config $($_.FullName) -pwd $PWD\n    Write-Host ""\n}\n')),Object(l.b)("h4",{id:"update"},"Update"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},"scoop update oh-my-posh\n"))),Object(l.b)(s.a,{value:"macos",mdxType:"TabItem"},Object(l.b)("p",null,"A ",Object(l.b)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")," formula is available for easy installation."),Object(l.b)("h4",{id:"installation-2"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"brew tap jandedobbeleer/oh-my-posh\nbrew install oh-my-posh\n")),Object(l.b)("p",null,"This installs two things:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"oh-my-posh")," - Executable, added to ",Object(l.b)("inlineCode",{parentName:"li"},"/usr/local/bin")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"themes")," - The latest Oh my Posh themes")),Object(l.b)("p",null,"If you want to use a standard theme, you can find them in ",Object(l.b)("inlineCode",{parentName:"p"},"$(brew --prefix oh-my-posh)/themes"),", referencing them as such\nwill always keep them compatible with the binary when updating Oh my Posh."),Object(l.b)("h4",{id:"preview-the-themes-1"},"Preview the themes"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'for file in $(brew --prefix oh-my-posh)/themes/*.omp.json; do echo "$file\\n"; oh-my-posh --config $file --shell universal; echo "\\n"; done;\n')),Object(l.b)("h4",{id:"update-1"},"Update"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"brew upgrade oh-my-posh\n"))),Object(l.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(l.b)("h4",{id:"installation-3"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"sudo wget https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/posh-linux-amd64 -O /usr/local/bin/oh-my-posh\nsudo chmod +x /usr/local/bin/oh-my-posh\n")),Object(l.b)("h4",{id:"download-the-themes"},"Download the themes"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/.poshthemes\nwget https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/themes.zip -O ~/.poshthemes/themes.zip\nunzip ~/.poshthemes/themes.zip -d ~/.poshthemes\nchmod u+rw ~/.poshthemes/*.json\nrm ~/.poshthemes/themes.zip\n")),Object(l.b)("h4",{id:"preview-the-themes-2"},"Preview the themes"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'for file in ~/.poshthemes/*.omp.json; do echo "$file\\n"; oh-my-posh --config $file --shell universal; echo "\\n"; done;\n')))),Object(l.b)("h3",{id:"3-replace-your-existing-prompt"},"3. Replace your existing prompt"),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"If you have no idea which shell you're currently using, Oh my Posh has a utility switch that can you tell you (not relevant\nfor the Powershell module)."))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"oh-my-posh --print-shell\n")),Object(l.b)(r.a,{defaultValue:"powershell",groupId:"env",values:[{label:"powershell",value:"powershell"},{label:"zsh",value:"zsh"},{label:"bash",value:"bash"},{label:"fish",value:"fish"},{label:"nu",value:"nu"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"powershell",mdxType:"TabItem"},Object(l.b)("p",null,"Edit ",Object(l.b)("inlineCode",{parentName:"p"},"$PROFILE")," in your preferred PowerShell version and add the following line."),Object(l.b)(r.a,{defaultValue:"windows",groupId:"env",values:[{label:"module",value:"powershell"},{label:"macOS",value:"macos"},{label:"windows",value:"windows"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"powershell",mdxType:"TabItem"},Object(l.b)("p",null,"Autocompletion is available so it will loop through all available themes."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},"Set-PoshPrompt -Theme jandedobbeleer\n"))),Object(l.b)(s.a,{value:"macos",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},'Invoke-Expression (oh-my-posh --init --shell pwsh --config "$(brew --prefix oh-my-posh)/themes/jandedobbeleer.omp.json")\n'))),Object(l.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},'Invoke-Expression (oh-my-posh --init --shell pwsh --config "$(scoop prefix oh-my-posh)/themes/jandedobbeleer.omp.json")\n')))),Object(l.b)("p",null,"Once added, reload your profile for the changes to take effect."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},". $profile\n"))),Object(l.b)(s.a,{value:"zsh",mdxType:"TabItem"},Object(l.b)("p",null,"Add the following to ",Object(l.b)("inlineCode",{parentName:"p"},"~/.zshrc"),":"),Object(l.b)(r.a,{defaultValue:"macos",groupId:"env",values:[{label:"macOS",value:"macos"},{label:"unix",value:"unix"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"macos",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'eval "$(oh-my-posh --init --shell zsh --config $(brew --prefix oh-my-posh)/themes/jandedobbeleer.omp.json)"\n'))),Object(l.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'eval "$(oh-my-posh --init --shell zsh --config ~/.poshthemes/jandedobbeleer.omp.json)"\n')))),Object(l.b)("p",null,"Once added, reload your profile for the changes to take effect."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"source ~/.zshrc\n"))),Object(l.b)(s.a,{value:"bash",mdxType:"TabItem"},Object(l.b)("p",null,"Add the following to ",Object(l.b)("inlineCode",{parentName:"p"},"~/.bashrc")," (or ",Object(l.b)("inlineCode",{parentName:"p"},"~/.profile")," on MacOS):"),Object(l.b)(r.a,{defaultValue:"macos",groupId:"env",values:[{label:"macOS",value:"macos"},{label:"unix",value:"unix"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"macos",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'eval "$(oh-my-posh --init --shell bash --config $(brew --prefix oh-my-posh)/themes/jandedobbeleer.omp.json)"\n'))),Object(l.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'eval "$(oh-my-posh --init --shell bash --config ~/.poshthemes/jandedobbeleer.omp.json)"\n')))),Object(l.b)("p",null,"Once added, reload your profile for the changes to take effect."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},". ~/.bashrc\n")),Object(l.b)("p",null,"Or, when using ",Object(l.b)("inlineCode",{parentName:"p"},"~/.profile"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},". ~/.profile\n"))),Object(l.b)(s.a,{value:"fish",mdxType:"TabItem"},Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"It's advised to be on the latest version of fish. Versions below 3.1.2 have issues displaying the prompt."))),Object(l.b)("p",null,"Initialize Oh my Posh in ",Object(l.b)("inlineCode",{parentName:"p"},"~/.config/fish/config.fish"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"oh-my-posh --init --shell fish --config ~/.poshthemes/jandedobbeleer.omp.json | source\n")),Object(l.b)("p",null,"Once added, reload your config for the changes to take effect."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},". ~/.config/fish/config.fish\n"))),Object(l.b)(s.a,{value:"nu",mdxType:"TabItem"},Object(l.b)("p",null,"Set the prompt and restart nu shell:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'config set prompt  "= `{{$(oh-my-posh --config ~/.poshthemes/jandedobbeleer.omp.json | str collect)}}`"\n')),Object(l.b)("p",null,"Restart nu shell for the changes to take effect."))),Object(l.b)("h3",{id:"5-next-steps"},"5. Next steps"),Object(l.b)("p",null,"At this point you're good to go. The ",Object(l.b)("inlineCode",{parentName:"p"},"jandedobbeleer.omp.json")," theme displays most common use-cases\nin your prompt so 9/10 you'll be more than happy with it. However, if you want to explore additional\nfunctionality, going through the additional steps below will help you get started."),Object(l.b)("h4",{id:"change-the-theme"},"Change the theme"),Object(l.b)("p",null,"We downloaded all the themes and set ",Object(l.b)("inlineCode",{parentName:"p"},"jandedobbeleer.omp.json")," as the one to use.\nHowever, there are a lot more to be discovered and maybe there are some you like better."),Object(l.b)("p",null,"Adjust your configuration to use any other theme from the folder we created (",Object(l.b)("inlineCode",{parentName:"p"},"~/.poshthemes"),")."),Object(l.b)("h4",{id:"override-the-theme-settings"},"Override the theme settings"),Object(l.b)("p",null,"Maybe there's a theme you like, but you don't fancy the colors. Or, maybe there's a segment you\nwant to tweak/add, or replace some of the icons with a different one. Whatever the case, read through all\navailable options first, by starting with the ",Object(l.b)("a",{parentName:"p",href:"/docs/configure"},"configuration guide"),"."),Object(l.b)(r.a,{defaultValue:"powershell",groupId:"env",values:[{label:"powershell",value:"powershell"},{label:"zsh",value:"zsh"},{label:"bash",value:"bash"},{label:"fish",value:"fish"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"powershell",mdxType:"TabItem"},Object(l.b)("p",null,"You can output the current theme to the format you like (",Object(l.b)("inlineCode",{parentName:"p"},"json"),", ",Object(l.b)("inlineCode",{parentName:"p"},"yaml")," or ",Object(l.b)("inlineCode",{parentName:"p"},"toml"),") which can be used to tweak and store as your custom theme."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},"Export-PoshTheme -FilePath ~/.mytheme.omp.json -Format json\n")),Object(l.b)("p",null,"Once you're done editing, adjust your ",Object(l.b)("inlineCode",{parentName:"p"},"$PROFILE")," to use your newly created theme."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},"Set-PoshPrompt -Theme ~/.mytheme.omp.json\n"))),Object(l.b)(s.a,{value:"zsh",mdxType:"TabItem"},Object(l.b)("p",null,"You can output the current theme to the format you like (",Object(l.b)("inlineCode",{parentName:"p"},"json"),", ",Object(l.b)("inlineCode",{parentName:"p"},"yaml")," or ",Object(l.b)("inlineCode",{parentName:"p"},"toml"),") which can be used to tweak and store as your custom theme."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'export_poshconfig "~/.mytheme.omp.json" json\n')),Object(l.b)("p",null,"Once you're done editing, adjust ",Object(l.b)("inlineCode",{parentName:"p"},"~/.zshrc")," to use your newly created theme."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'eval "$(oh-my-posh --init --shell zsh --config ~/.mytheme.omp.json)"\n')),Object(l.b)("p",null,"When adjusted, reload your profile for the changes to take effect."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},". ~/.zshrc\n"))),Object(l.b)(s.a,{value:"bash",mdxType:"TabItem"},Object(l.b)("p",null,"You can output the current theme to the format you like (",Object(l.b)("inlineCode",{parentName:"p"},"json"),", ",Object(l.b)("inlineCode",{parentName:"p"},"yaml")," or ",Object(l.b)("inlineCode",{parentName:"p"},"toml"),") which can be used to tweak and store as your custom theme."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'export_poshconfig "~/.mytheme.omp.json" json\n')),Object(l.b)("p",null,"Once you're done editing, adjust ",Object(l.b)("inlineCode",{parentName:"p"},"~/.bashrc")," to use your newly created theme."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'eval "$(oh-my-posh --init --shell bash --config ~/.mytheme.omp.json)"\n')),Object(l.b)("p",null,"When adjusted, reload your profile for the changes to take effect."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},". ~/.bashrc\n"))),Object(l.b)(s.a,{value:"fish",mdxType:"TabItem"},Object(l.b)("p",null,"You can output the current theme to the format you like (",Object(l.b)("inlineCode",{parentName:"p"},"json"),", ",Object(l.b)("inlineCode",{parentName:"p"},"yaml")," or ",Object(l.b)("inlineCode",{parentName:"p"},"toml"),") which can be used to tweak and store as your custom theme."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'export_poshconfig "~/.mytheme.omp.json" json\n')),Object(l.b)("p",null,"Once you're done editing, adjust ",Object(l.b)("inlineCode",{parentName:"p"},"config.fish")," to use your newly created theme."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"oh-my-posh --init --shell fish --config ~/.mytheme.omp.json | source\n")),Object(l.b)("p",null,"Once adjusted, reload your config for the changes to take effect."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},". ~/.config/fish/config.fish\n")))),Object(l.b)("p",null,"\ud83c\udf89\ud83c\udf89\ud83c\udf89"))}h.isMDXComponent=!0},117:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=o.a.createContext({}),c=function(e){var t=o.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,u=p["".concat(r,".").concat(m)]||p[m]||h[m]||l;return a?o.a.createElement(u,s(s({ref:t},i),{},{components:a})):o.a.createElement(u,s({ref:t},i))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=m;var s={};for(var b in t)hasOwnProperty.call(t,b)&&(s[b]=t[b]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var i=2;i<l;i++)r[i]=a[i];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},118:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},122:function(e,t,a){"use strict";var n=a(0),o=a(123);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},123:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)(void 0);t.a=o},127:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(122),r=a(118),s=a(56),b=a.n(s);var i=37,c=39;t.a=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,p=e.values,h=e.groupId,m=e.className,u=Object(l.a)(),d=u.tabGroupChoices,j=u.setTabGroupChoices,O=Object(n.useState)(s),f=O[0],y=O[1],g=n.Children.toArray(e.children),v=[];if(null!=h){var w=d[h];null!=w&&w!==f&&p.some((function(e){return e.value===w}))&&y(w)}var N=function(e){var t=e.target,a=v.indexOf(t),n=g[a].props.value;y(n),null!=h&&(j(h,n),setTimeout((function(){var e,a,n,o,l,r,s,i;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,l=e.right,r=window,s=r.innerHeight,i=r.innerWidth,a>=0&&l<=i&&o<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(b.a.tabItemActive),setTimeout((function(){return t.classList.remove(b.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case c:var n=v.indexOf(e.target)+1;a=v[n]||v[0];break;case i:var o=v.indexOf(e.target)-1;a=v[o]||v[v.length-1]}null===(t=a)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:Object(r.a)("tabs__item",b.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:x,onFocus:N,onClick:N},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},128:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);