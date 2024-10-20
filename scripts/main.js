import { datos } from './data.js';
var sTbody = document.getElementById('series');
var avgTbody = document.getElementById("promedio");
var avg = 0;
seriesTabla(datos);
function seriesTabla(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        avg += serie.seasons;
        trElement.innerHTML = "\n            <th>".concat(serie.id, "</th>\n            <td class=\"text-primary\">").concat(serie.name, "</td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>");
        trElement.addEventListener('click', function () {
            mostrarDetalles(serie);
        });
        sTbody.appendChild(trElement);
    });
    avg = Math.round(avg / series.length);
    avgTbody.innerHTML = "Promedio de temporadas: ".concat(avg);
}
function mostrarDetalles(serie) {
    var card = document.getElementById('serieDetails');
    var image = document.getElementById('serieImage');
    var title = document.getElementById('serieTitle');
    var description = document.getElementById('serieDescription');
    var link = document.getElementById('serieLink');
    image.src = serie.image;
    image.alt = serie.name;
    title.textContent = serie.name;
    description.textContent = serie.description;
    link.href = serie.link;
    link.textContent = serie.link;
    card.style.display = "block";
}
