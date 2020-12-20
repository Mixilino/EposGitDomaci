function alertVremeDatum(){
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    const sat = today.getHours();
    const minut = today.getMinutes()
    today = mm + '/' + dd + '/' + yyyy + "  " + sat + ":" + minut;
    alert(today);
}