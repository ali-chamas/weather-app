const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');




search.addEventListener('click',()=>{
    const APIKEY='b8998c7c320dba3343b15059542cdd3';
    const city = document.querySelector('.search-box input').value;

    if(city === ''){
        return;
    }

    fetch(`http://api.weatherapi.com/v1/current.json?key=0fe199c75d89411d85d153212231007&q=${city}&aqi=no`)
    .then(res=>res.json()
        )
    .then(data=>{
        
        if(data.current === undefined){
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;

        }

       else if(data.current){
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            temperature.innerHTML=`${data.current.temp_c}<span>°C</span>`;
            image.src =data.current.condition.icon
            description.innerHTML=data.current.condition.text
            wind.innerHTML=`${data.current.wind_kph} Km/h`
            humidity.innerHTML=`${data.current.humidity} %`
            
        }
        
    
        
    
        
})
})

const close = document.querySelectorAll('#close');
close.forEach(e => {
    e.addEventListener('click',()=>{
        
        container.style.height = '105px';
        weatherBox.style.display = 'none';
        weatherDetails.style.display = 'none';
        error404.style.display = 'none';
        
        
        
    })
    
    
});








