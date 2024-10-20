import { datos } from './data.js';
import { Serie } from './serie.js';

let sTbody: HTMLElement = document.getElementById('series')!;
let avgTbody: HTMLElement = document.getElementById("promedio")!;
let avg: number = 0;

seriesTabla(datos);

function seriesTabla(series: Serie[]): void {
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        avg += serie.seasons;
        
        trElement.innerHTML = `
            <th>${serie.id}</th>
            <td class="text-primary">${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>`;

        trElement.addEventListener('click', () => {
            mostrarDetalles(serie);
        });

        sTbody.appendChild(trElement);
    });
    
    avg = Math.round(avg / series.length);
    avgTbody.innerHTML = `Promedio de temporadas: ${avg}`;
}

function mostrarDetalles(serie: Serie): void {
    let card = document.getElementById('serieDetails')!;
    let image = document.getElementById('serieImage') as HTMLImageElement;
    let title = document.getElementById('serieTitle')!;
    let description = document.getElementById('serieDescription')!;
    let link = document.getElementById('serieLink') as HTMLAnchorElement;

    image.src = serie.image;
    image.alt = serie.name; 
    title.textContent = serie.name;
    description.textContent = serie.description;
    link.href = serie.link;
    link.textContent = serie.link;
    card.style.display = "block";
}
