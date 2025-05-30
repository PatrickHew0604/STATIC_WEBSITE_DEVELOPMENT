function show(detailId){
  if (detailId == 'TournamentSoon') {
    document.getElementById('showInfo').style.display='none';
    document.getElementById('hideInfo').style.display='block';
    document.getElementById('TournamentSoon').style.display='block';
  }
  else if (detailId == 'Rules'){
    document.getElementById('showRules').style.display='none';
      document.getElementById('hideRules').style.display='block';
      document.getElementById('Rules').style.display='block';
  }
  else if (detailId == 'History'){
    document.getElementById('showHistory').style.display='none';
      document.getElementById('hideHistory').style.display='block';
      document.getElementById('History').style.display='block';
  }

}
function hide(detailId){
  if (detailId == 'TournamentSoon'){
    document.getElementById('hideInfo').style.display='none';
    document.getElementById('showInfo').style.display='block';
    document.getElementById('TournamentSoon').style.display='none';
  }
  else if (detailId == 'Rules'){
    document.getElementById('hideRules').style.display='none';
    document.getElementById('showRules').style.display='block';
    document.getElementById('Rules').style.display='none';
  }
  else if (detailId == 'History'){
    document.getElementById('hideHistory').style.display='none';
    document.getElementById('showHistory').style.display='block';
    document.getElementById('History').style.display='none';
  }
}

