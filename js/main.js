$(document).ready(function(){
    function weather(data){
            let temp = (data.main.temp - 273).toFixed(1);
            let tempMax = (data.main.temp_max - 273).toFixed(1);
            let tempMin = (data.main.temp_min - 273).toFixed(1);            
            $('#tiempo').html(`<span id=sCity>${data.name}: </span>  ${data.weather[0].description}`);
            $('#icono').html(`<img src="img/iconos/${data.weather[0].icon}.png">`);
            $('#tempActual').html(`Temperatura Actual: ${temp} °C`);
            $('#pronostico').html(`Máxima: ${tempMax} °C   Mínima: ${tempMin} °C`);
    }
        
    $('form').submit(function(){
        let location = $('#txtCity').val();
        $('#txtCity').parent().find('span').remove();
        if (location==""){                
            $('#txtCity').parent().append('<span class="py-3"><img src="img/exclamation-mark.ico" id="ico">¡Debe ingresar una ciudad!</span>')
            return false;
        }

        $.get('https://api.openweathermap.org/data/2.5/weather?q='+location+'&&appid=75bdca1119d5b90a941cf7d6f0771e78',function(data){
            weather(data);
        }, 'json');
        return false;
    });
});
