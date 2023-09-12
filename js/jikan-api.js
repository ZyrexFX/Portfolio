fetch('https://api.jikan.moe/v4/users/z-fx/userupdates', {
  method: 'GET',
})
  .then((response) => response.json())
  .then((response) => {
    // console.log(response.data.anime[0].date);

    let num = Number(response.data.anime[0].episodes_seen);
    let num2 = Number(response.data.anime[0].episodes_seen);

    let num3 = Number(response.data.anime[1].episodes_seen);
    let num4 = Number(response.data.anime[1].episodes_seen);

    let num5 = Number(response.data.anime[2].episodes_seen);
    let num6 = Number(response.data.anime[2].episodes_seen);

    // Status card 1
    document.getElementById('status').innerText = response.data.anime[0].status + ' - ' + num + ' of ' + num2 + ' eps';

    // Status card 2
    document.getElementById('status2').innerText = response.data.anime[1].status + ' - ' + num3 + ' of ' + num4 + ' eps';

    // Status card 3
    document.getElementById('status3').innerText = response.data.anime[2].status + ' - ' + num5 + ' of ' + num6 + ' eps';

    // Card 1
    fetch(`https://api.jikan.moe/v4/anime/${response.data.anime[0].entry.mal_id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data)

        document.getElementById('score').innerText = response.data.score;

        document.getElementById('linkMore').href = `${response.data.url}`;

        if (response.data.title.length >= 25) {
          response.data.title = document.getElementById('judul').innerText = response.data.title.substr(0, 22) + '...';
        } else document.getElementById('judul').innerText = response.data.title + " - " + response.data.type;

        document.getElementById('act1').src = `${response.data.images.jpg.large_image_url}`;

        if (response.data.synopsis.length >= 55) {
          response.data.synopsis = document.getElementById('syn').innerText = response.data.synopsis.substr(0, 52) + '...';
        } else document.getElementById('syn').innerText = response.data.synopsis;

        document.getElementById('genre1').innerText = response.data.genres[0].name;
        document.getElementById('genre2').innerText = response.data.genres[1].name;
        document.getElementById('genre3').innerText = response.data.genres[2].name;
      });

    // Card 2
    fetch(`https://api.jikan.moe/v4/anime/${response.data.anime[1].entry.mal_id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.data)

        document.getElementById('score2').innerText = response.data.score;

        document.getElementById('linkMore2').href = `${response.data.url}`;

        if (response.data.title.length >= 25) {
          response.data.title = document.getElementById('judul2').innerText = response.data.title.substr(0, 22) + '...';
        } else document.getElementById('judul2').innerText = response.data.title + " - " + response.data.type;

        document.getElementById('act2').src = `${response.data.images.jpg.large_image_url}`;

        if (response.data.synopsis.length >= 55) {
          response.data.synopsis = document.getElementById('syn2').innerText = response.data.synopsis.substr(0, 52) + '...';
        } else document.getElementById('syn2').innerText = response.data.synopsis;

        document.getElementById('genre11').innerText = response.data.genres[0].name;
        document.getElementById('genre22').innerText = response.data.genres[1].name;
        document.getElementById('genre33').innerText = response.data.genres[2].name;
      });

    // Card 3
    fetch(`https://api.jikan.moe/v4/anime/${response.data.anime[2].entry.mal_id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.data)

        document.getElementById('score3').innerText = response.data.score;

        document.getElementById('linkMore3').href = `${response.data.url}`;

        if (response.data.title.length >= 25) {
          response.data.title = document.getElementById('judul3').innerText = response.data.title.substr(0, 22) + '...';
        } else document.getElementById('judul3').innerText = response.data.title + " - " + response.data.type;

        document.getElementById('act3').src = `${response.data.images.jpg.large_image_url}`;

        if (response.data.synopsis.length >= 55) {
          response.data.synopsis = document.getElementById('syn3').innerText = response.data.synopsis.substr(0, 52) + '...';
        } else document.getElementById('syn3').innerText = response.data.synopsis;

        document.getElementById('genre111').innerText = response.data.genres[0].name;
        document.getElementById('genre222').innerText = response.data.genres[1].name;
        document.getElementById('genre333').innerText = response.data.genres[2].name;
      });
  })
  .catch((err) => {
    console.log(err);
  });
