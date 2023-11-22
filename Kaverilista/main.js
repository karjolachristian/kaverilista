function lisaaNimi() {
    let nimi = document.getElementById('nimi').value;
    if (nimi.trim() !== '') {
        var listaElementti = document.createElement('li');
        listaElementti.appendChild(document.createTextNode(nimi));
        nimilista.appendChild(listaElementti);
        document.getElementById('nimi').value = '';
       }
}