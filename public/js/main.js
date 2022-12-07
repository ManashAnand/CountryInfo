const submitBtn = document.getElementById('Submitbtn');
const CountryName = document.getElementById('countryName');
const imgBar = document.getElementById('imgBar');
const hindiTitle = document.getElementById('hindiTitle');
const englishTitle = document.getElementById('englishTitle');
const capital = document.getElementById('capital');
const region = document.getElementById('region');

// CountryName.style.color = "red";
// console.log(cityVal);

const getInfo = async (e) => {
    let cityVal = CountryName.value;
    // console.log(cityVal);
    e.preventDefault();
    if(cityVal === ''){
        cityVal = 'India';
    }
    else{
        try{
            let url = `https://restcountries.com/v3.1/name/${cityVal}?fullText=true`;
            const response = await fetch(url);
            const data = await response.json();
            // const arrData = [data];
            // console.log(arrData);
            console.log(data[0]);
            imgBar.src=data[0].flags.png;
            hindiTitle.innerText = data[0].altSpellings[0];
            region.innerText = data[0].region;
            capital.innerText = data[0].capital[0];
            englishTitle.innerText = data[0].altSpellings[1];

        }
        catch{
                console.log(error);
        }

    }

}
submitBtn.addEventListener('click',getInfo);