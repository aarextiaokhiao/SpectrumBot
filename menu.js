var opened=false

function SBMenu() {
	opened=!opened
	if (opened) {
		document.getElementById('spectrumbotscreen').style.display='block'
	} else {
		document.getElementById('spectrumbotscreen').style.display='none'
	}
}