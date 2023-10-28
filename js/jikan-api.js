async function getResponse() {
  // Api Call
  const response = await fetch('https://api.jikan.moe/v4/users/z-fx/userupdates', {
    method: 'GET',
  });
  const data = await response.json();
  // console.log(data.data.anime[0].entry.title)

  // CARD 1 SECTION
  // Api call for card 1
  const reponseSatu = await fetch(`https://api.jikan.moe/v4/anime/${data.data.anime[0].entry.mal_id}`, {
    method: 'GET',
  });
  const dataSatu = await reponseSatu.json();
  // Data buat judul card 1
  document.getElementById('score').innerText = dataSatu.data.score;

  // Data buat link card 1
  document.getElementById('linkMore').href = `${dataSatu.data.url}`;

  // Buat ngelimit judul card 1
  if (dataSatu.data.title.length >= 25) {
    dataSatu.data.title = document.getElementById('judul').innerText = dataSatu.data.title.substr(0, 22) + '...';
  } else document.getElementById('judul').innerText = dataSatu.data.title + ' - ' + dataSatu.data.type;

  // Image cover card 1
  document.getElementById('act1').src = `${dataSatu.data.images.jpg.large_image_url}`;

  // Buat ngelimit sinopsis card 1
  if (dataSatu.data.synopsis.length >= 55) {
    dataSatu.data.synopsis = document.getElementById('syn').innerText = dataSatu.data.synopsis.substr(0, 52) + '...';
  } else document.getElementById('syn').innerText = dataSatu.data.synopsis;

  // Buat genre card 1
  try {
    document.getElementById('genre1').innerText = dataSatu.data.genres[0].name;
    document.getElementById('genre2').innerText = dataSatu.data.genres[1].name;
    document.getElementById('genre3').innerText = dataSatu.data.genres[2].name;
  } catch (e) {
    console.log('Genre Kosong #1');
  }
  // console.log(dataSatu.data.title)

  async function getResponseDua() {
    // CARD 2 SECTION
    // Api call for card 2
    const responseDua = await fetch(`https://api.jikan.moe/v4/anime/${data.data.anime[1].entry.mal_id}`, {
      method: 'GET',
    });
    const dataDua = await responseDua.json();
    // Data score buat card 2
    document.getElementById('score2').innerText = dataDua.data.score;

    // Data link buat card 2
    document.getElementById('linkMore2').href = `${dataDua.data.url}`;

    // Buat ngelimit judul card 2
    if (dataDua.data.title.length >= 25) {
      dataDua.data.title = document.getElementById('judul2').innerText = dataDua.data.title.substr(0, 22) + '...';
    } else document.getElementById('judul2').innerText = dataDua.data.title + ' - ' + dataDua.data.type;

    // Buat ngelimit sinopsis card 2
    if (dataDua.data.synopsis.length >= 55) {
      dataDua.data.synopsis = document.getElementById('syn2').innerText = dataDua.data.synopsis.substr(0, 52) + '...';
    } else document.getElementById('syn2').innerText = dataDua.data.synopsis;

    // Image card 2
    document.getElementById('act2').src = `${dataDua.data.images.jpg.large_image_url}`;

    // Buat genre card 2
    try {
      document.getElementById('genre11').innerText = dataDua.data.genres[0].name || '';
      document.getElementById('genre22').innerText = dataDua.data.genres[1].name || '';
      document.getElementById('genre33').innerText = dataDua.data.genres[2].name || '';
    } catch (e) {
      console.log('Genre Kosong #2');
    }
  }
  setTimeout(getResponseDua(), 1500);

  async function getResponseTiga() {
    // CARD 3 SECTION
    // Api call for card 3
    const responseTiga = await fetch(`https://api.jikan.moe/v4/anime/${data.data.anime[2].entry.mal_id}`, {
      method: 'GET',
    });
    const dataTiga = await responseTiga.json();

    // Data score buat card 3
    document.getElementById('score3').innerText = dataTiga.data.score;

    // Data link buat card 3
    document.getElementById('linkMore3').href = `${dataTiga.data.url}`;

    // Buat ngelimit judul card 3
    if (dataTiga.data.title.length >= 25) {
      dataTiga.data.title = document.getElementById('judul3').innerText = dataTiga.data.title.substr(0, 22) + '...';
    } else document.getElementById('judul3').innerText = dataTiga.data.title + ' - ' + dataTiga.data.type;

    // Buat ngelimit sinopsis card 3
    if (dataTiga.data.synopsis.length >= 55) {
      dataTiga.data.synopsis = document.getElementById('syn3').innerText = dataTiga.data.synopsis.substr(0, 52) + '...';
    } else document.getElementById('syn3').innerText = dataTiga.data.synopsis;

    // Image cover card 3
    document.getElementById('act3').src = `${dataTiga.data.images.jpg.large_image_url}`;

    // Buat genre card 3
    try {
      document.getElementById('genre111').innerText = dataTiga.data.genres[0].name;
      document.getElementById('genre222').innerText = dataTiga.data.genres[1].name;
      document.getElementById('genre333').innerText = dataTiga.data.genres[2].name;
    } catch (e) {
      console.log('Kosong genre #3');
    }
    // setTimeout(getResponseDua(), 2000)
  }
  setTimeout(getResponseTiga(), 2000);
  // Cek response API
  if (!response.ok) {
    throw new Error(`HTTP Error, status: ${response.status}`);
    // Extracting data as a JSON Object from the response
  }

  // Total episode watch section
  let num = Number(data.data.anime[0].episodes_seen);
  let num2 = Number(data.data.anime[0].episodes_seen);

  let num3 = Number(data.data.anime[1].episodes_seen);
  let num4 = Number(data.data.anime[1].episodes_seen);

  let num5 = Number(data.data.anime[2].episodes_seen);
  let num6 = Number(data.data.anime[2].episodes_seen);

  // Status card 1
  document.getElementById('status').innerText = data.data.anime[0].status + ' - ' + num + ' of ' + num2 + ' eps';

  // Status card 2
  document.getElementById('status2').innerText = data.data.anime[1].status + ' - ' + num3 + ' of ' + num4 + ' eps';

  // Status card 3
  document.getElementById('status3').innerText = data.data.anime[2].status + ' - ' + num5 + ' of ' + num6 + ' eps';
}
setTimeout(getResponse(), 1000);