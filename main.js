let map;


const weatherAPI = "WEATHER_API_KEY"

function handleAPI(data) {
    // console.log(data)
    numberMarkerImg = {
        url: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        size: new google.maps.Size(64, 64),
        scaledSize: new google.maps.Size(64, 64),
        anchor: new google.maps.Point(32, 32),
    };
    let marker = new google.maps.Marker({
        alt: data.name,
        position: {
            lat: data.coord.lat,
            lng: data.coord.lon
        },
        map: map,
        icon: numberMarkerImg,
        city: data.name,
    });


}
["Kyiv", "Chernihiv", "Vinnytsia", "Chernihiv", "Cherkasy", "Chernivtsi", "Dnipropetrovsk", "Donetsk", "Ivano-Frankivsk", "Kharkiv", "Kherson", "Khmelnytskyi", "Kirovohrad", "Luhansk", "Mykolaiv", "Poltava", "Rivne", "Sumy", "Ternopil", "Vinnytsia", "Lutsk", "Uzhhorod", "Zaporizhia", "Zhytomyr"].forEach(city => {
    $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPI}`, handleAPI)
});


function initMap() {

    myLatLng = {
        lat: 50.27,
        lng: 30.31
    }
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 50.27,
            lng: 30.31
        },
        zoom: 7
    });
};

$("#submit").on("click", function() {

    axios.get(`https:api.openweathermap.org/data/2.5/weather?q=${$('#input').val()}&appid=${weatherAPI}`).then(res => {
        document.querySelector('.city').innerHTML = res.data.name
        document.querySelector('.temp').innerHTML = (res.data.main.temp - 273).toFixed(3)
        document.querySelector('.humidity').innerHTML = res.data.main.humidity
        document.querySelector('.wind').innerHTML = res.data.wind.speed
        console.log(res)
    })
})
