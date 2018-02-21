var base_url='https://aarextiaokhiao.github.io/SpectrumBot/'

var fontsheet=document.createElement('link')
fontsheet.rel='stylesheet'
fontsheet.href='https://fonts.googleapis.com/css?family=Roboto'
document.head.appendChild(fontsheet)

var sheet=document.createElement('link')
sheet.rel='stylesheet'
sheet.href=base_url+'style.css'
document.head.appendChild(sheet)

var menuscript=document.createElement('script')
menuscript.src=base_url+'menu.js'
document.head.appendChild(menuscript)

var screen=document.createElement('iframe')
screen.src=base_url+'screen.html'
screen.id='spectrumbotscreen'
screen.className='sbscreen'
screen.style.display='none'
setTimeout(function(){document.body.appendChild(screen)},500)
//botbutton.onClick=SB.openMenu

var botbutton=document.createElement('button')
botbutton.innerHTML='SpectrumBot'
botbutton.className='sbbutton botbutton'
setTimeout(function(){document.body.appendChild(botbutton);botbutton.onclick=function(){SBMenu()}},500)
//botbutton.onClick=SB.openMenu