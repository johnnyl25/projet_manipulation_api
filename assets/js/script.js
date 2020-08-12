// function getValue(e) {
//     e.preventDefault();
//     let nameCard = document.getElementById('#nameCard').value;
//     let translateCard = document.getElementById('#translateCard').value;
// let url = fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=" + nameCard + "&language=" + translateCard)
//     .then((response) => {
//         // .then(json => json.download_url);
//         // .then(function (json) {
//         let url = new URL(response.url);
//         console.log(url);
//         return url;
//     });
// }



$('#formulaire').submit(function (e) {
    e.preventDefault();
    $('.error').empty();
    let nameCard = document.getElementById('nameCard').value;
    let translateCard = document.getElementById('translateCard').value;
    let urlCard = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
    // let postdata = $(this);
    // console.log(nameCard);
    // console.log(translateCard);
    // console.log(urlCard);
    // console.log(postdata);

    $.ajax({
        type: 'GET',
        url: urlCard,
        data: 'fname=' + nameCard + '&language=' + translateCard,
        dataType: 'json',
        success: function (result) {
            let res = result['data'];
            for (let i = 0; i < res.length; i++) {
                const element = res[i];
                console.log(element);
                let resultat = document.getElementById('result');
                let img = element['card_images'][0]['image_url'];
                let price = element['card_prices'][i];
                let title = element['name'];
                let desc = element['desc'];
                for (let i = 0; i < element.length; i++) {
                    let toto = '<div class="card" ><img src="" class="card-img-top justify-content-center" alt="..." style="width:250px;height:300px;"><div class="card-body"><h5 class="card-title"></h5><p class="card-text"></p><p class="card-text"></p></div></div>';
                    toto.innerHTML = toto[i]
                }
                let pavé = '<div class="card" ><img src="' + img + '" class="card-img-top justify-content-center" alt="..." style="width:250px;height:300px;"><div class="card-body"><h5 class="card-title">' + title + '</h5><p class="card-text">' + desc + '</p><p class="card-text">' + price + '</p></div></div>'
                resultat.innerHTML = pavé
            }
        }
    });
});
