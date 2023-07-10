const hamburguesa = document.querySelector('.hamburguesa');

hamburguesa.addEventListener('click', () => {
    let collapse = document.querySelector('.collapse');
    let navbar = document.querySelector('.navbar')
    let logo = document.querySelector('.logo');
    let icon = document.querySelector('.material-symbols-outlined');

    if (!collapse.classList.contains('on')) {
        collapse.classList.add('on');
        navbar.style.height = '100vh';
        logo.style.display = 'none';
        icon.textContent = 'close';
    } else {
        collapse.classList.remove('on');
        navbar.style.height = 'auto';
        logo.style.display = 'flex';
        icon.textContent = 'menu';
    }
});


const link = document.querySelectorAll('.group-link a');


link.forEach((e) => {
    e.addEventListener('click', () => {

        for (let i = 0; i < link.length; i++) {
            link.item(i).classList.remove('active');
        }


        const collapse = document.querySelector('.collapse');
        let navbar = document.querySelector('.navbar')
        let logo = document.querySelector('.logo');
        let icon = document.querySelector('.material-symbols-outlined');

        if (collapse.classList.contains('on')){
            collapse.classList.remove('on');
            navbar.style.height = 'auto';
            logo.style.display = 'flex';
            icon.textContent = 'menu';
        }

        if (window.location.hash.substring(1) != e.hash.substring(1)){
            e.classList.add('active');
        }

     /*   if (window.location.hash.substring(1) != e.hash.substring(1)){
            e.classList.remove('active');
            console.log(e.previousSibling);

        }else{
            e.classList.add('active');
        }
 */

    });

})