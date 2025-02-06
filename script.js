const nama = localStorage.getItem('nama');
const ip = localStorage.getItem('Ip');
const LampValidate = localStorage.getItem('Lamp');
const ToogleLamp = document.querySelector('#toogle_lamp');
const LampCard = document.querySelector('#lamp_card');
document.querySelector('#WText').textContent = `Hi, ${nama}👋`;

document.addEventListener('DOMContentLoaded', function () {
    if (LampValidate == 'true') {
        ToogleLamp.checked = true;
        LampCard.classList.remove('bg-red-200');
        LampCard.classList.add('bg-lime-200');
    }else{
        return;
    }
});
ToogleLamp.addEventListener('change', async () =>{
    if (ToogleLamp.checked) {
        LampCard.classList.remove('bg-red-200');
        LampCard.classList.add('bg-lime-200');
        localStorage.setItem('Lamp', true);
        try {
            // Mengirim request POST menggunakan Fetch API
            const response = await fetch(`http://${ip}/led1`, {
              method: 'POST',
            });
          } catch (error) {
            alert(`Terjadi kesalahan: ${error.message}`);
          }
    }else{
        LampCard.classList.remove('bg-lime-200');
        LampCard.classList.add('bg-red-200');
        localStorage.setItem('Lamp', false);
        try {
            // Mengirim request POST menggunakan Fetch API
            const response = await fetch(`http://${ip}/led1`, {
              method: 'POST',
            });
          } catch (error) {
            alert(`Terjadi kesalahan: ${error.message}`);
          }
    }
})